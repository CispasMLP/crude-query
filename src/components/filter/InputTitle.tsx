import useDataTitle from '../../hooks/useDataTitle';

const Title = () => {
  const{getTitle,setGetTitle,getInfoByTitle,isSearchingData,getResult }=useDataTitle()

     if (isSearchingData) {
       return <div>Loading...</div>;
     }
     console.log(getTitle)
  return (
    <div>
      <input
        type="text"
        value={getTitle}
        onChange={(e) => setGetTitle(e.target.value)}
        className="form-control ml-2"
        placeholder="Title"
      />
      <div className="input-group-append">
        <button className="btn btn-sm btn-primary" onClick={getInfoByTitle}>
          Find By Title
        </button>
      </div>
          {getResult && (
      <div className="alert alert-secondary mt-2" role="alert">
        <pre>{getResult}</pre>
      </div>
    )}
    </div>
  );
}
export default Title