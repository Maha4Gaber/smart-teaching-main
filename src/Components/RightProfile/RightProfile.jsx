import React from 'react';
import classes from './RightProfile.module.css';
import ProfilePersonIcon from '../../assests/ProfilePersonIcon';
import KeyProfileIcon from '../../assests/KeyProfileIcon';
import SocialProfileIcon from '../../assests/SocialProfileIcon';
import CertificationProfileIcon from '../../assests/CertificationProfileIcon';
import PaymentProfileIcon from '../../assests/PaymentProfileIcon';
import BlogProfileIcon from '../../assests/BlogProfileIcon';
import LogoutProfileIcon from '../../assests/LogoutProfileIcon';
import SettingProfileIcon from '../../assests/SettingProfileIcon';
function RightProfile() {
  return (
    <aside className={classes.right_profile}>
      <header>Welcome, Abdellah elkobra</header>
      <ul className={classes.profile_links}>
        <li className={classes.profile_link}>
          <ProfilePersonIcon />
          <span>Personal Data</span>
        </li>
        <li className={classes.profile_link}>
          <KeyProfileIcon />
          <span>Login Data </span>
        </li>
        <li className={classes.profile_link}>
          <SocialProfileIcon />
          <span>Social Networks </span>
        </li>
        <li className={classes.profile_link}>
          <CertificationProfileIcon />
          <span>Certificates </span>
        </li>
        <li className={classes.profile_link}>
          <PaymentProfileIcon />
          <span>Payment settings </span>
        </li>
        <li className={classes.profile_link}>
          <BlogProfileIcon />
          <span>Blogs </span>
        </li>
      </ul>
      <header>user</header>
      <ul className={classes.profile_links}>
        <li className={classes.profile_link}>
          <SettingProfileIcon />
          <span>Setting</span>
        </li>
        <li className={classes.profile_link}>
          <LogoutProfileIcon />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
}

export default RightProfile;
