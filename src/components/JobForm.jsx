import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateJobMutation } from "../features/job/jobsApi";

const JobForm = ({closeModal}) => {

    const navigate = useNavigate();
    const [createJob, {isLoading}] = useCreateJobMutation();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        required_skills: "",
        preferred_skills: "",
        education: "",
        min_experience: "",
        location: "",
        job_type: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            required_skills: formData.required_skills.split(","),
            preferred_skills: formData.preferred_skills.split(","),
            education: formData.education.split(",")
        };

        console.log(payload)

        try {

            await createJob(payload).unwrap();
            alert('Job is created..')
            closeModal(); 


        } catch (error) {
            console.error("Job creation failed", error);
        }
        // reset form
        setFormData({
            title: "",
            description: "",
            required_skills: "",
            preferred_skills: "",
            education: "",
            min_experience: "",
            location: "",
            job_type: ""
        });

        // navigate to jobs page
        navigate("/jobpage");

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
            <input
                name="title"
                placeholder="Job Title"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <textarea
                name="description"
                placeholder="Job Description"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <input
                name="required_skills"
                placeholder="Required Skills (comma separated)"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <input
                name="preferred_skills"
                placeholder="Preferred Skills"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <input
                name="education"
                placeholder="Education"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <input
                name="min_experience"
                type="number"
                placeholder="Minimum Experience"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
                /></div>
            <div>
            <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
            />
            </div>
            <div>
            <select
                name="job_type"
                onChange={handleChange}
                className="border p-2 min-w-lg rounded"
            >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
            </select>
            </div>
            <div className="flex flex-row gap-4">

                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800 cursor-pointer">
                Create Job
            </button>
                <span
                    onClick={closeModal}
                    className="bg-amber-950 text-white px-4 py-2 rounded hover:bg-indigo-800 cursor-pointer">
                    Close
                </span>
            
            </div>

        </form>
    );
};

export default JobForm;