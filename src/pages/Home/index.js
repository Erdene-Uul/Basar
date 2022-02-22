import React, { Component } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";

class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <ServiceList />
            </div>
        );
    }
}
export default Home;