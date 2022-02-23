import React from 'react';
import cat from '../../assets/images/animals/cat.png'

const Animal = (props) => {
    return (
        <div className="animals-responsive w-1/2">
            <img
                className="h-32 ml-32 absolute z-20"
                src = {cat}
                alt="cat"
            />
            <a
                href=""
                className={`bg-${props.color} z-10 w-full mt-8 mb-0 mx-4 rounded-2xl`}
            >
                <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                    {props.name}
                </h1>
            </a>
        </div>
    )
}

export default Animal;