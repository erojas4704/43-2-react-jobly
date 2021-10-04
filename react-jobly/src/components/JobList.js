import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
    if (jobs && jobs.length > 0) {
        return (
            <div className="jobs-container" >
                {jobs && jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)}
            </div>
        );
    }

    return <p>No Jobs Found</p>;
}

export default JobList;