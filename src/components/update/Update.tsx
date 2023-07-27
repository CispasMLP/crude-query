import useUpdate from '../../hooks/useUpdate'


const Update = () => {
  const {
    putId,
    setPutId,
    putTitle,
    setPutTitle,
    putDescription,
    setPutDescription,
    setPutPublished,
    putResult,
    updateInfo,
    setPutResult,
  } = useUpdate();
        const clearPutOutput =()=>{
            setPutResult(null)
        }

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">Update</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              value={putId}
              onChange={(e) => setPutId(e.target.value)}
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={putTitle}
              onChange={(e) => setPutTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={putDescription}
              onChange={(e) => setPutDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              name="putPublished"
              onChange={(e) => setPutPublished(e.target.checked)}
              className="form-check-input"
            />
            <label className='form-check-label' htmlFor='published'>
                Publish
            </label>
            <button className='btn btn-sm btn-primary' onClick={updateInfo}>
                Update Data
            </button>
            <button className=' btn btn-sm btn-warning ml-2' onClick={clearPutOutput}>
                Clear
            </button>

            {putResult && (
                <div className='alert alert-secondary mt-2' role='alert'>
                    <pre>{putResult}</pre>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update
