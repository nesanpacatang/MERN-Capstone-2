import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import chrysler from "../assets/cartype/bridal/chrysler-car.png";
import hyundai from "../assets/cartype/bridal/hyundai-car.png";
import bentley from "../assets/cartype/bridal/bridal cars-bentley-flying-spur.jpg";

export const Bridal = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Bridal Cars</h2>
      </div>
      <div className="container">
        <div className="grid gap-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="static border rounded-lg w-96 inline-block">
            <img
              classname="w-full"
              src={chrysler}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">Chrysler</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">250 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">7000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 15,000/Day</p>
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
              src={hyundai}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">Hyundai</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
                </li>
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">320 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">6250 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 21,999/Day</p>
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
              src={bentley}
              className="rounded-lg object-fill"
              alt="Toyota Avanza"
            />

            <div className="grid bg-card">
              <h3 className="text-4xl px-10 font-semibold py-5">Bentley</h3>
              <ul className="list-none flex justify-around gap-5 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">4 Seaters</span>
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
                  <span className="mx-2">4000 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="grid grid-cols-2">
                <div className="text-center p-5">
                  <p className="font-semibold">Php 20,999 Per Day</p>
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
