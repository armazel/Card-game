const LS_LOGIN = 'login'

export default {
    get login () {
        return localStorage.getItem(LS_LOGIN)
    },
    set login (value) {
        localStorage.setItem(LS_LOGIN, value)
    },
}
