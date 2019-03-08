const initial_state = {
    userType: 'guest',
    showMenu: 'default',
    body: 'homepage', //for body change handled from menu
    MenuBoxes: {
        box11: 'HOME',
        box12: '',
        box13: '',
        box21: 'RESERVATION',
        box22: '',
        box23: '',
        box31: 'ABOUT US',
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
        default:
            console.log(action.type + "Doesn't do anything")
    }

    return new_state;
};

export default reducer;