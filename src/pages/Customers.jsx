import Button from "../components/UI/Button";
import { Ellipsis } from "lucide-react";

const customers = [
  {
    name: "Ricky Antony",
    email: "ricky@example.com",
    phone: "(201) 200-1851",
    address: "2392 Main Avenue, Penasauka, NJ 02139",
    joined: "30/03/2018",
  },
  {
    name: "Linda Johnson",
    email: "linda.j@example.com",
    phone: "(315) 220-1123",
    address: "1024 Elm Street, Albany, NY 12207",
    joined: "15/07/2019",
  },
  {
    name: "James Carter",
    email: "jamesc@example.com",
    phone: "(401) 555-9981",
    address: "78 River Road, Providence, RI 02903",
    joined: "01/01/2020",
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "(202) 321-5566",
    address: "87 Maple Street, Washington, DC 20001",
    joined: "22/05/2020",
  },
  {
    name: "Michael Smith",
    email: "michael.s@example.com",
    phone: "(718) 555-2345",
    address: "45 Broadway Ave, Brooklyn, NY 11211",
    joined: "10/11/2020",
  },
  {
    name: "Sarah Miller",
    email: "sarah.m@example.com",
    phone: "(404) 123-6789",
    address: "12 Peachtree St, Atlanta, GA 30303",
    joined: "03/02/2021",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "(702) 888-1212",
    address: "99 Desert Lane, Las Vegas, NV 89101",
    joined: "19/06/2021",
  },
  {
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    phone: "(713) 456-3344",
    address: "5601 Main St, Houston, TX 77002",
    joined: "05/07/2021",
  },
  {
    name: "Robert Brown",
    email: "robert.b@example.com",
    phone: "(503) 332-1122",
    address: "902 Pine St, Portland, OR 97205",
    joined: "21/09/2021",
  },
  {
    name: "Isabella Wilson",
    email: "isabella.w@example.com",
    phone: "(415) 555-6677",
    address: "33 Market St, San Francisco, CA 94105",
    joined: "30/11/2021",
  },
  {
    name: "William Garcia",
    email: "william.g@example.com",
    phone: "(206) 901-8888",
    address: "1234 Rainier Ave, Seattle, WA 98144",
    joined: "18/01/2022",
  },
  {
    name: "Olivia Thomas",
    email: "olivia.t@example.com",
    phone: "(407) 909-1234",
    address: "85 Disney Blvd, Orlando, FL 32830",
    joined: "12/03/2022",
  },
  {
    name: "Daniel Rodriguez",
    email: "daniel.r@example.com",
    phone: "(773) 321-7777",
    address: "909 W Madison St, Chicago, IL 60607",
    joined: "08/06/2022",
  },
  {
    name: "Grace Taylor",
    email: "grace.t@example.com",
    phone: "(212) 444-5555",
    address: "50 Wall Street, New York, NY 10005",
    joined: "28/10/2022",
  },
  {
    name: "Matthew Harris",
    email: "matthew.h@example.com",
    phone: "(512) 888-9999",
    address: "7700 N Lamar Blvd, Austin, TX 78752",
    joined: "04/01/2023",
  },
];

export default function Customers() {
  return (
    <section>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
          <p className="font-semibold text-xl">Customers</p>
          <div className="flex gap-2">
            <Button>Filter</Button>
            <Button>Export</Button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[800px] w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Billing Address</th>
                <th className="px-4 py-2">Joined</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{cust.name}</td>
                  <td className="px-4 py-2">{cust.email}</td>
                  <td className="px-4 py-2">{cust.phone}</td>
                  <td className="px-4 py-2">{cust.address}</td>
                  <td className="px-4 py-2">{cust.joined}</td>
                  <td className="px-4 py-2 text-right">
                    <Ellipsis className="cursor-pointer hover:bg-gray-300 rounded-md px-1" />
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
