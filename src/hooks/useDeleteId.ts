import { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import DataServices from '../services/Services';

const useDeleteId = () => {
    const [deleteId, setDeleteId] = useState("");
    const [deleteResult, setDeleteResult] = useState<string | null>(null);

    const fortmatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
    };

    const { isLoading: isDeletingDataById, mutate: deleteData } =
        useMutation<any, Error>(
        async () => {
            return await DataServices.deleteById(deleteId);
        },
        {
            onSuccess: (res) => {
            setDeleteResult(fortmatResponse(res));
            },
            onError: (err: any) => {
            setDeleteResult(fortmatResponse(err.response?.data || err));
            },
        }
        );

    useEffect(() => {
        if (isDeletingDataById) setDeleteResult("deleting...");
    }, [isDeletingDataById]);

    function deleteInfoById() {
        if (deleteId) {
        try {
            deleteData();
        } catch (err) {
            setDeleteResult(fortmatResponse(err));
        }
        }
    }

    const clearDeleteOutput = () => {
    setDeleteResult(null);
    };
  return {
    isDeletingDataById,
    deleteData,
    deleteId, 
    setDeleteId,
    deleteResult, 
    setDeleteResult,
    deleteInfoById,
    clearDeleteOutput
  }
}

export default useDeleteId