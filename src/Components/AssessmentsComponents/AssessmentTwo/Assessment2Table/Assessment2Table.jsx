import React from 'react'
import { ass2Table } from '../../../../data'
import './Assessment2Table.css'
import { useTranslation } from 'react-i18next';

const Assessment2Table = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";

return (
  <table className=" table   table-bordered   ass2-table">
    <thead>
      <tr>
        <th scope="col"  >{t("ass2Tableth1")}</th>
        <th scope="col">
          {" "}
          <div className="heading">{t("description")}</div>
        </th>
      </tr>
    </thead>

    <tbody>
      {ass2Table.map(({ index, desc }, idx) => (
        <tr key={idx}>
          <th scope="row">
            <div className="t-heading">{t(index)}</div>
          </th>
          <td>{t(desc)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
}

export default Assessment2Table