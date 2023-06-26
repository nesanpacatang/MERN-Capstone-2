import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import ford from "../assets/cartype/family/Ford-Ecosport-cars.png";
import foton from "../assets/cartype/family/foton-cars.png";
import nissan from "../assets/cartype/family/family cars-BMW X3_0.jpg";

export const Family = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Family Cars</h2>
      </div>
      <div className="container">
        <div className="grid gap-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="static border rounded-lg w-96 inline-block">
            <img
              src={ford}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Ford Ecosport
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">168 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3750 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 4,500 / Day</p>
                </div>
                <div className="text-center p-5">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="static border rounded-lg w-96 inline-block">
            <img
              src={foton}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Foton Transvan
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">13 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">130 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3600 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center p-5">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="static border rounded-lg w-96 inline-block">
            <img
              src={nissan}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">Nissan</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">18 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">318 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4400 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center p-5">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
