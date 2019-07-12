import React from 'react';
import RankedStatCard from './RankedStatCard';
import BlankStatCard from './BlankStatCard';

const RankedHeader  = (props) => {

    const reformat = (tier) => {
        let newFormat = tier.toLowerCase();
        newFormat = newFormat.charAt(0).toUpperCase() + newFormat.slice(1);
        return newFormat;
    }

    return (
        <div className='rankedHeaderContainer'>
            {
                props.stats['RANKED_SOLO_5x5']
                ?
                <RankedStatCard stats={props.stats['RANKED_SOLO_5x5']} type={'Ranked Solo'} tier={reformat(props.stats['RANKED_SOLO_5x5'].tier)}/>
                :
                <BlankStatCard type={'Ranked Solo'}/>
            }
            {
                props.stats['RANKED_TEAM_5x5']
                ?
                <RankedStatCard stats={props.stats['RANKED_TEAM_5x5']} type={'Ranked Flex'} tier={reformat(props.stats['RANKED_TEAM_5x5'].tier)}/>
                :
                <BlankStatCard type={'Ranked Flex'}/>
            }
            {
                props.stats['RANKED_TEAM_3x3']
                ?
                <RankedStatCard stats={props.stats['RANKED_TEAM_3x3']} type={'Twisted Treeline'} tier={reformat(props.stats['RANKED_TEAM_3x3'].tier)}/>
                :
                <BlankStatCard type={'Twisted Treeline'}/>
            }
        </div>
    )
}

export default RankedHeader;