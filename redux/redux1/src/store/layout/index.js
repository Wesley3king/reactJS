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

// Actions types
export const Types = { 
    showMessage: "showMessage",
    hideMessage: "hideMessage"
 };
//actions creators
export const Creators = {
    showMessage : () => {
        return {
            type : Types.showMessage
        };
    },
    hideMessage : () => {
        return {
            type : Types.hideMessage
        };
    }
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