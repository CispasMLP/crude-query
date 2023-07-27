import Data from "../types/Data";
import { apiClient } from "./api-client";



const findAll = async ()=>{
    const renspose = await apiClient.get<Data[]>('/posts');
    return renspose.data;
}

const findById = async (id:any)=>{
    const renspose = await apiClient.get<Data[]>(`/posts/${id}`);
    return renspose.data;
}

const findByTitle = async (title: string)=>{
    const renspose = await apiClient.get<Data[]>(`/posts?title=${title}`);
    return renspose.data;
}

const create = async ({title,description}: Data)=>{
    const renspose = await apiClient.post<any>('/posts',{title,description});
    return renspose.data;
}

const update = async (id:any,{title,description,published}: Data)=>{
    const response = await apiClient.put<any>(`/posts/${id}`,{title,description,published})
    return response.data;
};

const deleteById  = async (id:any)=>{
    const renspose = await apiClient.delete<any>(`/posts/${id}`);
    return renspose.data;
}

const deleteAll = async ()=>{
    const response = await apiClient.delete<any>('/posts');
    return response.data;
}

const DataServices={
    findAll,
    findById,
    findByTitle,
    create,
    update,
    deleteById,
    deleteAll
}
export default DataServices;
