import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = (file ,setFile, readFile) => {
    return (
        <div className="filepicker-container">
            <div className=" flex flex-col">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className="filepicker-label"> 
                    Upload File
                </label>
                <p className="mt-2 text-gray-500 text-xs truncate">
                    {file ? file.name : "No file selected"}
                </p>
            </div>
        </div>
    )
}

export default FilePicker
