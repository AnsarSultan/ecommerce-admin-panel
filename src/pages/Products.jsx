import { Funnel, SquareArrowOutUpRight } from "lucide-react";
import iphone13Img from "../assets/images/iphone-13.jpg";
import iphoneXsImg from "../assets/images/iphone-xs.jpg";
import playStationImg from "../assets/images/playstation.jpg";
import nikeAirImg from "../assets/images/nike-air-jordan.jpg";
import Buttton from "../components/UI/Button";

export default function Products() {
  return (
    <section>
      <div className="bg-white w-full shadow-md flex flex-col p-3">
        <div className="flex justify-between mb-3">
          <p className="text-xl font-semibold ">All Products</p>
          <div className="flex items-center">
            <Buttton>
              <Funnel size={15} />
              Filter
            </Buttton>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="w-full bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              {[
                { img: iphone13Img, name: "Iphone 13 pro max", price: "$1200" },
                { img: iphoneXsImg, name: "Iphone Xs", price: "$1200" },
                {
                  img: playStationImg,
                  name: "Playstation 4 1TB Slim",
                  price: "$150",
                },
                { img: nikeAirImg, name: "Nike air Jordan", price: "$120" },
              ].map((product, index) => (
                <tr key={index} className="border-t  border-gray-300">
                  <td className="flex items-center gap-1 px-4 py-2 font-semibold">
                    <img
                      src={product.img}
                      alt={`${product.name} image`}
                      className="w-10"
                    />
                    {product.name}
                  </td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="flex items-center gap-2 px-4 py-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
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
