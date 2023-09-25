import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesList = () => {
    const [features, setFeatures] = useState([]);

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
                features.map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>

        </div>
    );
};

export default FeaturesList;