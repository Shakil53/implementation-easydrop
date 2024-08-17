import  { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import pdfIcon from '../../assets/Icon/pdfIcon.png';
import jpgIcon from '../../assets/Icon/jpgIcon.png';
import uploadIcon from '../../assets/Icon/uploadIcon.png'
import '../../style/UploadTaxInfo.css';


const fileTypes = ["JPG","PDF", "PNG",];
const fileIcons = {
  PDF: pdfIcon,
  JPG: jpgIcon,
  PNG: jpgIcon, 
  
};




const UploadTaxInfo = () => {
    const [file, setFile] = useState(null);


    const handleChange = (file) => {
      setFile(file);
    };
    const getFileIcon = (fileName) => {
        const fileExtension = fileName.split('.').pop().toUpperCase();
        return fileIcons[fileExtension] || null;
      };

    return (
        <div className="p-5 grid sm:grid-cols-12 gap-4 ">
            <div className="sm:col-span-12 rounded-lg border p-4 shadow-md">
                {/* heading--------- */}
                <div className="space-y-1 mx-auto">
                    <h1 className="text-4xl font-semibold text-center">Upload a file</h1>
                    <p className="text-center text-sm font-semibold">File upload description</p>
                </div>
                {/* drag and drop--------- */}
                <div className="items-center justify-center">
                    <FileUploader
                       classes="flex mx-auto items-center mt-10 fileUploader"
                        label='Upload or drop a file right here'
                        hoverTitle='Drop here'
                        multiple={true}
                        handleChange={handleChange}
                        maxSize="20"
                        
                        types={fileTypes}
                        
                    />
                    <div className="flex mx-auto items-center mt-4">
                        {file ? (
                        <div className="flex mx-auto items-center gap-2 bg-gradient-to-r from-[#D31A65] to-[#522F8F] border border-dashed rounded-lg">
                            <div className="flex items-center justify-center gap-2 border-gray-300 p-2 bg-white rounded-md ">
                                <img src={getFileIcon(file[0].name)} alt="File Icon" className="w-10 h-8" />
                                <span className="justify-center">File name: <span className="ml-4">{file[0].name}</span></span>
                                </div>
                        </div>
                        ) : (
                        "No files Uploaded Yet"
                        )}
                    </div>
                </div>
            </div>
       </div>
    );
};

export default UploadTaxInfo;