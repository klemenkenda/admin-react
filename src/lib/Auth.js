// @flow

export class Auth {
    constructor() {

    }

    register() {

    }

    login() {

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