import useData from "../../hooks/useData"

const Table = () => {

 const{data,isLoadingData,getAllInfo}=useData()

   if (isLoadingData) {
     return <div>Loading...</div>;
   }

if (data && data.length > 0) {

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info) => (
            <tr
             className="bg-base-200" key={info.id}>
              <td>{info.title}</td>
              <td>{info.description}</td>
              <td>{info.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    }
    
    return (
        <div>
        <button className="btn btn-primary" onClick={getAllInfo}>
            Fetch Data
        </button>
        </div>
    );
}

export default Table
