const initialState = {
    showMessage: false
 };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'showMessage' : 
        console.log("mostrar a menssagem");
            return {...state, showMessage : true};
        case 'hideMessage' :
            return {...state, showMessage: false};
        default : 
            return state;
    };
};

export const showMessage = () => {
    console.log("foi");
    return {
        type : 'showMessage'
    };
};

export const hideMessage = () => {
    return {
        type : 'hideMessage'
    };
};