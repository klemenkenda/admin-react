// @flow

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

    request(type: string, functionStr: string, parameters: any) {

    }

    // Auth part
    login(user: LoginUserObj) {
        this.request("GET", "auth", { user: "user", pass: "pass"});
    }
}

export default Backend;