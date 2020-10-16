import { createContext } from 'react';

const QueryContext = createContext({
    filters: {
        language: '',
        verification: '',
        location: '',
    },
    query: {
        hasQuery: false,
    },
    updateFilters: ()=>{},
    updateQuery: ()=>{}
})


export default QueryContext;