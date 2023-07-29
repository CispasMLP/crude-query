import { Box, Button } from '@mui/material';
import useData from '../../hooks/useData';
import useDataId from '../../hooks/useDataId';
import useDataTitle from '../../hooks/useDataTitle';
import { Input } from "@chakra-ui/react";
import Table from '../table/Table';
import Title from '../filter/InputTitle';
import Table1 from '../table/Table';


const Form = () => {
  const { getResult} = useData();
  // const { getId, setGetId, getInfoById } = useDataId();
  // const {getTitle, setGetTitle, getInfoByTitle } = useDataTitle();

  return (
    // <div id="app" className="container">
    //   <div className="card">
    //     <div className="card-header">E-commerce</div>
    //     <div className="card-body">
    //       <div className="input-group input-group-sm">
    //         <button className="btn btn-sm btn-primary" onClick={getAllInfo}>
    //           Get All
    //         </button>
    //         <input
    //           type="text"
    //           value={getId}
    //           onChange={(e) => setGetId(e.target.value)}
    //           className="form-control ml-2"
    //           placeholder="Id"
    //         />
    //         <div className="input-group-append">
    //           <button className="btn btn-sm btn-primary" onClick={getInfoById}>
    //             Get by Id
    //           </button>
    //         </div>

    // <input
    //   type="text"
    //   value={getTitle}
    //   onChange={(e) => setGetTitle(e.target.value)}
    //   className="form-control ml-2"
    //   placeholder="Title"
    // />
    // <div className="input-group-append">
    //   <button
    //     className="btn btn-sm btn-primary"
    //     onClick={getInfoByTitle}
    //   >
    //     Find By Title
    //   </button>
    // </div>

    //         <button
    //           className="btn btn-sm btn-warning ml-2"
    //           onClick={clearGetOutput}
    //         >
    //           Clear
    //         </button>
    //       </div>

    // {getResult && (
    //   <div className="alert alert-secondary mt-2" role="alert">
    //     <pre>{getResult}</pre>
    //   </div>
    // )}
    //     </div>
    //   </div>
    // </div>

    //mui
    <div>
      {/* <Title /> */}
      <Table1 info={getResult} />
    </div>
  );
  
}

export default Form