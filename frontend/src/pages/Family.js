import { FaUsers } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

import ford from "../assets/cartype/family/Ford-Ecosport-cars.png";
import foton from "../assets/cartype/family/foton-cars.png";
import nissan from "../assets/cartype/family/family cars-BMW X3_0.jpg";

export const Family = () => {
  return (
    <div className="mt-20 mb-20">  
        <h2 className="text-3xl font-bold text-center mb-10">Family Cars</h2>
      <div className="container-family">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">

          {/* 1st card 1st row */}
          <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
            <img
              src={ford}
              className="rounded-lg h-full w-full object-cover"
              alt="Toyota Avanza"
            />

            </div>

            <div className="grid ">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Ford Ecosport
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">168 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
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
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 4,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div> {/* 1st card 1st row */}
          
          {/* 2nd card 1st row */}
          <div className=" border bg-shade rounded-lg grid">
            <div className="h-56 overflow-hidden">

            <img
              src={foton}
              className="rounded-lg w-full h-full object-cover"
              alt="Toyota Avanza"
             
            />
            </div>

            <div className="grid">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Foton Transvan
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">13 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">130 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
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
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card 1st row */}
          <div className="grid bg-card border rounded-lg ">
            <div className="h-56 overflow-hidden">
            <img
              src={nissan}
              className="rounded-lg h-full w-full object-cover"
              alt="Toyota Avanza"
            />

            </div>

            
            <div className="grid ">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">Nissan</h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">18 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">318 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
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
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9  ">
                <div className="text-center ">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center">
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
