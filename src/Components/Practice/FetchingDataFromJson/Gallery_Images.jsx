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
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            // vertical slider

            // vertical: true,
            // verticalSwiping: true,
            // swipeToSlide: true,
            // beforeChange: function (currentSlide, nextSlide) {
            //     console.log("before change", currentSlide, nextSlide);
            // },
            // afterChange: function (currentSlide) {
            //     console.log("after change", currentSlide);
            // }

            // vertical slider

            // new setting for pauseOnHover
            // dots: true,
            // infinite: true,
            // slidesToShow: 3,
            // slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // pauseOnHover: true
            // new setting end here for pauseOnHover
        };
        return (
            <div>
                <Slider className="backg" {...settings}>
                    {/* {Gallery_Img.galleryData.map((items) => {
                        return (
                            <div>
                                <div>
                                    <img className="picSize" src={items.img} />
                                </div>
                            </div>
                        )
                    })} */}

                    <div>
                        <img className="picSize" src="https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg" />
                    </div>
                    <div>
                        <img className="picSize" src="https://i.pinimg.com/originals/c1/ba/4d/c1ba4d0fb26a8a9742cb5f5d6c7cb7da.jpg" />
                    </div>
                    <div>
                        <img className="picSize" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" />

                    </div>
                    <div>
                        <img className="picSize" src="https://i.pinimg.com/originals/c1/ba/4d/c1ba4d0fb26a8a9742cb5f5d6c7cb7da.jpg" />
                    </div>
                    <div>
                        <img className="picSize" src="https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg" />
                    </div>
                    <div>
                        <img className="picSize" src="https://i.pinimg.com/originals/c1/ba/4d/c1ba4d0fb26a8a9742cb5f5d6c7cb7da.jpg" />
                    </div>



                </Slider>

            </div>
        )
    }
}
