import { useContext } from "react";
import JoblyAPI from "../JoblyAPI";
import AuthContext from "../UserContext";

const JobCard = ({ job }) => {
    //1. Find out: Am I applied to this job?
    //2. if not, show the apply button and call the API to apply.

    const { user, setUser } = useContext(AuthContext);
    //user.applications ?? Figure out how this works

    const applyToJob = async () => {
        const res = await JoblyAPI.applyToJob(user, job.id);
        console.log("I broke everything the sequel ", res);
        const applications = user.applications;
        applications.push(res);
        setUser({ ...user, applications });
    }


    return (
        <div className="job-card">
            <div className="job-card-name">{job.title}</div>
            <div>Company: {job.companyName}</div>
            <div>Salary: ${job.salary}</div>
            {job.equity && <div>Equity: {job.equity}</div>}
            {!user.applications.includes(job.id) && <button className="card-button" onClick={applyToJob}>Apply</button>}
        </div>
    );
}

export default JobCard;