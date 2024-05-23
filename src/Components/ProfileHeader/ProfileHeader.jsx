import React from 'react';
import classes from './ProfileHeader.module.css';
import Camera from '../../assests/Camera';
import Avatar from '../../assests/profile_avatar.png';
import { useTranslation } from 'react-i18next';
const ProfileHeader = ({name}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.profile_header}>
      {/* <div className={classes.profile_info}> */}
        {/* <img
          src={Avatar}
          alt='profileavatar'
        /> */}
        <div className={classes.profile_data}>
          <h6>{t('hello')}</h6>
          <div className='fs-2'>{name}</div>
        </div>
      {/* </div> */}
      {/* <div className={classes.profile_upload}>
        <button>
          Change your profile picture <Camera />
        </button>
      </div> */}
    </div>
  );
};

export default ProfileHeader;
