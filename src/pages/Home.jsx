import React from "react";
import Buttton from "../components/UI/Button";
import iphone13Img from '../assets/images/iphone-13.jpg'
import iphoneXsImg from '../assets/images/iphone-xs.jpg'
import playStationImg from '../assets/images/playstation.jpg'

export default function () {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }
  return (
    <section>
      <div className="w-full bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-4xl font-semibold text-blue-500">{greeting}</h2>
          <p className="text-gray-500 mt-1">
            Here’s what happening with your store today
          </p>
          <div className="mt-6">
            <h2 className="text-gray-500">Today’s total sales</h2>
            <h2 className="text-3xl font-semibold text-stone-600">
              $21,349.29
            </h2>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="border-t-1 border-stone-300 p-4">
            <span className="font-bold text-stone-600">50+ orders</span> need to
            be fulfilled
          </h2>
          <h2 className="border-t-1 border-stone-300 p-4">
            <span className="font-bold text-stone-600">7 orders</span> have
            payments that need to be captured
          </h2>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 bg-white shadow-md p-6 mt-4">
        <div className="flex flex-col justify-center p-4 border-b-1 border-r-1 border-gray-200">
          <h2 className="text-gray-600 font-semibold">Orders</h2>
          <p className="text-gray-600 font-semibold text-2xl">15,450</p>
        </div>
        <div className="flex flex-col justify-center p-4 border-b-1 lg:border-r-1 border-gray-200">
          <h2 className="text-gray-600 font-semibold">Items sold</h2>
          <p className="text-gray-600 font-semibold text-2xl">1,054</p>
        </div>
        <div className="flex flex-col justify-center p-4 border-b-1 border-r-1 lg:border-r-0 border-gray-200">
          <h2 className="text-gray-600 font-semibold">Refunds</h2>
          <p className="text-gray-600 font-semibold text-2xl">$145.65</p>
        </div>
        <div className="flex flex-col justify-center p-4 border-b-1 lg:border-b-0 lg:border-r-1 border-gray-200">
          <h2 className="text-gray-600 font-semibold">Gross sale</h2>
          <p className="text-gray-600 font-semibold text-2xl">$100.26</p>
        </div>
        <div className="flex flex-col justify-center p-4 border-r-1 border-gray-200">
          <h2 className="text-gray-600 font-semibold">Shipping</h2>
          <p className="text-gray-600 font-semibold text-2xl">$365.53</p>
        </div>
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-gray-600 font-semibold">Processing</h2>
          <p className="text-gray-600 font-semibold text-2xl">861</p>
        </div>
      </div>
      <div className="bg-white w-full shadow-md flex flex-col mt-4">
        <div className="p-3">
          <h2 className="font-semibold">Best Selling Products</h2>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full table-auto ">
            <thead className="w-full bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Orders</th>
                <th className="px-4 py-2">Order(%)</th>
                <th className="px-4 py-2">Revenue</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              <tr className="border-t border-gray-300 relative ">
                <td className="flex items-center gap-1 px-4 py-2 font-semibold"><img src={iphone13Img} alt="Iphone 13 pro max image" className="w-10"/> Iphone 13 pro max</td>
                <td className="px-4 py-2">$1200</td>
                <td className="px-4 py-2">26</td>
                <td className="px-4 py-2">31%</td>
                <td className="px-4 py-2">$3400</td>
              </tr>
              <tr className="border-t border-gray-300 relative">
                <td className="flex items-center gap-1 px-4 py-2 font-semibold"><img src={iphoneXsImg} alt="Iphone Xs Image" className="w-10"/> Iphone Xs</td>
                <td className="px-4 py-2">$600</td>
                <td className="px-4 py-2">18</td>
                <td className="px-4 py-2">29%</td>
                <td className="px-4 py-2">$1311</td>
              </tr>
              <tr className="border-t border-gray-300 relative">
                <td className="flex items-center gap-1 px-4 py-2 font-semibold">
                  <img src={playStationImg} alt="Playstation 4 1TB Slim" className="w-10"/>
                  Playstation 4 1TB Slim
                </td>
                <td className="px-4 py-2">$120</td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2">19%</td>
                <td className="px-4 py-2">$234</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-between bg-gray-100 p-3">
            <div>
              <select
                name="duration"
                id="duration"
                className="bg-white px-2 py-1 border-1 border-gray-300 shadow-sm text-sm"
              >
                <option value="duration" selected>
                  Last 7 days
                </option>
                <option value="duration">Last Month</option>
                <option value="duration">Last Year</option>
              </select>
            </div>
            <div>
              <Buttton>View all</Buttton>
            </div>
          </div>
      </div>
    </section>
  );
}
