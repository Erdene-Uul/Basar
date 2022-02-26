import React, { Component } from "react";
import Content from "../../components/content";
import axios from "../../axios-news";
import BigContent from "../../components/BigContent";
import PostBg from "../../assets/images/niitlel.png";
import Section2 from "../../components/Section2";

class News extends Component {

    state = {
        news: [{}]
    }

    componentDidMount() {
        axios.get('/news').then(res => {
            this.setState({ news: res.data.data })
        })
    }

    render() {
        return (
            <div className="flex flex-col mt-32 wrapper font-">
                {/*TITLE*/}
                <div className="text-[#2F327D] text-3xl font-bold text-center font-Nunito-Sans">
                    МЭДЭЭ МЭДЭЭЛЭЛ
                    <p className="text-[#696983] text-lg leading-8 font-Nunito-Sans font-medium">Амьтдын тухай бүх мэдээллийг эндээс</p>
                </div>

                {/*SECTION 1*/}
                <div className=" w-full grid grid-cols-11 gap-4 h-auto mt-14">
                    <div className="col-span-3 col-start-2 ml-28">
                        <div>
                            {
                                <BigContent news={this.state.news[0]} />
                            }
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 flex flex-col"> {this.state.news.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                </div>

                {/*SECTION 2*/}
                <div className=" w-full grid grid-cols-11 gap-4 h-auto mt-28">
                    <div className="col-span-4 col-start-2 ml-28 flex flex-col"> {this.state.news.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                    <div className="col-span-3 col-start-8">
                        <div className="w-300px h-96 relative bg-black">
                            <img  src={PostBg}/>
                            <div className="absolute left-5 bottom-0 w-60 h-44">
                                <h1 className= " text-white text-2xl font-bold">Бид амьтанд хайртай </h1>
                                <p className="text-white py-6">Амьтдын төлөө хамтдаа таны дуу хоолой хэрэгтэй байна</p>
                                <button className="py-2 px-8 rounded-md  text-black bg-white">Нийтлэл бичих</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*SECTION 3 - Slider*/}
                <div>
                    <Section2 />
                </div>

                {/*SECTION 4*/}
             
                    <div className=" w-full grid grid-cols-11 gap-4 h-auto my-14">
                    <div className="col-span-5 col-start-2 flex flex-col"> {this.state.news.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                       <div className="col-span-4 col-start-7 flex flex-col"> {this.state.news.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                    </div>
                </div>
          
        );
    }
}
export default News;