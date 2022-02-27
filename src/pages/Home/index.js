import React, { Component } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";

class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <ServiceList />
                <Animals/>
<<<<<<< HEAD
=======
                <div className="h-16 w-full bg-amber-400"></div>
                <Footer/>
>>>>>>> 9a3c476e551507dec46b1f8d8b13019e7d6a7a5c
            </div>
        );
    }
}
export default Home;