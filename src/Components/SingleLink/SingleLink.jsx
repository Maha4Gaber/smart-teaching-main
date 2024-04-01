import React from "react";
import classes from "./SingleLink.module.css";
import { useTranslation } from "react-i18next";
const SingleLink = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.foot__link}>
            <h2>{t("aboutUs")}</h2>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className={classes.layout}>
                        <li>{t("aboutUs")}</li>
                        <li>{t("company")}</li>
                        <li>{t("privacy")}</li>
                        <li>{t("terms")}</li>
                        <li>{t("pricing")}</li>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className={classes.layout}>
                        <li>{t("deliveryPolicy")}</li>
                        <li>{t("returnedPolicy")}</li>
                        <li>{t("faqs")}</li>
                        <li>{t("contactUs")}</li>
                        <li>{t("methodsOfPayment")}</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLink;
