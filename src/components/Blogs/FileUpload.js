import axios from "axios";
import { useState } from "react";


function FileUpload(){
    var [image,setImage] = useState(null);
    function uploadFile(){
        var data = new FormData();
        data.append('profileImage',image)
        axios.post('appi-endpoint-url',data).then(response=>{
            console.log(response)
        }).catch(error=>{console.log(error)})
    }
    return <>
        <input type="file"
        className="form-control"
        onChange={(event)=>{setImage(event.target.files[0])}}/>
        <button onClick={uploadFile()}>Upload</button>
        </>
}
export default FileUpload;

