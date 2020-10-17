import React from 'react';

import './style/ResultsQuery.css';
import {ReactComponent as DownIcon} from '../../assets/down.svg'

const ResultsQuery = ()=>{

    const onClickToggleSidebar = ()=> {
        const sidebar = document.querySelector('.sidebarSearch');
        if(sidebar.className === 'sidebarSearch'){
            sidebar.className = 'sidebarSearch closeSidebarSearch';
        }else{
            sidebar.className = 'sidebarSearch';
        }
    }

    return(
        <div className='resultsQueryContainer'>
            <div className='sidebarSearch'>
                <button className='toggleSidebar' onClick={onClickToggleSidebar }>
                    <DownIcon />
                </button>
                <h4>Barra lateral</h4>
            </div>
            <div className='resultsQuery'>
                <h4>Grid de Resultados</h4>
            </div>
        </div>
    );
}

export default ResultsQuery;