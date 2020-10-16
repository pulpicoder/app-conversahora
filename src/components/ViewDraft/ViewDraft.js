// Import React
import React from 'react';

// Import styles of component Navbar 
import './style/ViewDraft.css';

const ViewDraft = ({title})=>{
    return(
        <div className='viewDraftContainer'>
            <h2 className='viewDraftTitle'>
                {title}
            </h2>
        </div>
    );
}

export default ViewDraft;