
import { Button, TextField } from '@mui/material';
import useCreate from '../../hooks/useCreate';
import Table1 from '../table/Table';

const Create = () => {
 const {
   postTitle,
   setPostTitle,
   postDescription,
   setPostDescription,
   postInfo,
   postResult,
 } = useCreate();
 
  return (
    <div id="app" className="container">
      <TextField
        sx={{ width: 300, marginBottom: "20px" }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <TextField
        sx={{ width: 300, marginLeft: "20px" }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={postDescription}
        onChange={(e) => setPostDescription(e.target.value)}
      />
      <Button
        sx={{marginLeft: "20px" }}
        variant="contained"
        onClick={postInfo}
      >
        Post Data
      </Button>
      {postResult && (
        <div>
          <Table1 info={postResult} />
        </div>
      )}
    </div>
  );
}

export default Create
