import React from "react";

const RightSidebar = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="bg-yellow-500 rounded-full p-2">
          <img
            src="/path-to-home-icon.jpg"
            alt="Home Icon"
            className="w-6 h-6"
          />
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-semibold mb-4">My Services</h2>
        <ul>
          <li className="mb-4 flex items-center">
            <div className="bg-gray-200 p-2 rounded mr-4">
              <img
                src="/path-to-web-icon.jpg"
                alt="Web Icon"
                className="w-6 h-6"
              />
            </div>
            <p>Web Development</p>
          </li>
          <li className="mb-4 flex items-center">
            <div className="bg-gray-200 p-2 rounded mr-4">
              <img
                src="/path-to-uiux-icon.jpg"
                alt="UI/UX Icon"
                className="w-6 h-6"
              />
            </div>
            <p>UI/UX Design</p>
          </li>
          <li className="mb-4 flex items-center">
            <div className="bg-gray-200 p-2 rounded mr-4">
              <img
                src="/path-to-sound-icon.jpg"
                alt="Sound Icon"
                className="w-6 h-6"
              />
            </div>
            <p>Sound Design</p>
          </li>
          {/* ... outros serviços ... */}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Price Plans</h2>
        {/* ... Conteúdo de planos de preço aqui ... */}
      </div>
    </div>
  );
};

export default RightSidebar;
