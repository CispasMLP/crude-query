import  { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import DataServices from '../services/Services';
import Data from '../types/Data';

const useData = () => {
    //const [data, setData] = useState<Data[]>([]);
    const [getResult,setGetResult] = useState<string| null>(null)

    const formatResponse = (res:any)=>{
        return JSON.stringify(res,null,2)
    };

    const{isLoading:isLoadingData,refetch: getAllData}=useQuery<Data[],Error>(
    "[query-data]",
    async ()=>{
        return await DataServices.findAll();
    },{
        enabled: false,
        onSuccess:(res)=>{
            setGetResult(formatResponse(res))
        },
        onError:(err:any)=>{
            setGetResult(formatResponse(err.response))
        }
    });

    useEffect(()=>{
        if(isLoadingData) setGetResult("loading...");
    },[isLoadingData]);

    function getAllInfo(){
        try{
            getAllData()
        } catch(err){
            setGetResult(formatResponse(err))
        }
    }
const clearGetOutput = () => {
setGetResult(null);
};

  return{ isLoadingData,getAllData,getResult,clearGetOutput,getAllInfo}
}

export default useData
