import type { LoginUserObj } from  "./Models";

export class Auth {

    login(user: LoginUserObj, done, fail) {
        window._backend.login(user, done, fail);
    }

    isAuth() {
        if (localStorage.getItem("user")) return true;
        return false;
    }

    noAuthNeeded(path) {
        let allowed = [ '/login' ];
        if (allowed.includes(path)) return true;
        return false;
    }
}

export default Auth;