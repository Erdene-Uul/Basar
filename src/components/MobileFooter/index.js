import React from "react";
import playStore from '../../assets/images/footer_img/playstore.png';
import appStore from '../../assets/images/footer_img/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
const MFooter = () => {
    return (
       
            <footer className="h-56 w-full lg:hidden">
                <div className="h-full m-16">
                <div className="">
                            <div className="flex items-center justify-around">
                                <FontAwesomeIcon icon={solid('headset')} size="2x" />
                                <p className="text-lg font-medium font-Montserrat mx-6 ">77111208</p>
                                <button className="px-9 py-2 border font-Montserrat rounded-lg text-[#9B9B9B] ">Чатлах</button>
                            </div> </div>
                    
                            <div className="mt-10 mb-6">
                                <ul className="flex justify-around">
                                    <li>
                                        <a href="#">
                                            <div className="p-3 rounded-lg">
                                                <FontAwesomeIcon icon={brands('Facebook')} size="3x" className="hover:text-[#3b5998]"/>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Instagram')} size="3x" className="hover:text-[#bc2a8d]" />
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <div className="p-3 rounded-lg">
                                                <FontAwesomeIcon icon={brands('Twitter')} size="3x" className="hover:text-[#00acee]"/>
                                            </div>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <div className="p-3 rounded-lg">
                                                <FontAwesomeIcon icon={brands('Youtube')} size="3x" className="hover:text-[#FF0000]"/>
                                            </div>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-around">
                                <img src={playStore} alt="playstore" />
                                <img src={appStore} alt="appstore" />
                            </div>
                        </div>
                    

                <div className="h-9 w-full bg-slate-600 text-white text-xs  ">
                    <div className="flex items-center justify-around  ">
                        <p>All reserved by @basarmn</p>
                        <ul className="flex">
                         
                            <li className="mx-6 my-2">
                                <Link href="#" className="hover:text-slate-800 duration-400"
                                >ХАМТРАН АЖИЛЛАХ</Link >
                            </li>
                            <li className="ml-6 my-2">
                                <Link href="#" className="hover:text-slate-800 duration-400"
                                >ХОЛБОО БАРИХ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        
    )
}

export default MFooter;