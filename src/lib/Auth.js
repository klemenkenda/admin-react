import type { LoginUserObj } from  "./Models";

export class Auth {

    login(user: LoginUserObj, done, fail) {
        console.log(user);
        console.log(this);
        window._backend.login(user);
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