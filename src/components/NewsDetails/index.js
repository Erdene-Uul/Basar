import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class NewsDetails extends React.Component {

    news = this.props.location.state.news;

    render() {
        return (
            <div className="mt-20 flex justify-center items-center flex-col space-y-36 wrapper">
                <div>
                    <span>{this.news.categoryName}</span>
                    <h1 className="font-bold text-2xl">{this.news.title}</h1>
                </div>
                <div className="flex">
                    <img className="h-20 rounded-full" src={this.news.author.photo} />
                    <span className="text-sm">{this.news.author.name}</span>
                    <span className="text-sm">{this.news.author.position}</span>
                    <p className=" text-xs">{this.news.createdAt.substring(0, 10)}</p>
                </div>
                {this.news.content.content1}
                <div className="w-112">
                    <img src={this.news.photo} />
                </div>
                <div>
                    {this.news.content.content2}
                </div>
            </div>
        )
    }
}
export default withRouter(NewsDetails);