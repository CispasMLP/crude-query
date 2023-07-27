import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import DataServices from '../services/Services';

    const useDelete = () => {
    const [deleteId, setDeleteId] = useState("");
    const [deleteResult, setDeleteResult] = useState<string | null>(null);

    const fortmatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
    };

      const { isLoading: isDeletingData, mutate: deleteAllData } =
        useMutation<any, Error>(
          async () => {
            return await DataServices.deleteAll();
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
            if (isDeletingData) setDeleteResult("deleting...");
          }, [isDeletingData]);

          function deleteAllInfo() {
            try {
              deleteAllData();
            } catch (err) {
              setDeleteResult(fortmatResponse(err));
            }
          }

    const clearDeleteOutput = () => {
    setDeleteResult(null);
    };
return {
    isDeletingData,
    deleteAllData,
    deleteResult, 
    setDeleteResult,
    deleteAllInfo,
    clearDeleteOutput,
    deleteId, setDeleteId
  }
}

export default useDelete
