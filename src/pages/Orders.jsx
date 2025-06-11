import { Ellipsis , Funnel , SquareArrowOutUpRight} from "lucide-react";
import { useState , useRef , useEffect} from "react";
import Buttton from "../components/UI/Button";
import { Link } from "react-router-dom";

export default function Orders() {
    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRef = useRef();
  
    // Close dropdown on outside click
    useEffect(() => {
      function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpenIndex(null);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const dummyOrders = [
        {
          id: "1001",
          shipTo: "Lahore, Punjab, Pakistan",
          date: "01/05/2025",
          status: "Delivered",
          amount: "$1200",
        },
        {
          id: "1002",
          shipTo: "Karachi, Sindh, Pakistan",
          date: "02/05/2025",
          status: "Pending",
          amount: "$750",
        },
        {
          id: "1003",
          shipTo: "Islamabad, Capital Territory, Pakistan",
          date: "03/05/2025",
          status: "Cancelled",
          amount: "$0",
        },
        {
          id: "1004",
          shipTo: "Multan, Punjab, Pakistan",
          date: "04/05/2025",
          status: "Shipped",
          amount: "$980",
        },
        {
          id: "1005",
          shipTo: "Faisalabad, Punjab, Pakistan",
          date: "05/05/2025",
          status: "Processing",
          amount: "$430",
        },
        {
          id: "1006",
          shipTo: "Peshawar, KPK, Pakistan",
          date: "06/05/2025",
          status: "Delivered",
          amount: "$1500",
        },
        {
          id: "1007",
          shipTo: "Quetta, Balochistan, Pakistan",
          date: "07/05/2025",
          status: "Returned",
          amount: "$250",
        },
        {
          id: "1008",
          shipTo: "Sialkot, Punjab, Pakistan",
          date: "08/05/2025",
          status: "Delivered",
          amount: "$670",
        },
        {
          id: "1009",
          shipTo: "Rawalpindi, Punjab, Pakistan",
          date: "09/05/2025",
          status: "Pending",
          amount: "$890",
        },
        {
          id: "1010",
          shipTo: "Hyderabad, Sindh, Pakistan",
          date: "10/05/2025",
          status: "Shipped",
          amount: "$990",
        },
        {
          id: "1011",
          shipTo: "Bahawalpur, Punjab, Pakistan",
          date: "11/05/2025",
          status: "Processing",
          amount: "$320",
        },
        {
          id: "1012",
          shipTo: "Abbottabad, KPK, Pakistan",
          date: "12/05/2025",
          status: "Delivered",
          amount: "$610",
        },
      ];
      
      
  return (
    <section className="h-full flex flex-col">
    <div className="w-full bg-white shadow-md p-3 flex-1 flex flex-col overflow-hidden">
     <div className="flex justify-between mb-3">
     <p className="text-xl font-semibold ">Orders</p>
     <div className="flex items-center">
     <Buttton><Funnel size={15}/>Filter</Buttton>
     <Buttton><SquareArrowOutUpRight size={15}/>Export</Buttton>
     </div>
     </div>
      <div className="w-full overflow-x-auto flex-1">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Order #</th>
              <th className="px-4 py-2">Ship to</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order, index) => (
              <tr className="border-t border-gray-300" key={order.id}>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2  hover:text-blue-600"><Link to="/orders/order-detail">{order.shipTo}</Link></td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">{order.amount}</td>
                <td className="px-4 py-2 relative" ref={dropdownRef}>
                  <Ellipsis
                    className="cursor-pointer hover:bg-gray-300 rounded-md px-1"
                    size={30}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                  {openIndex === index && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border shadow-lg rounded-md z-10">
                      <ul className="text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pending  </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delivered</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shipped</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Cancel</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  
  );
}
