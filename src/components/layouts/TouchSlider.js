import React,{useEffect, useState} from "react";
import "./../../styles/carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

function TouchSlider({ title , items }){

    let userAgent='mobile';
    const [deviceType,SetDeviceType]=useState(null);
    useEffect(()=>{

        userAgent = navigator.userAgent;
        const parser = new UAParser();
        parser.setUA(userAgent);
        const result = parser.getResult();
        const deviceType = (result.device && result.device.type) || "desktop";
        SetDeviceType(deviceType);
    },[]);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <section className='slider-box box '>
            <h5 className='row header'>
                <div className='col s12 '>
                    <span className=" text-color slider-title active">
                      {title}
                    </span>
                
                </div>
                <div className="divider" />
            </h5>
            <div className='row slider-items'>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    /*autoPlay={deviceType !== "mobile" ? true : false}*/
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass=""
                    >
                                    {
                    items?.map(obj=>(
                        <div className="slider-item-parent">
                            <div key={obj+ Math.random()} className="carousel-card top-box z-depth-2 slider-item">
                                <Link to='/' className="card-content text-color carousel-card-content">
                                    <div className="carousel-image z-depth-2">
                                        <Image draggable={false}
                                         src={obj.src} />
                                    </div>
                                    <div className="carousel-text-content text-color">
                                        <div className="title top-box-text-color">

                                        {obj.title}
                                        </div>
                                        
                                        <div className="cost top-box-text-color-less">
                                            <span>
                                            {
                                                `
                                                یک 
                                                میلیون و
                                                 200
                                                هزار تومان
                                                `
                                            }
                                            </span>
                                       
                                        </div>
                                    </div>
                                
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </Carousel>
            </div>
        </section>

    )
}
export default TouchSlider;