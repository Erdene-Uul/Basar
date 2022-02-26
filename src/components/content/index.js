import React from "react";
import { NavLink } from "react-router-dom";

class Content extends React.Component {
    render() {
        return (
            <div className="flex flex-shrink-0 my-3">
                <NavLink to={
                   {
                    pathname: "/news_details",
                    state: {news: this.props.news}
                   }
                } className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row">
                    <div className="relative h-36 w-44">
                        <img className="h-36 w-44 rounded-2xl" src={this.props.news.photo} alt="cover_img_01"/>
                        <button className="absolute bottom-2 lg:text-sm text-xs right-2 uppercase z-10 px-2 py-1 bg-btnSmColor rounded-full">{this.props.news.categoryName}</button>
                    </div>
                    
                    <div className="lg:ml-8 md:w-80 w-60 ml-3">
                        <h2 className="text-[#252641] text-base font-medium md:leading-7  md:pt-2">{this.props.news.title}</h2>
                        <p className="text-[#696984]  text-sm mt-3">{this.props.news.description}</p>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default Content;