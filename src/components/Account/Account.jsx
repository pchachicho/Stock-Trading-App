import React from "react";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
function Account() {
  const [stockList, setStockList] = useState([]);
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
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getStockList();
  });

  return <div>Account</div>;
}

export default Account;
