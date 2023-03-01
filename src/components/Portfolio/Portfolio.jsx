// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';
import "./Portfolio.css"

let tvScriptLoadingPromise;

export default function Portfolio() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_63d45') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 980,
            height: 510,
            symbol: "NASDAQ:TSLA",
            timezone: "America/New_York",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            withdateranges: true,
            range: "YTD",
            allow_symbol_change: true,
            save_image: false,
            details: true,
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            container_id: "tradingview_63d45"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_63d45' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/NASDAQ-TSLA/" rel="noopener" target="_blank"><span className="blue-text">TSLA stock chart</span></a> by TradingView
      </div>
    </div>
  );
}