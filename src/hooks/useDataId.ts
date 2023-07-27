import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import DataServices from '../services/Services';
import Data from '../types/Data';

const useDataId = () => {
const [getId, setGetId]= useState('');
const [getResult,setGetResult] = useState<string| null>(null)

const formatResponse = (res:any)=>{
    return JSON.stringify(res,null,2)
};
const { isLoading: isLoadingDataById, refetch: getDataById } =
    useQuery<Data[], Error>(
        "query-data-by-id",
        async () => {
        return await DataServices.findById(getId);
        },
        {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
            setGetResult(formatResponse(res));
        },
        onError: (err: any) => {
            setGetResult(
            formatResponse(err.response?.data || err)
            );
        },
        }
    );

useEffect(()=>{
    if(isLoadingDataById) setGetResult("loading...");
},[isLoadingDataById])

function getInfoById(){
    if(getId){
        try{
            getDataById();
        }catch(err){
            setGetResult(formatResponse(err))
        }
    }
}
const clearGetOutput = () => {
setGetResult(null);
};
  return{isLoadingDataById,getDataById,getId, setGetId,getInfoById,clearGetOutput,getResult}
}

export default useDataId