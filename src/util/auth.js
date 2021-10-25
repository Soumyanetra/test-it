class Auth{
    constructor() {
        this.currentUser = {
            googleId: '',
            userName:''
        };
    }
    login(googleId, userName) {
        this.currentUser.googleId = googleId;
        this.currentUser.userName = userName;
    }
    logout() {
        this.currentUser={}
    }
    isAuthenticated() {
        if (this.currentUser.googleId)
            return this.currentUser;
        else
            return false;
    }
}

export default new Auth();