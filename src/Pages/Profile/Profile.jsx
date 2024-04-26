import React from 'react';
import './Profile.css';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import RightProfile from '../../Components/RightProfile/RightProfile';
import LeftProfile from '../../Components/LeftProfile/LeftProfile';
function Profile() {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className='profile_layout container-fluid '>
        <div className="row">
          <div className="col-4">
          <RightProfile />
        {/* <div></div> */}
          </div>
          <div className="col-8">
        <LeftProfile />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
