import React from 'react';

const RankedStatCard  = (props) => {
    let noNums = {
        "Grandmaster": true,
        "Master": true,
        "Challenger": true
    }

    return (
        <div className='rankedStatCardContainer'>
            <img src={require(`../../assets/rankEmblems/Emblem_${props.stats.tier}.png`)}/>
            <div className="rankedInfo">
                <h3>{props.type}</h3>
                <p>{props.tier} {!noNums[props.tier] ? props.stats.rank : null}</p>
                <div className="rankedStats">
                    <span>{props.stats.leaguePoints} LP</span>
                    <span>  /  </span>
                    <span>{props.stats.wins}W {props.stats.losses}L</span>
                    <span>  /  </span>
                    <span>{(props.stats.wins / (props.stats.wins + props.stats.losses)).toFixed(2) * 100}%</span>
                </div>
            </div>
        </div>
    )
}

export default RankedStatCard;
