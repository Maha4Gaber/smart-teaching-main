import React from 'react';
import  './LeftProfile.css';
import { useTranslation } from 'react-i18next';
const LeftProfile = ({user}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="row left_profile">
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> {t('name')}</div>
            <div className="col-6 userdata">{user&&user.full_name}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> {t('phone')}</div>
            <div className="col-6 userdata">{user&&user.mobile}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> {t('email')}</div>
            <div className="col-6 userdata">{user&&user.email}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> {t('Role')}</div>
            <div className="col-6 userdata">{user&&user.role}</div>
          </div>
        </div>
        
      </div>
    </>

  );
};

export default LeftProfile;
