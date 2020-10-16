import {createContext} from 'react';

const UserContext = createContext({
    user: {},
    isLogin: false,
});

export default UserContext;