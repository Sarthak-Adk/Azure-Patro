import React from "react";

const goldSilverRates = [
  { metal: "Gold Hallmark (छापावाल सुन)", unit: "tola", price: "221,301.07" },
  { metal: "Gold Tajabi (तेजाबी सुन)", unit: "tola", price: "0.00" },
  { metal: "Silver (चाँदी)", unit: "tola", price: "2,685.05" },
  { metal: "Gold Hallmark (छापावाल सुन)", unit: "10g", price: "189,730.00" },
  { metal: "Gold Tajabi (तेजाबी सुन)", unit: "10g", price: "0.00" },
  { metal: "Silver (चाँदी)", unit: "10g", price: "2,302.00" },
];

export default function GoldSilverRates() {
  return (
    <div className="max-w-md mx-auto mt-4 pl-2 h-[300px] overflow-y-auto bg-gray-100  p-4 rounded-xl shadow ml-3">
      <h2 className="text-xl font-bold text-black mb-4 uppercase">
        <span className="text-[#ffe100]">Gold</span> & <span className="text-gray-400">Silver</span> <span className=""> Rates</span>
      </h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className=" px-1">
            <th className="text-left text-gray-800 font-medium pb-2 ">Metal</th>
            <th className="text-left text-gray-800 font-medium pb-2 ">Unit</th>
            <th className="text-left text-gray-800 font-medium pb-2 ">Price (Nrs.)</th>
          </tr>
        </thead>
        <tbody>
          {goldSilverRates.map((item, index) => (
            <tr key={index} className="border">
              <td className="py-2 border-r px-1">{item.metal}</td>
              <td className="py-2 border-r px-1">{item.unit}</td>
              <td className="py-2 px-1">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
