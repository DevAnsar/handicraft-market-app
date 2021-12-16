import React,{useState,createContext,useContext, useEffect} from "react";
import {getIndexApi} from './../apis/index';
import {toast} from 'react-hot-toast'

export const IndexContext = createContext();
export const IndexSetContext = createContext();

function IndexProvider({children}){

    const [data,setDeta]=useState([]);
    useEffect(()=>{

        getIndexApi().then(res=>{

            let {status,data,message}=res;

            if(!status){
                toast.err(message)
            }else{
                // console.log(data.data);
                setDeta(data.data);
            }
        }).catch(err=>{

            toast.error('دریافت اطلاعات با مشکل مواجه شد')
        });

    },[]);
    
    return(
        <IndexContext.Provider value={data}>
            <IndexSetContext.Provider value={setDeta}>
                        {children}
            </IndexSetContext.Provider>
        </IndexContext.Provider>
    )
}

function useData(){
    return useContext(IndexContext);
}
export {useData};
export default IndexProvider;