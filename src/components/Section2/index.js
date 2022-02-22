import React from "react";
import axios from "../../axios-categories";
import Card from "../Card";

class Section2 extends React.Component {

    state = {
        cards: []
    };

    componentDidMount() {
        axios
            .get('/categories')
            .then( response => {
                this.setState({cards: response.data.data});
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <h1 className="italic font-Roboto text-blue-700 font-extrabold ml-36 mt-8">
        #ОНЦЛОХ БУЛАН
        </h1>
        {/* <!-- cover content мэдээ мэдээлэлийн хэсэг --> */}
        <div className="container mx-auto mt-80">
        <div className="flex items-stretch justify-around space-x-10 wrapper">
            {this.state.cards.map((el, index) => 
                <Card key={index} name={el.name} photo={el.photo} desc={el.description}/>
            )}
        </div>
        </div>
            </div>
    )};
}
export default Section2;