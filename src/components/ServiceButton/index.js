import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ServiceButton = (props) => {
    return (
        <div class="flex justify-around">
          <div class={`w-20 h-20 bg-${props.color} rounded-md hover:bg-${props.colorH} transition-all ease-in-out duration-500 cursor-pointer`}>
            <div class="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('headphones')} size="3x" color="white"/>
            </div>
            <h2 class="mt-2 mr-2 text-sm inline-block w-20 text-center">
              {props.text}
            </h2>
          </div>
        </div>
    );
}
export default ServiceButton;