import  { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

const UploadTaxInfo = () => {
    const [file, setFile] = useState(null);


    const handleChange = (file) => {
      setFile(file);
    };


    
    return (
        <div>
          <div className="App">
            <h1>Hello To Drag & Drop Files</h1>
            <FileUploader
                multiple={true}
                className="h-48"
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
            </div>
        </div>
    );
};

export default UploadTaxInfo;