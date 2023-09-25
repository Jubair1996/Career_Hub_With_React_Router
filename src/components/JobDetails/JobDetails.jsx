import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../utilities/localstorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job =>job.id === idInt);
    console.log(id,job);
    const handleApplyJob = () =>{
        saveJobApplications(idInt);
        toast("You have applied Successfully")
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
            <div className="col-span-3 space-y-2">
                <p><span className="font-bold text-xl">Job Description:</span> {job.job_description}</p>
                <p><span className="font-bold text-xl">Job Responsibility:</span> {job.job_responsibility}</p>
                <div>
                <h1 className="font-bold text-2xl">Educational Requirements:</h1>
                <p>{job.educational_requirements}</p>
                <h2 className="font-bold text-2xl">Experiences:</h2>
                <p >{job.experiences}</p>
                </div>
            </div>
            <div>
               <div className="bg-gray-200 px-4 py-2 rounded-lg space-y-1">
               <h3 className="font-bold text-2xl">Job Details</h3>
                <h4><span className="font-bold text-xl">Salary:</span> {job.salary}</h4>
                <h4><span className="font-bold text-xl">Job Title:</span> {job.job_title}</h4>
                <p className="border my-4"> </p>
                <h2 className="font-bold text-2xl my-4">Contact Information</h2>
                <h5><span className="font-bold text-xl">Phone:</span> {job.contact_information.phone}</h5>
                <h5><span className="font-bold text-xl">Email:</span> {job.contact_information.email}</h5>
                <h5><span className="font-bold text-xl">Address:</span> {job.contact_information.address}</h5>
               </div>
                <button onClick={handleApplyJob} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 rounded text-white text-xl font-medium w-full my-4'>Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;