import classes from "./MiddleAssessment.module.css";
import TextAssessment from "../TextAssessment/TextAssessment";
import SmartText from "../SmartText/SmartText";
import MiddlePic from "../../assests/middle_ass.png";
import AssessmentCard from "../AssessmentCard/AssessmentCard";
import Logoone from "../../assests/cardlogo.png";
import LogoTwo from "../../assests/cardlogo2.png";
import LogoThree from "../../assests/cardlogo3.png";
import { useTranslation } from "react-i18next";
const MiddleAssessment = () => {
  const { t } = useTranslation();
  const items = [t("self"), t("principal"), t("peers"), t("supervisors")];
  const selfshitems = [t("principal"), t("peers"), t("supervisors")];
  const Sitems = [t("students")];
  return (
    <section className={classes.middle_assessment}>
      <h3 className={classes.h3}>{t("TEAST")}</h3>
      <TextAssessment>{t("testAssessment1")}</TextAssessment>
      <TextAssessment>{t("testAssessment2")}</TextAssessment>
      <TextAssessment>{t("testAssessment3")}</TextAssessment>
      <div className={classes.middle_assessment__layout}>
        <SmartText> {t("testAssessment4")}</SmartText>
        <SmartText> {t("testAssessment5")}</SmartText>
        <SmartText> {t("testAssessment6")}</SmartText>
      </div>
      <TextAssessment> {t("testAssessment7")}</TextAssessment>
      <div className={classes.middle_assessment__layout}>
        <SmartText> {t("testAssessment8")}</SmartText>

        <SmartText> {t("testAssessment9")}</SmartText>
        <SmartText> {t("testAssessment10")}</SmartText>
      </div>
      <TextAssessment> {t("testAssessment11")}</TextAssessment>
      <table className=" table   table-bordered   ass2-table">
        <thead >
          <tr >
            <th className={classes.th } scope="col">{}</th>
            <th className={classes.th} scope="col">{t("way1")}</th>
            <th className={classes.th} scope="col">{t("way2")}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">{t('SAG')}</th>
            <td> 33%</td>
            <td> 50%</td>
          </tr>
          <tr>
            <th scope="row">{t('CO')}</th>
            <td> 33%</td>
            <td> 25%</td>
          </tr>
          <tr>
            <th scope="row">{t('SPS')}</th>
            <td> 33%</td>
            <td> 25%</td>
          </tr>
        </tbody>
      </table>
      {/* <img src={MiddlePic} alt="middle_assment" /> */}
      <TextAssessment> {t("testAssessment12")}</TextAssessment>
      <TextAssessment> {t("testAssessment13")}</TextAssessment>
      <h3 className={classes.h3}> {t("testAssessment14")}</h3>
      <TextAssessment> {t("testAssessment15")}</TextAssessment>
      <h3 className={classes.h3}> {t("testAssessment16")}</h3>
      <TextAssessment> {t("testAssessment17")}</TextAssessment>
      <div className="row justify-content-center  g-1 mx-1">
        <div className="col-lg-4 col-sm-6 ">
          <AssessmentCard
            items={items}
            logo={Logoone}
            title={t("teachingSkills")}
          />
        </div>
        <div className="col-lg-4 col-sm-6 ">
          <AssessmentCard items={selfshitems} logo={LogoTwo} title={t("CO")} />
        </div>
        <div className="col-lg-4 col-sm-6 ">
          <AssessmentCard items={Sitems} logo={LogoThree} title={t("SRTT")} />
        </div>
      </div>
    </section>
  );
};

export default MiddleAssessment;
