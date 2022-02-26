import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class NewsDetails extends React.Component {

    news = this.props.location.state.news;

    render() {
        return (
            <div className="mt-20">
                News details <br/><br/>
                Author: {this.news.author.name}<br/>
                {this.news.content}<br/>
                <img src={this.news.photo}/>
            </div>
        )
    }
}
export default withRouter(NewsDetails);