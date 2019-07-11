import React from 'react';

const ProfileHeader = (props) => {
    return (
        <div className='profileHeaderContainer'>
            <div className='profileImageContainer'>
                <p>{props.overview.summonerLevel}</p>
                {/* Should be image but for now will be text of the image id*/}
                <p>{props.overview.profileIconId}</p>
            </div>
            <p>{props.overview.name}</p>
        </div>
    )
}

export default ProfileHeader;