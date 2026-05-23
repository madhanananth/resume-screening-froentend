import { useParams } from "react-router-dom";
import { useState } from "react";
import ResumeDropzone from "../components/ResumeDropzone";
import { useUploadResumesMutation } from "../features/job/candidateApi";
import { useNavigate } from "react-router-dom";
const UploadResumePage = () => {

    const { job_id } = useParams();
    const navigate = useNavigate()

    const [files, setFiles] = useState([]);

    const [uploadResumes, { isLoading }] = useUploadResumesMutation();

    const handleUpload = async () => {

        if (files.length === 0) {
            alert("Please select files");
            return;
        }

        try {

            await uploadResumes({
                job_id,
                files
            }).unwrap();

            alert("Resumes uploaded successfully");

            setFiles([]);
            navigate(`/jobs/${job_id}`);

        } catch (error) {

            console.error(error);
            alert("Upload failed");

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-white to-[#eae0f5] flex items-center justify-center">

            <div className="bg-white w[800px] p-10 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold mb-6">
                    Upload Resume
                </h1>

                <ResumeDropzone files={files} setFiles={setFiles} />

                <button
                    onClick={handleUpload}
                    disabled={isLoading}
                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >

                    {isLoading ? "Uploading..." : "Upload Resumes"}

                </button>

            </div>

        </div>

    );
};

export default UploadResumePage;