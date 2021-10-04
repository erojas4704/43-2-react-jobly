
import { useLayoutEffect, useState } from "react";
import JobList from "../components/JobList";
import SearchField from "../components/SearchField";
import "../css/jobs.css";
import JoblyAPI from "../JoblyAPI";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useLayoutEffect(() => {
        searchJobs();
    }, []);

    const searchJobs = async search => {
        if (search === "") search = undefined;
        const jobs = await JoblyAPI.searchJobs(search);
        setJobs(jobs);
    }

    const handleSearch = async search => {
        searchJobs(search);
    }

    return (
        <div>
            <h1>Jobs</h1>
            <SearchField onSubmit={handleSearch} />
            <div>
                <JobList jobs={jobs} />
            </div>
        </div>
    )
}

export default Jobs;