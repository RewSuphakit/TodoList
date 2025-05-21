import React from "react";

function About() {
  return (
    <div className=" bg-gradient-to-br from-white to-pink-100 p-8 rounded-2xl">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        About Us
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Hi, I'm Suphakit Lomlao
          </h2>
          <p className="text-lg text-gray-600 ">
            มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน{" "}
          </p>
          <p className="text-lg text-gray-600 ">วิทยาเขตขอนแก่น</p>
          <p className="text-lg text-gray-600 mb-4">ครุศาสตร์อุตสาหกรรมคอมพิวเตอร์</p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Technology Used
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-full w-48 h-48 border-8 border-pink-300 shadow-lg hover:scale-105 transition-transform duration-300"
            src="https://media.tenor.com/HoB0kveWeJcAAAAe/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81-%E0%B9%81%E0%B8%A1%E0%B8%A7.png"
            alt="Suphakit"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
