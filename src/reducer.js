export const initialState = {
    // Specify initial values 
    user: null,
    count: 0,
    users: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_value':
            return {...state,count: state.count+action.item}
        case 'REMOVE_value':
            return {...state,count: state.count-action.item}
    } 
}