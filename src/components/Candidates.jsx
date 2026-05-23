import { useGetCandidatesByJobQuery, useDeleteCandidateMutation } from "../features/job/candidateApi";

const Candidates = ({ job_id }) => {

    const { data, isLoading, refetch } = useGetCandidatesByJobQuery(job_id);
    const [deleteCandidate] = useDeleteCandidateMutation();

    console.log(data)

    if (isLoading) return <p className="mt-6">Loading candidates...</p>;
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this candidate?"
        );

        if (!confirmDelete) return;

        try {
            console.log(id)

            await deleteCandidate(id).unwrap();
            alert("Candidate deleted successfully");
            refetch()

        } catch (error) {

            console.error(error);
            alert("Failed to delete candidate");

        }

    };

    return (

        <div className="mt-10">

            <h2 className="text-xl font-bold mb-4">
                Candidates ({data.total})
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-6">

            <table className="w-full">

                <thead className="text-left text-gray-500 border-b">

                    <tr>
                        <th className="py-3">NAME</th>
                        <th>EMAIL</th>
                        <th>EXPERIENCE</th>
                        <th>SCORE</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>Delete</th>

                    </tr>

                </thead>

                <tbody>

                    {data.candidates.map((c) => (

                        <tr key={c.id} className="border-b">

                            <td className="py-4 font-medium">{c.name}</td>

                            <td className="overflow-hidden">{c.email}</td>

                            <td>{c.experience_years} years</td>

                            <td>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {c.score}
                                </span>
                            </td>

                            <td>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    {c.status}
                                </span>
                            </td>

                            <td>{new Date(c.created_at).toLocaleDateString()}</td>
                            <td><button
                                onClick={() => handleDelete(c.id)}
                                className=" bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                             </button></td>

                        </tr>

                    ))}

                </tbody>

            </table>
            </div>

        </div>

    );
};

export default Candidates;