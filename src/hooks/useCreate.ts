import { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import DataServices from '../services/Services';

const useCreate = () => {

    const[postTitle,setPostTitle] = useState('');
    const[postDescription, setPostDescription]= useState('');
    const[postResult,setPostResult] =useState<string | null>(null);

    const formatResponse = (res:any)=>{
        return JSON.stringify(res,null,2)
    };

        const{isLoading: isPostingData, mutate: postData,data}=useMutation<any,Error>(
        async()=>{
            return await DataServices.create({
                title: postTitle,
                description:postDescription
            });
        },{
            onSuccess:(res)=>{
                setPostResult(formatResponse(res))
            },
            onError:(err:any)=>{
                setPostResult(formatResponse(err.response?.data || err));
            }
        });
        useEffect(()=>{
            if(isPostingData) setPostResult("posting...");
        },[isPostingData]);

        function postInfo(){
          try{
            postData()
          }catch (err){
            setPostResult(formatResponse(err))
          }
        }
        // const clearPostOutput =()=>{
        //     setPostResult(null)
        // };
  
  return {isPostingData,
    postData,
    formatResponse,
    postTitle,
    setPostTitle,
    postDescription,
    setPostDescription,
    postInfo,
    // clearPostOutput,
    postResult,
    data
  }
}

export default useCreate
