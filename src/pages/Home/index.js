import React, { Component } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import Animals from "../../components/Animals";




class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <ServiceList />
                <Animals/>
                <Section3/>      
            </div>
        );
    }
}
export default Home;