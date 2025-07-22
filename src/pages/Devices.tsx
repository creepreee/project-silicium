import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const processors = [
  {
    name: "Snapdragon 8 Gen 2",
    devices: [
      { name: "Samsung Galaxy S23", status: "✅" },
      { name: "Xiaomi 13", status: "✅" },
      { name: "OnePlus 11", status: "⚠️" },
    ],
  },
  {
    name: "Snapdragon 888/888+",
    devices: [
      { name: "Samsung Galaxy S21", status: "✅" },
      { name: "Xiaomi Mi 11", status: "❌" },
      { name: "ASUS ROG Phone 5", status: "⚠️" },
    ],
  },
];

const legend = [
  { symbol: "✅", meaning: "Working" },
  { symbol: "⚠️", meaning: "Problematic" },
  { symbol: "❌", meaning: "Not Working" },
  { symbol: "❔", meaning: "Unknown" },
];

export default function Devices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Device Status</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Legend</h2>
        <table className="w-full border border-gray-300 rounded text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Symbol</th>
              <th className="p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {legend.map((item) => (
              <tr key={item.symbol} className="border-t">
                <td className="p-2 text-xl">{item.symbol}</td>
                <td className="p-2">{item.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-4">Supported Qualcomm Processors</h2>
      {processors.map((processor, index) => (
        <div key={processor.name} className="mb-4 border rounded overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center p-3 bg-gray-200 hover:bg-gray-300"
          >
            <span className="font-medium">{processor.name}</span>
            {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openIndex === index && (
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Device</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {processor.devices.map((device) => (
                  <tr key={device.name} className="border-t">
                    <td className="p-2">{device.name}</td>
                    <td className="p-2 text-xl">{device.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}

