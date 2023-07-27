import useDeleteId from '../../hooks/useDeleteId';
const Delete = () => {
    // const { deleteAllInfo, deleteResult } = useDelete();
    const {
      deleteId,
      setDeleteId,
      deleteInfoById,
      clearDeleteOutput,
      deleteResult,
    } = useDeleteId();
  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">
          DELETE 
        </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            {/* <button className="btn btn-sm btn-danger" onClick={deleteAllInfo}>
              Delete All
            </button> */}

            <input
              type="text"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button className="btn btn-sm btn-danger"onClick={deleteInfoById}>
                Delete by Id
              </button>
            </div>
            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearDeleteOutput}
            >
              Clear
            </button>
          </div>

          {deleteResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{deleteResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Delete