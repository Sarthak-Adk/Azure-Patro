import React from "react";

const exchangeRates = [
  { currency: "Indian Rupee (100)", buy: 160, sell: 160.15 },
  { currency: "U.S. dollar", buy: 141.61, sell: 142.21 },
  { currency: "European Euro", buy: 166.4, sell: 167.1 },
  { currency: "UK Pound Sterling", buy: 190.65, sell: 191.46 },
  { currency: "Swiss Franc", buy: 178.14, sell: 178.89 },
  { currency: "Australian dollar", buy: 93.51, sell: 93.91 },
  { currency: "Canadian dollar", buy: 102.04, sell: 102.47 },
  { currency: "Singapore dollar", buy: 110, sell: 110.47 },
  { currency: "Japanese Yen(10)", buy: 9.54, sell: 9.58 },
  { currency: "Chinese renminbi (Yuan)", buy: 19.87, sell: 19.95 },
  { currency: "Saudi Arabian riyal", buy: 37.75, sell: 37.91 },
  { currency: "Qatari riyal", buy: 38.85, sell: 39.02 },
  { currency: "Thai baht", buy: 4.42, sell: 4.44 },
];

export default function ExchangeRatesTable() {
  return (
    <div className="max-w-md mx-auto mt-2 pl-2 h-[300px] overflow-y-auto bg-gray-100  p-4 rounded-xl shadow ml-3">
      <h2 className="text-lg font-bold text-red-700 mb-4 uppercase tracking-wide">
        Foreign Exchange
      </h2>
      <table className="w-full text-sm text-left ">
        <thead className="border-b">
          <tr>
            <th className="pb-2 font-medium text-gray-800">Currency</th>
            <th className="pb-2 font-medium text-gray-800">Buy</th>
            <th className="pb-2 font-medium text-gray-800">Sell</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates.map((item, index) => (
            <tr key={index} className="border last:border-b ">
              <td className="py-2 border-r px-1">{item.currency}</td>
              <td className="py-2 border-r px-1">{item.buy}</td>
              <td className="py-2 px-1">{item.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
