// @flow

// axios ajax
import axios from 'axios';

// import models
import type {
    LoginUserObj
} from  "./Models";

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
    request(type: string, functionStr: string, parameters: any) {
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
    login(user: LoginUserObj, done: () => void, fail: () => void) {
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
}

export default Backend;