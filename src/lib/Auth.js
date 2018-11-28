// @flow
import type { LoginUserObj } from  "../../lib/Models";

export class Auth {
    constructor(api) {
        this.api = api;
    }

    register() {

    }

    static login(user: LoginUserObj, done, fail) {

        console.log(user);
        done();
    }

    isAuth() {

    }

    noAuthNeeded(path) {
        let allowed = [ '/login' ];
        if (allowed.includes(path)) return true;
        return false;
    }
}

export default Auth;