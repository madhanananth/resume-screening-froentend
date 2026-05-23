

export default function CreateJobButton({openModel}) {
    return (
        <button 
        onClick={openModel}
        className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold">
            + Create Job
        </button>
    );
}