import React from 'react';
import classes from './VideoText.module.css';
import Video from '../../assests/Video';
import LockIcon from '../../assests/LockIcon';
import TimerIcon from '../../assests/TimerIcon';
import EyesIcon from '../../assests/EyesIcon';
const VideoText = ({ Lock, time }) => {
  return (
    <div className={classes.videoText}>
      <div className={classes.text__content}>
        <Video />
        <p>Video : Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        {Lock && <LockIcon />}
        {!Lock && (
          <div className={classes.video_time}>
            <p>
              <TimerIcon /> {time} minutes
            </p>
            <button className={classes.Video_btn}>
              <EyesIcon />
              Preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoText;
