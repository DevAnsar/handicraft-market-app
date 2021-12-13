import React, { useEffect,useState } from "react";
import IndexBanner from "../../components/index/IndexBanner";
import TouchSlider from "../../components/layouts/TouchSlider";
import IndexDescription from '../../components/index/IndexDescription';

function Index(){

    const [data , setData]=useState({
        "title": "دسته بندی ها" , 
         "last_products" : {
                                "title":"آخرین محصولات",
                                "items":[
                                        {
                                            "title":"نرد تخته ی سه لایه" ,
                                             "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                            },
                                        {"title":"مجسمه ی چوبی اسب وحشی",
                                         "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                                        {"title":"تابلوی دیواری با طرح حافظ", "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                                        {"title":"ساعت رو میزی طرح چوب سوخته", "src": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
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
            { "id":1 ,"src":"http://lorempixel.com/780/580/nature/1", "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"center"},
            { "id":2 , "src":"http://lorempixel.com/780/580/nature/1", "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"left"},
            { "id":3 , "src":"http://lorempixel.com/780/580/nature/1", "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"right"},
            { "id":4 , "src":"http://lorempixel.com/780/580/nature/1", "Tagline":"This is our big Tagline!", "slogan":"Here's our small slogan.", "placement":"center"},
        ]
    })
    useEffect(()=>{
        
    });

    return(
        <section >
           <IndexBanner sliders={data.sliders} />
           <div className='container'>
               {
                   console.log('data',data.last_products.title)
               }
              <TouchSlider title={data?.last_products?.title} items={data.last_products.items} />
              <TouchSlider title={data.popular_products.title} items={data.popular_products.items} />
              <IndexDescription text={''} />
           </div>
        </section>
      
    )
}
export default Index;