// @flow

// axios ajax
import axios from 'axios';

/**
 * Backend object to communicate with REST API.
 */
class Backend {

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Return request string.
     *
     * @param {string} type
     * @param {string} functionStr
     * @param {json} parameters
     */
    request(type, functionStr, parameters) {
        console.log(this.endpoint);
        let url = this.endpoint + "/" + functionStr;
        let paramStr = "";
        for (let param in parameters) {
            if (paramStr.length !== 0) paramStr += "&";
            paramStr += param + "=" + parameters[param];
        }
        if (paramStr.length === 0) return url;
        return url + "?" + paramStr;
    }

    /**
     * Login user with user/password.
     *
     * @param {LoginUserObj} user Username, password and permanent login info.
     */
    login(user, done, fail) {
        let url = this.request("GET", "login", { user: user.username, password: user.password });
        axios.get(url)
            .then((res) => {
                // check if user was authenticated
                let data = res.data;

                if ("status" in data) {
                    console.log("Login failed!");
                    fail();
                } else {
                    localStorage.setItem("user", JSON.stringify(data));
                    console.log("Login OK!");
                    done();
                }
            })
    }

    /**
     * Get modules data.
     *
     * @param {function} done
     * @param {function} fail
     */
    getModules(done, fail) {
        let url = this.request("GET", "modules");
        axios.get(url)
            .then(res => {
                console.log(res.data);
                done(res.data);
            })
    }

    /**
     * Test call to proxied API server, which is available in the /api/* URL.
     *
     * @param {function} done
     * @param {function} fail
     */
    getTest(done, fail) {
        let url = "/api/index.html";
        axios.get(url)
            .then(res => {
                done(res.data);
            })
    }
}

export default Backend;