import classes from './SocialFooter.module.css';
import Logo from '../../assests/Logo.png';
import FaceBookIcon from '../../assests/FaceBookIcon';
import TwitterIcon from '../../assests/TwitterIcon';
import VIcon from '../../assests/VIcon';
import LinkedIcon from '../../assests/LinkedIcon';
import SkuIcon from '../../assests/SkuIcon';
import { useTranslation } from 'react-i18next';
function SocialFooter() {
  const {t} = useTranslation()
  
  return (
    <div className={classes.social}>
      <img
        src={Logo}
        alt='logo'
      />
      <h3>
        {t("footerTitle")}
      </h3>
      <div className={classes.socailLayout}>
        <li>
          <FaceBookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <VIcon />
        </li>
        <li>
          <LinkedIcon />
        </li>
        <li>
          <SkuIcon />
        </li>
      </div>
    </div>
  );
}

export default SocialFooter;
