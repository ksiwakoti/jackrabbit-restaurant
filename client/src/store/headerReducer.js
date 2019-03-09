import axios from "axios";



const initial_state = {
    //user data
    userType: 'guest',
    username: '',
    isSignIn: false,
    SingInfailureMessege: '',

    //component control
    showMenu: 'default',
    body: 'homepage', //for body change handled from menu

    //user menu
    MenuBoxes: {
        box11: 'HOME',
        box12: 'COUPONS',
        box13: '',
        box21: 'RESERVATION',
        box22: 'ABOUT US',
        box23: '',
        box31: 'ORDER',
        box32: '',
        box33: '',
    }
}

const reducer = (state = initial_state, action) => {
    const new_state = {...state};

    switch (action.type) {
        case "SING_IN": { //open sign in form
            new_state.showMenu = 'singIn';
            break;
        }
        case "SING_UP": { //open sign up form
            new_state.showMenu = 'singUp';
            break;
        }
        case "CANCEL_SIGNIN_FORM": {
            new_state.showMenu = 'default';
            break;
        }
        case "CANCEL_SIGNUP_FORM": {
            new_state.showMenu = 'default';
            break;
        }
        case "HANDLE_BODY_CHANGE_HOME": {
            new_state.body = 'homepage';
            break;
        }
        case "HANDLE_BODY_CHANGE_RESERVATION": {
            new_state.body = 'reservation';
            break;
        }
        case "HANDLE_BODY_CHANGE_ABOUT_US":{
            new_state.body = 'aboutUs';
            break;
        }
        case "SIGNIN_CLICK":{
            //get user data
            axios
                .get('/api/users')
                .then( res => {
                    //search for matching (username || email && password)
                    for(var i = 0; res.data.length > i; i++){
                        if(res.data[i].username == action.usernameInput && res.data[i].password == action.passwordInput){
                            new_state.username = res.data[i].username
                            new_state.isSignIn = true
                            new_state.userType = res.data[i].userType
                            //handle default menu change
                            //admin menu
                            if(new_state.userType == 'admin'){
                            new_state.MenuBoxes.box11 = 'HOME'
                            new_state.MenuBoxes.box12 = 'COUPONS'
                            new_state.MenuBoxes.box13 = 'SETTING'
                            new_state.MenuBoxes.box21 = 'RESERVATION'
                            new_state.MenuBoxes.box22 = 'ABOUT US'
                            new_state.MenuBoxes.box23 = 'SIGNOUT'
                            new_state.MenuBoxes.box31 = 'ORDER'
                            new_state.MenuBoxes.box32 = 'CUSTOMERS'
                            new_state.MenuBoxes.box33 = ''}
                            //costomer menu
                            if(new_state.userType == 'customer'){
                                new_state.MenuBoxes.box11 = 'HOME'
                                new_state.MenuBoxes.box12 = 'COUPONS'
                                new_state.MenuBoxes.box13 = ''
                                new_state.MenuBoxes.box21 = 'RESERVATION'
                                new_state.MenuBoxes.box22 = 'ABOUT US'
                                new_state.MenuBoxes.box22 = 'SETTING'
                                new_state.MenuBoxes.box23 = ''
                                new_state.MenuBoxes.box31 = 'ORDER'
                                new_state.MenuBoxes.box32 = 'SIGNOUT'
                                new_state.MenuBoxes.box33 = ''
                                new_state.showMenu = 'default'
                                new_state.body = 'homepage'}
                            new_state.showMenu = 'default'
                            new_state.body = 'homepage'
                        }
                    }
                    //handle failed login
                    if(new_state.isSignIn === false){
                        new_state.SingInfailureMessege = "Account can't be found!"
                    }
                })
            break;
        }
        default:
            console.log(action.type + "Doesn't do anything")
    }

    return new_state;
};

export default reducer;