
import useCreate from '../../hooks/useCreate';

const Create = () => {
 const {
   postTitle,
   setPostTitle,
   postDescription,
   setPostDescription,
   postInfo,
   clearPostOutput,
   postResult,
 } = useCreate();
 
  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">CREATE</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>

          <button className="btn btn-sm btn-primary" onClick={postInfo}>
            Post Data
          </button>

          <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>
            Clear
          </button>

          {postResult &&(
            <div className='alert alert-secondary mt-2' role="alert">
                <pre>{postResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create
