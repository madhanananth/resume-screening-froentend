import JobForm from "./JobForm";

const CreateJobModal = ({ isOpen, closeModal }) => {

    if (!isOpen) return null;

    return (
        
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">

            
                <div className="bg-blue-100 p-6 rounded-sm w[600px]">

                    <h2 className="text-xl font-bold mb-4">
                        Create Job
                    </h2>

                    <JobForm closeModal={closeModal} />
                    

                </div>

        </div>
    );
};

export default CreateJobModal;