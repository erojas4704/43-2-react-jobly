const CompanyCard = ({ company }) => {
    return (
        <div className="company-card">
            <div className="company-card-name">{company.name}</div>
            <div>
                {company.description}
            </div>
            <div>Employees: {company.numEmployees}</div>
        </div>
    );
}

export default CompanyCard;