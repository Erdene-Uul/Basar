import React from "react";
import Animal from "../Animal";
const Animals = () => {
    return (
        <section className="wrapper my-12 h-52.0625rem ">
            <h1 className="uppercase font-extrabold text-indigo-900 my-10 relative">
                Амьтад
            </h1>
            <div className="flex flex-wrap">
                <Animal name="Загас" color= "sky-100" />
                <Animal name="Нохой" color= "sky-200"/>
                <Animal name="Муур" color= "amber-200"/>
                <Animal name="Усан Гахай" color= "indigo-200"/>
                <Animal name="Туулай" color= "zinc-200"/>
                <Animal name="Шувуу" color= "lime-100"/>
                <Animal name="Яст мэлхий" color= "red-100"/>
                <Animal name="Зараа" color= "purple-100"/>
            </div>
        </section>
    )
}

export default Animals;