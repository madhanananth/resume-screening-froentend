import JobList from "../components/JobList";
import CreateJobButton from "../components/CreateJobButton";
import { useGetJobsQuery } from "../features/job/jobsApi";
import CreateJobModal from "../components/CreateJobModel";
import { useState } from "react";

const JobsPage=()=> {
    const { data , isLoading, error } = useGetJobsQuery();
    console.log(data);
    console.log(error);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);



    if (isLoading) return <p>Loading jobs...</p>;
    if (error) return <p>Failed to load jobs
    </p>;

    return (
        <div className="min-h-screen  bg-gradient-to-br from-white to-[#eae0f5] p-6">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Job Postings</h1>
                    <p className="text-gray-500">Manage your job openings</p>
                </div>

                <CreateJobButton openModel={openModal}/>
            </div>

            <JobList jobs={data.jobs} />
            <CreateJobModal isOpen={isOpen} closeModal={closeModal} />

        </div>
    );
}

export default JobsPage