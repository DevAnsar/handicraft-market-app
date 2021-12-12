import React, { useEffect,useState } from "react";
import IndexBanner from "../../components/index/IndexBanner";
import TouchSlider from "../../components/layouts/TouchSlider";
import IndexDescription from '../../components/index/IndexDescription';

function Index(){

    const [data]=useState({
        "title": "دسته بندی ها" , 
        "objects":[
            {"text":"test1"},
            {"text":"test2"},
            {"text":"test3"},
            {"text":"test4"},
        ] , 
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
              <TouchSlider data={data} />
              <TouchSlider data={data} />
              <IndexDescription text={''} />
           </div>
        </section>
      
    )
}
export default Index;