import React, {useContext} from 'react';

import {ReactComponent as DownIcon} from '../../assets/down.svg';
import {ReactComponent as BookIcon} from '../../assets/open-book.svg';
import {ReactComponent as LanguageIcon} from '../../assets/global.svg';
import {ReactComponent as LocationIcon} from '../../assets/pin.svg';
import QueryContext from './QueryContext';
import LoadingContext from '../Loading/LoadingContext';


const SearchForm = ()=>{

    const Query = useContext(QueryContext);
    const loadingContext = useContext(LoadingContext);

    const onClickFilter = (e)=>{
        Query.updateFilters(e);

    }

    const onClicksSetQuery = ()=>{
        loadingContext.updateLoading();
        Query.updateQuery();
        setTimeout(
            ()=>{
                loadingContext.updateLoading();
            },

            3000
        );

    }

    return(
        <div className='searchContainer'>
                <h2>Encuentra el profesor que necesitas</h2>
                <div className='SearchForm'>
                    <h3 className='SearchFormTitle'>
                         Encuentra el profesor que necesitas
                    </h3>
                    <div className='filter'>
                        <button className='filterButton'>
                            <div className='indication'>
                                <LanguageIcon />
                                {Query.filters.language ? Query.filters.language : 'Idiomas'}
                            </div>
                            <DownIcon/>
                        </button>
                        <div className='optionsFilter'>
                            <button filter='language' onClick={onClickFilter} value='Todos los Idiomas'>Todos los Idioma</button>
                            <button filter='language' onClick={onClickFilter} value='Ingles'>Ingles</button>
                            <button filter='language' onClick={onClickFilter} value='Español'>Español</button>
                        </div>
                    </div>
                    <div className='filter'>
                        <button className='filterButton'>
                           <div className='indication'>
                                <BookIcon />
                                {Query.filters.verification ? Query.filters.verification : 'Nivel de Certificación'}
                            </div> 
                           <DownIcon/>
                        </button>
                        <div className='optionsFilter'>
                            <button filter='verification' onClick={onClickFilter} value='Todas las Certificidicaciones'>Todas las Certificidicaciones</button>
                            <button filter='verification' onClick={onClickFilter} value='TOEF'>TOEFL</button>
                            <button filter='verification' onClick={onClickFilter} value='IELTS'>IELTS</button>
                            <button filter='verification' onClick={onClickFilter} value='TELC'>TELC</button>
                            <button filter='verification' onClick={onClickFilter} value='DELE'>DELE</button>
                        </div>
                    </div>
                    <div className='filter'>
                        <button className='filterButton'>
                             <div className='indication'>
                                <LocationIcon />
                                {Query.filters.location ? Query.filters.location : 'País'}
                            </div>
                            <DownIcon/>
                        </button>
                        <div className='optionsFilter'>
                            <button filter='location' onClick={onClickFilter} value='Todos los Países'>Todos los Países</button>
                            <button filter='location' onClick={onClickFilter} value='Argentina'>Argentina</button>
                            <button filter='location' onClick={onClickFilter} value='Bolivia'>Bolivia</button>
                            <button filter='location' onClick={onClickFilter} value='Canada'>Canada</button>
                            <button filter='location' onClick={onClickFilter} value='Chile<'>Chile</button>
                            <button filter='location' onClick={onClickFilter} value='Colombia'>Colombia</button>
                            <button filter='location' onClick={onClickFilter} value='Costa Rica'>Costa Rica</button>
                            <button filter='location' onClick={onClickFilter} value='Ecuador'>Ecuador</button>
                            <button filter='location' onClick={onClickFilter} value='España'>España</button>
                            <button filter='location' onClick={onClickFilter} value='Estados Unidos'>Estados Unidos</button>
                            <button filter='location' onClick={onClickFilter} value='México'>México</button>
                            <button filter='location' onClick={onClickFilter} value='Panama'>Panama</button>
                            <button filter='location' onClick={onClickFilter} value='Uruguay'>Uruguay</button>
                        </div>
                    </div>
                    <button className='btnSearch' onClick={onClicksSetQuery}>
                        Buscar
                    </button>
                </div>
            </div>
    );

}

export default SearchForm;