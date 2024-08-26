import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import pdfIcon from '../../assets/Icon/pdfIcon.png';
import jpgIcon from '../../assets/Icon/jpgIcon.png';
import figIcon from '../../assets/Icon/gifIcon.png';
import pngIcon from '../../assets/Icon/png.png';
import uploadIcon from '../../assets/Icon/uploadIcon.png';
import { CircleX  } from 'lucide-react';

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
const fileIcons = {
  PDF: pdfIcon,
  JPG: jpgIcon,
  PNG: pngIcon, 
  GIF: figIcon,
};

const UploadTaxInformation = () => {
    const [file, setFile] = useState(null);

    const handleChange = (file) => {
        setFile(file);
    };

    const getFileIcon = (fileName) => {
        const fileExtension = fileName.split('.').pop().toUpperCase();
        return fileIcons[fileExtension] || null;
    };

    const handleTypeError = (error) => {
        console.log("Type error:", error);
    };

    const handleSizeError = (file) => {
        console.log("Size error:", file);
    };

    const handleDrop = (file) => {
        console.log("Dropped file:", file);
    };

    const handleSelect = (file) => {
        console.log("Selected file:", file);
        };

    const handleDelete = () => {
        setFile(null); 
        };
        
    const handleSubmit = () => {
        if (file) {
            
            console.log("Submitting file:", file);
        }
        };



  return (
      <div className="p-3 grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-12 rounded-lg border p-4 shadow-md w-full h-[500px] border-gray-300 mx-auto flex flex-col items-center justify-center text-center">
              <h1 className="font-bold sm:font-semibold text-md sm:text-3xl mb-1">Upload a file</h1>
              <p className="text-center text-sm font-semibold mb-4">File upload description</p>
        <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="myFile"
            label="Upload or drop a file right here"
            required={true}
            disabled={false}
            hoverTitle=""
            fileOrFiles={null}
            classes="w-full h-full flex flex-col items-center justify-center border border-dashed border-gray-400"
            types={fileTypes}
            maxSize={20} // 20MB
            onTypeError={handleTypeError}
            onSizeError={handleSizeError}
            onDrop={handleDrop}
            onSelect={handleSelect}
            dropMessageStyle={{ backgroundColor: 'red' }}
        >
            {/* Custom children to replace default design */}
                  <div className="flex flex-col items-center justify-center">
                      <img src={uploadIcon}></img>
            <p className="text-md font-bold">Drag & drop files here, or click to select files</p>
            <p className="text-sm font-light">Allowed file types: {fileTypes.join(", ")}</p>
            </div>
        </FileUploader>

        <div className="mt-4 text-lg">
            {file ? (
             <div className="flex mx-auto items-center gap-2 bg-gradient-to-r from-[#D31A65] to-[#522F8F] border border-dashed rounded-lg">
             <div className="flex items-center justify-center gap-2 border-gradient-to-r from-[#D31A65] to-[#522F8F] p-2 bg-white rounded-md ">
                 <img src={getFileIcon(file[0].name)} alt="File Icon" className="w-10 h-8" />
                 <span className="justify-center">File name: <span className="ml-4">{file[0].name}</span></span>
                <button onClick={handleDelete} className="text-red-500 ml-6">
                    <CircleX  size={24} />
                </button>
                </div>

         </div>
            ) : (
            "No files uploaded yet"
            )}
              </div>
              <div className="mt-6 flex gap-4">
          <button 
            onClick={handleDelete}
            className="bg-[#F1F1F1] hover:bg-gray-200 text-gray-500 text-sm px-3 py-2 shadow-2xl rounded-lg"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="text-sm px-3 py-2 shadow-2xl text-white rounded-lg bg-[#522F8F]"
          >
            Submit
          </button>
        </div>
        </div>
    </div>
  );
};

export default UploadTaxInformation;
