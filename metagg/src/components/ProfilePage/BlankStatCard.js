import React from 'react';
import Unranked from '../../assets/rankEmblems/Emblem_UNRANKED.png';

const BlankStatCard  = (props) => {

    return (
        <div className='blankStatCardContainer'>
            <img src={Unranked}/>
            <div className="rankedInfo">
                <h3>{props.type}</h3>
                <p>Unranked</p>
            </div>
        </div>
    )
}

export default BlankStatCard;