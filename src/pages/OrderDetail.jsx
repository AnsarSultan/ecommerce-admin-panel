export default function OrderDetail() {
  return (
    <section>
      <div className="w-full bg-white flex flex-col gap-6 p-4 shadow-lg">
        <div>
          <h2 className="font-semibold text-2xl">Order Details: #2737</h2>
          <p className="text-sm text-stone-600">April 21, 2019, 5:33 PM</p>
        </div>
        <div className="flex items-center gap-1">
          <h2 className="text-xl font-semibold">Status:</h2>
          <p className="bg-yellow-100 px-2 rounded-md text-yellow-900">
            pending
          </p>
        </div>
      </div>
      <div className="w-full bg-white text-stone-600 flex flex-col lg:flex-row justify-between p-4 mt-4 shadow-lg">

        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Billing Address</h2>
          <h2 className="text-sm mt-2 font-semibold">Antony Hopkins</h2>
          <p className="text-sm">
            2393 Main Avenue Penasauka, New Jersey 87896
          </p>
          <div className="mt-3">
            <h2 className="text-sm">
              <span className="font-semibold">Email:</span> antony@example.com
            </h2>
          </div>
          <div>
            <h2 className="text-sm">
              <span className="font-semibold">Phone:</span> 7897987987
            </h2>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-xl">Shipping Address</h2>
          <h2 className="text-sm mt-2 font-semibold">Antony Hopkins</h2>
          <p className="text-sm">
            2393 Main Avenue Penasauka, New Jersey 87896
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">Payment Method</h2>
          <h2 className="text-sm mt-2 font-semibold">Antony Hopkins</h2>
          <p className="text-sm">**** **** **** 9809</p>
        </div>

      </div>
      <div className="w-full bg-white text-stone-600 flex flex-col items-center overflow-x-auto p-4 mt-4 shadow-lg">
        <table className="w-full text-left">
          <thead className="text-left">
            <tr className="bg-gray-100">
              <th className="px-2 py-2">Products</th>
              <th className="px-2 py-2">Quantity</th>
              <th className="px-2 py-2">Rate</th>
              <th className="px-2 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-1 border-gray-200">
              <td className="px-2 py-2">Iphone 13 pro max</td>
              <td className="px-2 py-2">2</td>
              <td className="px-2 py-2">$130.00</td>
              <td className="px-2 py-2">$2600.00</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="px-2 py-2">Playstation 4 1TB Slim</td>
              <td className="px-2 py-2">1</td>
              <td className="px-2 py-2">$150.00</td>
              <td className="px-2 py-2">$1500.00</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="px-2 py-2">Nike air Jordan</td>
              <td className="px-2 py-2">2</td>
              <td className="px-2 py-2">$120.00</td>
              <td className="px-2 py-2">$240.00</td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-4">
          <table className="text-sm text-center w-full max-w-xs">
            <tbody>
              <tr>
                <th className="px-2 py-1">Subtotal:</th>
                <td className="px-2 py-1">$6,230.00</td>
              </tr>
              <tr className="border-b-1 border-gray-300">
                <th className="px-2 py-1">Ta 5%:</th>
                <td className="px-2 py-1">$311.50</td>
              </tr>
              <tr className="font-bold">
                <th className="px-2 py-1">Total:</th>
                <td className="px-2 py-1">$6,541.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
