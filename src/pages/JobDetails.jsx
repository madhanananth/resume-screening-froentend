import { useParams, useNavigate } from "react-router-dom";
import { useGetJobByIdQuery, useDeleteJobMutation } from "../features/job/jobsApi";
import Candidates from "../components/Candidates";


const JobDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [deleteJob] = useDeleteJobMutation();
    const { data, isLoading, refetch } = useGetJobByIdQuery(id);

    if (isLoading) return <p className="p-6">Loading...</p>;


    const handleUpload = () => {
        navigate(`/upload-resume/${id}`);
    };
    const handleDelete = async () => {

        const confirmDelete = window.confirm("Are you sure you want to delete this job?");

        if (!confirmDelete) return;

        try {

            await deleteJob(id).unwrap();

            alert("Job deleted successfully");

            navigate("/");

        } catch (error) {

            alert("Failed to delete job");

        }
    };

    return (

        <div className="max-w-4xl mx-auto p-6">

            <div className="flex justify-between items-center mb-6">

                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-600 font-semibold cursor-pointer"
                >
                    ← Back
                </button>

                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Delete Job
                </button>

            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">

                <h1 className="text-3xl font-bold mb-3">
                    {data.title}
                </h1>
                <div className="flex gap-6 text-gray-600 mb-4">

                    <p><strong>Location:</strong> {data.location}</p>

                    <p><strong>Experience:</strong> {data.min_experience} years</p>

                    <p><strong>Type:</strong> {data.job_type}</p>

                </div>

                <p className="mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {data.status}
                    </span>
                </p>

                <div className="mb-6">

                    <h2 className="text-xl font-semibold mb-2">
                        Job Description
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        {data.description}
                    </p>

                </div>

                <div className="mb-6">

                    <h2 className="text-xl font-semibold mb-3">
                        Required Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">

                        {data.required_skills.map((skill, index) => (

                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>


                <div className="mb-6">

                    <h2 className="text-xl font-semibold mb-3">
                        Preferred Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">

                        {data.preferred_skills.map((skill, index) => (

                            <span
                                key={index}
                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>

                <div className="mb-6">

                    <h2 className="text-xl font-semibold mb-3">
                        Education
                    </h2>

                    <ul className="list-disc list-inside text-gray-700">

                        {data.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                        ))}

                    </ul>

                </div>

                <div className="text-sm text-gray-500 border-t pt-4">

                    <p>Total Candidates: {data.total_candidates}</p>

                    <p>Created: {new Date(data.created_at).toLocaleDateString()}</p>

                    <p>Updated: {new Date(data.updated_at).toLocaleDateString()}</p>

                </div>
                <div className="text-sm text-gray-500 border-t pt-4">
                    <button
                        onClick={handleUpload}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Upload Resume
                    </button>
                </div>

            </div>
            <Candidates job_id={id} />

        </div>
    );
};

export default JobDetails;
