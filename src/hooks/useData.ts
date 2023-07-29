import  { useEffect} from 'react'
import { useQuery } from 'react-query';
import DataServices from '../services/Services';
import Data from '../types/Data';

const useData = () => {
 
const{isLoading:isLoadingData,refetch: getAllData, data}=useQuery<Data[],Error>(
    "[query-data]",
    async ()=>{
        return await DataServices.findAll();
    })
    useEffect(()=>{
        if(isLoadingData) console.log("loading...");
    },[isLoadingData]);

    function getAllInfo(){
        try{
            getAllData()
        } catch(err){
            console.error(err);
        }
    }
  return{ isLoadingData,getAllData,getAllInfo,data}
}

export default useData
