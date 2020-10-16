import {createContext} from 'react';

const LoadingContext = createContext({
    isLoading: true,
    updateLoading: ()=>{}
});

export default LoadingContext;