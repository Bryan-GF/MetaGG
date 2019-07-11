import React from 'react';

const RankedStatCard  = (props) => {

    console.log(`../../assets/rankEmblems/Emblem_${props.stats.tier}.png`);
    return (
        <div className='rankedStatCardContainer'>
            <img src={require(`../../assets/rankEmblems/Emblem_${props.stats.tier}.png`)}/>
        </div>
    )
}

export default RankedStatCard;
