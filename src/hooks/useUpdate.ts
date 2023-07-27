import { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import DataServices from '../services/Services';


const useUpdate = () => {
    const[putId, setPutId] = useState('');
    const[putTitle, setPutTitle] =useState('');
    const[putDescription, setPutDescription] =useState('');
    const[putPublished, setPutPublished] = useState(false);


    const [putResult, setPutResult] = useState<string | null>(null);




    const fortmatResponse = (res: any) => {
      return JSON.stringify(res, null, 2);
    };
        
    const {isLoading:isUpdatingData, mutate:updateData}=useMutation<any,Error>(
        async ()=>{
            return await DataServices.update(putId, {
              title: putTitle,
              description: putDescription,
              published: putPublished,
            });
        },{
            onSuccess:(res)=>{
                setPutResult(fortmatResponse(res))
            },
            onError:(err:any)=>{
                setPutResult(fortmatResponse(err.response?.data || err))
            }
        }) 
        

        useEffect(()=>{
            if(isUpdatingData) setPutResult("updating...")
        },[isUpdatingData]);

        function updateInfo(){
            if(putId){
                try{
                    updateData();
                }catch(err){
                    setPutResult(fortmatResponse(err))
                }
            }
        }
  return {isUpdatingData,
    updateData,
    updateInfo,
    putResult,
    setPutId,
    setPutTitle,setPutDescription,setPutPublished,putDescription,putId,putTitle,setPutResult}
}

export default useUpdate