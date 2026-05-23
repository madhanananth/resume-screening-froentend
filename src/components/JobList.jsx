import JobCard from "./jobCard";

const JobList =({ jobs }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobList