import React, { useEffect,useState } from "react";
import IndexBanner from "../components/index/IndexBanner";
import TouchSlider from "../components/layouts/TouchSlider";
import IndexDescription from '../components/index/IndexDescription';

import {useData} from './../providers/IndexProvider'

import main_slider_img1 from "./../test_doc/main_carousel_img1.jpg";
const init ={
        
    "last_products" : {
                           "title":"آخرین محصولات",
                           "items":[
                                   {
                                       "id":1,
                                       "title":"نرد تخته ی سه لایه" ,
                                        "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                       },
                                   { "id":2,"title":"مجسمه ی چوبی اسب وحشی",
                                    "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                                   {"id":3,"title":"تابلوی دیواری با طرح حافظ", "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                                   {"id":4,"title":"ساعت رو میزی طرح چوب سوخته", "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                               ]
                           },
   "popular_products" : {
                           "title":"پرطرفدارترین ها",
                           "items":[

                               {"title":"test1", "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                               {"title":"test2" , "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                               {"title":"test3" ,"src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                               {"title":"test4" ,"src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                           ]
                       }
  , 
   "sliders":[
       { "id":1 ,"src":main_slider_img1, "Tagline":"محصولات دکوری و کاربردی چوبکا", "slogan":"انواع لوازم دکوری چوبی و لوازم ضروری منزل و محل کار", "placement":"center"},
       { "id":2 , "src":main_slider_img1, "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"left"},
       { "id":3 , "src":main_slider_img1, "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"right"},
       { "id":4 , "src":main_slider_img1, "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"center"},
   ]
};

function IndexPage(){

    const data =useData()
    useEffect(()=>{
        
    });

    return(
        <section >
           <IndexBanner sliders={init.sliders} />
           <div className='container'>
              <TouchSlider title='آخرین محصولات' items={data?.last_products} />
              <TouchSlider title='پرطرفدارترین ها' items={data?.popular_products} />
              <IndexDescription text={''} />
           </div>
        </section>
      
    )
}
export default IndexPage;