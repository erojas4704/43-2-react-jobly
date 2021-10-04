import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies }) => {
    if (companies && companies.length > 0) {
        return (
            <div className="companies-container" >
                {companies && companies.map(company => <CompanyCard key={company.handle} company={company}></CompanyCard>)}
            </div>
        )
    }

    return <p>No Companies Found</p>;
}

export default CompanyList;