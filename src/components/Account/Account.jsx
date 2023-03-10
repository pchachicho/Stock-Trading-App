import React from "react";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import "../Account/Account.css";

function Account() {
  const [stockList, setStockList] = useState([]);
  //New Stocks
  const [newStockTicker, setNewStockTicker] = useState("");
  const [newStockPrice, setNewStockPrice] = useState(0);
  const [newStockSell, setNewStockSell] = useState(false);
  const [newStockBuy, setNewStockBuy] = useState(false);
// Update Title State
const [updatedPrice, setUpdatedPrice] = useState(0)
  const stockCollectionRef = collection(db, "Stocks");
  useEffect(() => {
    const getStockList = async () => {
      // Read the data
      // set the stock list
      try {
        const data = await getDocs(stockCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setStockList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getStockList();
  });
  const onSubmitStock = async () => {
    try {
      await addDoc(stockCollectionRef, {
        ticker: newStockTicker,
        price: newStockPrice,
        sell: newStockSell,
        buy: newStockBuy,
      });
    } catch (err) {
      console.error(err);
    }
  };
  const deleteStock = async (id) => {
    const stockDoc = doc(db, "Stocks", id);
    await deleteDoc(stockDoc);
  };
  const updateStockPrice = async (id) => {
    const stockDoc = doc(db, "Stocks", id)
    await updateDoc(stockDoc, { price: updatedPrice})
  }
  return (
    <div>
      <div className="account-container">
        <input
          className="ticker"
          placeholder="Stock Ticker..."
          onChange={(e) => setNewStockTicker(e.target.value)}
        />
        <input
          className="ticker"
          placeholder="Stock Price..."
          type="number"
          onChange={(e) => setNewStockPrice(Number(e.target.value))}
        />
        <input
          className="sell-stock"
          type="radio"
          name="radio"
          onChange={(e) => setNewStockSell(e.target.checked)}
        />
        <label>Sell Stock </label>
        <input
          className="buy-stock"
          type="radio"
          name="radio"
          onChange={(e) => setNewStockBuy(e.target.checked)}
        />
        <label>Buy Stock </label>
        <button className="submit" type="button" onClick={onSubmitStock}>
          Submit
        </button>
      </div>
      <div>
        {stockList.map((stock) => (
          <div>
            <h1 className="Sell">{stock.sell}</h1>
            <h1 className="Buy">{stock.buy}</h1>
            <h1>{stock.ticker}</h1>
            <p>Price: {stock.price}</p>
            <button className="delete" onClick={() => deleteStock(stock.id)}>
              Delete Stock
            </button>
            <input placeholder="New stock price" onChange={(e) => setUpdatedPrice(e.target.value)}></input>
            <button onClick={()=> updateStockPrice(stock.id)}>Update Price</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
