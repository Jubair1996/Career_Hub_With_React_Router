import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesList = () => {
    const [features, setFeatures] = useState([]);
    const [dataLength, setDataLength] = useState(4);
 
    useEffect(() =>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, []);
    return (
        <div>
             <h1 className="text-5xl text-center mt-6 font-semibold text-[#1A1919]">Featured Jobs</h1>
            <p className="text-[#757575] font-medium text-xl text-center my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
            {
                features.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
            <div className={dataLength === features.length ? "hidden" : "" }>
            <div className="flex justify-center items-center my-5" >
                <button onClick={() => setDataLength(features.length)} className=' font-semibold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded px-4 py-2 text-white'>Show Details</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturesList;