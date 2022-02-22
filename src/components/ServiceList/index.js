import React from "react";

import ServiceButton from "../ServiceButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ServiceList = (props) => {
    return (
        <section class="mt-36 w-screen h-96 bg-bgServiceColor px-44 py-24">
        <h1 class="text-center text-blue-700 italic font-semibold pb-10">
          #Үйлчилгээ
        </h1>
        {/* <!-- service icon --> */}
        <div class="flex justify-around">
          <ServiceButton text="Үйлчилгээ" color="green-500" colorH="green-600" icon="headphones"/>
          <ServiceButton text="Гоо сайхан" color="orange-500" colorH="orange-600" icon="headphones"/>
          <ServiceButton text="Тусламж" color="red-500" colorH="red-600" icon="headphones"/>
          <ServiceButton text="Дэлгүүр" color="yellow-400" colorH="yellow-500" icon="headphones"/>
          <ServiceButton text="Асрах" color="violet-800" colorH="violet-900" icon="headphones"/>
          <ServiceButton text="Арга хэмжээ" color="fuchsia-700" colorH="fuchsia-800" icon="headphones"/>
        </div>
      </section>
  
    );
}
export default ServiceList;