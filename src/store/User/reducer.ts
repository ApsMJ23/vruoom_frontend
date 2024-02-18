type UserReducerState = {
    userData: UserData;
    isFetching: boolean;
    error: string;
}
type UserData = {
    email: string;
    username: string;
    isAdmin: boolean;
    is_staff: boolean;
    first_name: string;
    last_name: string;
    id: number;
}

const initialState: UserReducerState = {
    userData: {
        email: '',
        username: '',
        isAdmin: false,
        is_staff: false,
        first_name: '',
        last_name: '',
        id: 0,
    },
    isFetching: false,
    error: '',
}

const reducer = (state:UserReducerState=initialState, action):UserReducerState => {
    switch(action.type){
        case 'LOGIN_REQUESTED':
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                userData: action.payload,
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;