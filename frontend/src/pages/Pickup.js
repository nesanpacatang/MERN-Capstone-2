import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import ford from "../assets/cartype/pickUp/ford-pickUp.png";
import carry from "../assets/cartype/pickUp/SuzukiCarry.png";
import navara from "../assets/cartype/pickUp/nissan-navara-pickUp.png";

export const Pickup = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Pick-up Cars</h2>
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
              <h3 className="text-4xl px-10 font-semibold py-5">Ford</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">113 mph</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 5,000/Day</p>
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
              src={carry}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Suzuki Carry
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">2 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">120 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4500 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Manual</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 3,500/Day</p>
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
              src={navara}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Nissan Navara
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">180 km/h</span>
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
                  <p className="font-semibold">Php 5,000/Day</p>
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
