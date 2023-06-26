import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import kia from "../assets/cartype/casual/kia-soluto.png";
import mitsubishi from "../assets/cartype/casual/mitsubishi-mirage.png";
import toyota from "../assets/cartype/casual/toyota-avanza.png";

export const Casual = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-600">
          Casual Cars
        </h2>
      </div>
      <div className="container">
        <div className="grid gap-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="static border rounded-lg w-96 inline-block">
            <img
              src={kia}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">Kia Soluto</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">170 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6000 rpm</span>
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
              src={mitsubishi}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Mitsubishi Mirage
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">170 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6000 rpm</span>
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
              src={toyota}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">
                Toyota Avanza
              </h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">163 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 4,000 / Day</p>
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
