import { useState } from "react";

const ResumeDropzone = ({ files, setFiles }) => {

    const handleDrop = (e) => {
        e.preventDefault();

        const droppedFiles = Array.from(e.dataTransfer.files);

        setFiles((prev) => [...prev, ...droppedFiles]);
    };

    const handleChange = (e) => {
        const selected = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...selected]);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (

        <div>

            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-blue-500 transition"
            >

                <input
                    type="file"
                    multiple
                    accept=".pdf,.docx"
                    onChange={handleChange}
                    className="hidden"
                    id="resumeUpload"
                />

                <label htmlFor="resumeUpload" className="cursor-pointer">

                    <div className="text-5xl mb-3">📤</div>

                    <p className="text-lg font-semibold">
                        Drop resume here or click to browse
                    </p>

                    <p className="text-gray-400 text-sm">
                        Supports PDF and DOCX files
                    </p>

                </label>

            </div>

            {/* File Preview */}

            {files.length > 0 && (

                <div className="mt-6 space-y-2">

                    {files.map((file, index) => (

                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-100 p-3 rounded"
                        >

                            <span>{file.name}</span>

                            <button
                                onClick={() => removeFile(index)}
                                className="text-red-500"
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default ResumeDropzone;