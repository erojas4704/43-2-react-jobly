import axios from 'axios';
// TODO better error handling that's not ass

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

    static async getUserInfo(username) {
        try {
            let res = await this.request(`users/${username}`);
            return res.user;
        } catch (err) {
            return err;
        }
    }

    static async patchUser(user, data) {
        try {
            //Prune all empty strings from data so the server doesn't try to process them when it's updating profiles.
            for (const key in data) {
                if (data[key].length < 1) {
                    delete data[key];
                }
            }

            let res = await this.request(`users/${user.username}`, data, 'patch');
            return res.user;
        } catch (err) {
            return err;
        }
    }

    static async applyToJob(user, jobID) {
        try {
            let res = await this.request(`users/${user.username}/jobs/${jobID}`, {}, 'post');
            return res.applied;
        } catch (err) {
            return err;
        }
    }
}

export default JoblyAPI;