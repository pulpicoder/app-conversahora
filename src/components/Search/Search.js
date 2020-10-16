// Import React
import React, {useState, useEffect} from 'react';

// Import styles of component Footer
import './style/Search.css';
import SearchForm from './SearchForm';
import ViewDraft from '../ViewDraft/ViewDraft';
import QueryContext from './QueryContext';
import ResultsQuery from './ResultsQuery';


const Search = ()=>{

    const updateFiltersHadle = (event)=>{
        const {filter, value} = event.target.attributes;

        setQuery((prevState)=>{
            return {
                ...prevState,
                filters: {
                    ...prevState.filters,
                    [filter.value]: value.value
                }
            }
        });
    }
    const updateQueryHadle = ()=>{
        setQuery((prevState)=>{
            return {
                ...prevState,
                query: {
                    hasQuery: true,
                }
            }
        });
    }

    const stateInitializeQuery = {
        filters: {
            language: '',
            verification: '',
            location: '',
        },
        query: {
            hasQuery: false,
        },
        updateFilters: updateFiltersHadle,
        updateQuery: updateQueryHadle
    };

    const [query, setQuery] = useState(stateInitializeQuery);

        
    return(
        <QueryContext.Provider value={query}>
            {
                query.query.hasQuery
                    ? <ResultsQuery />
                    : <SearchForm />
            }
        </QueryContext.Provider>
    );


}

export default Search;