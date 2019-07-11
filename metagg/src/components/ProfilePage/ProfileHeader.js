import React from 'react';

const ProfileHeader = (props) => {
    return (
        <div className='profileHeaderContainer'>
            <div className='profileImageContainer'>
                <p>{props.overview.summonerLevel}</p>
                {/* Should be image but for now will be text of the image id*/}
                <img src ={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${props.overview.profileIconId}.png `}/>
            </div>
            <p>{props.overview.name}</p>
        </div>
    )
}

export default ProfileHeader;