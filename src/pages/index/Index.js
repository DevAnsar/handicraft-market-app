import React, { useEffect,useState } from "react";
import IndexBanner from "../../components/index/IndexBanner";
import TouchSlider from "../../components/layouts/TouchSlider";
import IndexDescription from '../../components/index/IndexDescription'
function Index(){

    const [data]=useState({
        "title": "دسته بندی ها" , 
        "objects":[
            {"text":"test1"},
            {"text":"test2"},
            {"text":"test3"},
            {"text":"test4"},
        ]
    })
    useEffect(()=>{
        
    })
    return(

        <body >

           <IndexBanner  />
           <div className='container'>
              <TouchSlider data={data} />
              <TouchSlider data={data} />
              <IndexDescription text={''} />
           </div>
        </body>
      
    )
}
export default Index;