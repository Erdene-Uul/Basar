import React, { Component } from "react";
import Content from "../../components/content";
import axios from "../../axios-news";
import BigContent from "../../components/BigContent";
import PostBg from "../../assets/images/niitlel.png";
import Section2 from "../../components/Section2";



class News extends Component {

    state = {
        news: [{}],
        section1:[],
        section2: [],
        section3:[],
        section4:[]
    }

    componentDidMount() {
        axios.get('/news').then(res => {
            this.setState({ news: res.data.data })
        }).finally(() => {
            const fsection1 = [...this.state.section1]
            for (let i = 1; i < 4; i++) {
                fsection1.push(this.state.news[i])
            }
            
            this.setState({section1:fsection1});
            console.log(this.state.section1)
            
            const fsection2 = [...this.state.section2]
            for (let i = 4; i < 7; i++) {
                fsection2.push(this.state.news[i])
            }
            
            this.setState({section2:fsection2});
            console.log(this.state.section2)

            const fsection3 = [...this.state.section3]
            for (let i = 7; i < 10; i++) {
                fsection3.push(this.state.news[i])
            }
            
            this.setState({section3:fsection3});
            console.log(this.state.section3)

            const fsection4 = [...this.state.section4]
            for (let i = 10; i < 13; i++) {
                fsection4.push(this.state.news[i])
            }
            
            this.setState({section4:fsection4});
            console.log(this.state.section4)
        })

       
    }
    

    render() {
        return (
            <div className="flex flex-col mt-32 wrapper">
                {/*TITLE*/}
                <div className="text-[#2F327D] text-2xl font-bold text-center">
                    МЭДЭЭ МЭДЭЭЛЭЛ
                    <p className="text-[#696983] text-xs">Амьтдын тухай бүх мэдээллийг эндээс</p>
                </div>

                {/*SECTION 1*/}
                <div className=" w-full grid grid-cols-11 gap-4 h-auto my-14">
                    <div className="col-span-5">
                        <div>
                            {
                                <BigContent news={this.state.news[0]} />
                            }
                        </div>
                    </div>
                    <div className="col-span-6 ml-8 flex flex-col">
                    {this.state.section1.map((el, index) => (
                        <Content key={index} news={el} />
                    ))}
                    </div>
                </div>

                {/*SECTION 2*/}
                <div className=" w-full grid grid-cols-11 gap-4 h-auto ">
                    <div className="col-span-6 ml-8 flex flex-col"> {this.state.section2.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                    <div className="col-span-5">
                        <div className="w-300px h-96 relative bg-black">
                            <img src={PostBg} />
                            <div className="absolute left-5 bottom-0 w-60 h-44">
                                <h1 className=" text-white text-2xl font-bold">Бид амьтанд хайртай </h1>
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
                <div className="my-14">
                    <div className=" w-full grid-cols-16 gap-4 h-auto flex flex-row">
                        <div className="col-span-6 ml-8 flex flex-col"> {this.state.section3.map((el, index) => (
                            <Content key={index} news={el} />
                        ))} </div>
                        <div className="col-span-6 ml-8 flex flex-col"> {this.state.section4.map((el, index) => (
                            <Content key={index} news={el} />
                        ))} </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;