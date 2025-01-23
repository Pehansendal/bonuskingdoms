'use client';

import { useEffect } from 'react';

export function CryptoTicker() {
  useEffect(() => {
    // Last inn TradingView script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        },
        {
          description: "XRP",
          proName: "BITSTAMP:XRPUSD"
        },
        {
          description: "Dodgecoin",
          proName: "CRYPTO:DOGEUSD"
        },
        {
          description: "Litecoin",
          proName: "CRYPTOCAP:LTC"
        },
        {
          description: "Tether",
          proName: "BINANCE:SUSDT"
        },
        {
          description: "Monero",
          proName: "CRYPTO:XMRUSD"
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    // Legg til widget container
    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer) {
      const widget = document.createElement('div');
      widget.className = 'tradingview-widget-container__widget';
      widgetContainer.appendChild(widget);
      widgetContainer.appendChild(script);
    }

    // Cleanup ved unmount
    return () => {
      const container = document.getElementById('tradingview-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-widget" className="tradingview-widget-container border-b border-white/10">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
} 