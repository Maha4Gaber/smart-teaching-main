import React from 'react';
import './Profile.css';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import RightProfile from '../../Components/RightProfile/RightProfile';
import LeftProfile from '../../Components/LeftProfile/LeftProfile';
function Profile() {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className='profile_layout'>
        <RightProfile />
        <div></div>
        <LeftProfile />
      </div>
    </div>
  );
}

export default Profile;
