import React, { Component } from 'react';
import { Gallery_Img } from '../UseStatePractice/State/Reducer/Gallery_Img';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';


export default class Gallery_Images extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    {Gallery_Img.galleryData.map((items) => {
                        return (
                            <div>
                                <div>
                                    <img className="picSize" src={items.img} />
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        )
    }
}
