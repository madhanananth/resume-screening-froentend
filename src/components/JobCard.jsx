import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#77bc7c]/50 hover:shadow-md transition">

      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">{job.title}</h2>

        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full capitalize">
          {job.status}
        </span>
      </div>

      <p className="text-gray-500 mt-2 line-clamp-2">
        {job.description}
      </p>

      <div className="flex gap-4 text-sm text-gray-500 mt-3">
        <span>📍 {job.location}</span>
        <span>⏰ {job.job_type}</span>
        <span>💼 {job.min_experience}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-3 max-h-16 overflow-hidden">
        {job.required_skills?.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}

        {job.preferred_skills?.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-5">
        <span className="text-indigo-600 font-medium">
          {job.total_candidates} candidates
        </span>
        <Link to={`/jobs/${job.id}`}>
        <button className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg">
          View Details
        </button>
        </Link>
      </div>

    </div>
  );
};

export default JobCard;