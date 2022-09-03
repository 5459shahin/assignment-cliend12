import React from 'react';
import img1 from '../img/keenibiI-tools2.jpg';
import slide from '../img/slide1 .jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" /> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide} className="w-full"  alt="" /> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full"  alt="" /> /
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full"  alt="" /> /
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;