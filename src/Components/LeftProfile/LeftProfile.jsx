import React from 'react';
import  './LeftProfile.css';
const LeftProfile = ({user}) => {
  return (
    <>
      <div className="row left_profile">
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Name</div>
            <div className="col-6 userdata">{user.full_name}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Phone</div>
            <div className="col-6 userdata">{user.mobile}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Email</div>
            <div className="col-6 userdata">{user.email}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Role</div>
            <div className="col-6 userdata">{user.role}</div>
          </div>
        </div>
        
      </div>
    </>

  );
};

export default LeftProfile;
