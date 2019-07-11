import React from 'react';
import RankedStatCard from './RankedStatCard';
import BlankStatCard from './BlankStatCard';

const RankedHeader  = (props) => {

    return (
        <div className='rankedHeaderContainer'>
            {
                props.stats['RANKED_SOLO_5x5']
                ?
                <RankedStatCard stats={props.stats['RANKED_SOLO_5x5']}/>
                :
                <BlankStatCard/>
            }
            {
                props.stats['RANKED_TEAM_5x5']
                ?
                <RankedStatCard stats={props.stats['RANKED_TEAM_5x5']}/>
                :
                <BlankStatCard/>
            }
            {
                props.stats['RANKED_TEAM_3x3']
                ?
                <RankedStatCard stats={props.stats['RANKED_TEAM_3x3']}/>
                :
                <BlankStatCard/>
            }
        </div>
    )
}

export default RankedHeader;