import React from "react";
import cover_logo from '../../assets/images/menu_logo/cover_logo.png'


import { withRouter } from "react-router-dom";

const Section1 = () => {
  
    return (
    <div>
         <section
      class="w-screen h-96 top-0 bg-OrangeMain rounded-b-coverRadius absolute"
    >
      <div class="flex justify-center">
        <img
          class="mt-24 h-20"
          src={cover_logo}
          alt="Basar cover_logo "
        />
      </div>
      {/* <!-- cover дээрх search input style --> */}
      <div class="flex items-center justify-center mt-10">
        <div class="flex border-gray-200">
          <input
            type="text"
            class="px-4 py-2 w-80 rounded-full relative"
            placeholder="Хайх утгаа оруулна уу"
          />
          <button
            class="px-6 py-2 ml-64 text-white bg-btnYagaan border-l rounded-full absolute hover:bg-orange-500"
          >
            Хайх
          </button>
        </div>
      </div>
    

      
    </section>
    </div>
    );
}

export default withRouter(Section1);