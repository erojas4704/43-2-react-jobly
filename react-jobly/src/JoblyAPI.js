import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyAPI {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug(`API Call: ${endpoint} ${data} ${method}.`);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyAPI.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.companies;
    }

    static async searchCompany(name, minEmployees, maxEmployees) {
        let res = await this.request(`companies`, { name, minEmployees, maxEmployees });
        return res.companies;
    }

    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
    }

    static async searchJobs(title, minSalary, hasEquity) {
        if (title === "") title = undefined;

        let res = await this.request(`jobs`, { title, minSalary, hasEquity });
        return res.jobs;
    }

    static async login(username, password) {
        try {
            let res = await this.request("auth/token", { username, password }, "post");
            JoblyAPI.token = res.token;
            return res.token;
        } catch (err) {
            console.log("CATCHED", err);
            JoblyAPI.token = undefined;
            return err;
        }
    }

    static async register(username, password, firstName, lastName, email) {
        try {
            let res = await this.request("auth/register", { username, password, firstName, lastName, email }, "post");
            JoblyAPI.token = res.token;
            return res.token;
        } catch (err) {
            JoblyAPI.token = undefined;
            return err;
        }
    }
}

JoblyAPI.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyAPI;