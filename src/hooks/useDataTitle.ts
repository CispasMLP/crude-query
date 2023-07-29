import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import DataServices from '../services/Services';
import Data from '../types/Data';

const useDataTitle = () => {
const [getTitle, setGetTitle] = useState('')
const [getResult,setGetResult] = useState<string| null>(null)

const formatResponse = (res:any)=>{
    return JSON.stringify(res,null,2)
};    
const { isLoading: isSearchingData,refetch: findDataByTitle} = useQuery<Data[], Error>(
    "query-tutorials-by-title", // ["query-tutorials-by-title", getTitle],
    async () => {
        return await DataServices.findByTitle(getTitle);
    },
    {
        enabled: true,
        retry: 1,
        onSuccess: (res) => {
        setGetResult(formatResponse(res));
        },
        onError: (err: any) => {
        setGetResult(formatResponse(err.response?.data || err));
        },
    }
    );

    useEffect(() => {
    if (isSearchingData) setGetResult("searching...");
    }, [isSearchingData]);

    function getInfoByTitle() {
    if (getTitle) {
        try {
        findDataByTitle();
        } catch (err) {
        setGetResult(formatResponse(err));
        }
    }
    }

const clearGetOutput = () => {
setGetResult(null);
};
  return {isSearchingData,findDataByTitle,getTitle, setGetTitle, getInfoByTitle,getResult,}
}

export default useDataTitle
