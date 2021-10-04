const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <div className="job-card-name">{job.title}</div>
            <div>Company: {job.companyName}</div>
            <div>Salary: ${job.salary}</div>
            {job.equity && <div>Equity: {job.equity}</div>}
        </div>
    );
}

export default JobCard;