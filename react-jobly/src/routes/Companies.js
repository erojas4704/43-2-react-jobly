import { useEffect, useState } from "react";
import CompanyList from "../components/CompanyList";
import SearchField from "../components/SearchField";
import JoblyAPI from "../JoblyAPI";
import "../css/companies.css";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        searchCompanies();
    }, []);

    const searchCompanies = async search => {
        if(search === "") search = undefined;
        const companies = await JoblyAPI.searchCompany(search);
        setCompanies(companies);
    }

    const handleSearch = async search => {
        searchCompanies(search);
    }

    return (
        <div>
            <h1>Companies</h1>
            <SearchField onSubmit={handleSearch} />
            <div>
                <CompanyList companies={companies} />
            </div>
        </div>
    )
}

export default Companies;