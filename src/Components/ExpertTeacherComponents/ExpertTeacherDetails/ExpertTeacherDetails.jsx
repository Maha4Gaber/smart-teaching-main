import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { expertTeacherCards, expertTeacherOne, phaseAProgram, phaseAResult, phasesDesc, phasesDetails, singlePhase } from '../../../data'
import ExpertTeacherCard from './../ExpertTeacherCard/ExpertTeacherCard';
import ImageComp from '../../ImageComp/ImageComp';

import table from '../../../assests/ExpertTeacher/table.png'
// import tableA from '../../../assests/ExpertTeacher/table-phaseA.png'
import graph from '../../../assests/ExpertTeacher/graph.png'
import arrow from '../../../assests/ExpertTeacher/arrow.png'
import PhaseDetails from '../PhaseDetails/PhaseDetails';
import { Link } from 'react-router-dom';

import './ExpertTeacherDetails.css'
import { useTranslation } from 'react-i18next';
const ExpertTeacherDetails = () => {
const {t,i18n} = useTranslation()
const lang = i18n.language;
let isRTL = lang =='en'?'ltr':'rtl'
const tableStyles = {
    borderCollapse: 'collapse',
    direction: isRTL  ,
    maxWidth:'100% !important',
  };

  const headerCellStyle = {
    border: '1px solid black',
    textAlign:'center', borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    backgroundColor:'#0070c0ff',
    color:'white',
  };

  const cellStyle = {
    border: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    margin:"5px 10px"
    
  };

return (

    



    <article className='expert-teacher-details'>

        <h2 >{t("certifiedExpertTeacher")}</h2>

        <h3>{t("expertTeacherTitleInfo")}</h3>

        <ul>
        {expertTeacherOne.map (({desc}, idx) =>
                <li key={idx} className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{t(desc)}</span>
                </li>
            )}
        </ul>

        <h2>{t("TPDP")}</h2>

        <h3 className=' text-justify'>{t("TPDPInfo")}</h3>

        <div className="row justify-content-center expert-cards gy-4 mb-4">
            {expertTeacherCards.map((card, idx) =>
            <div className={`col-md-4  justify-content-center  d-flex card${idx+1}`} key={idx}>
                <ExpertTeacherCard {...card}/>
            </div>
            
            )}

        </div>


        <div className="row pt-4 pt-lg-0  phases-row">
            

            <div className="col-md-12">
                <ul className='m-0'>
                    {phasesDetails.map(({desc}, idx) =>
                        <li key={idx} className='d-flex mb-3'>
                        <span className='simple-icon'><FaCheck/></span>
                        <span className='mx-2'></span>
                        <span className = 'desc'>{t(desc)}</span>
                    </li>
                    )}
                </ul>
            </div>

            <div className="col-md-12 d-flex justify-content-center align-items-center">
                
                <ImageComp src={graph} className="graph" alt= 'Phases Graph'/> 
            </div>
        </div>

        <h3 className={`${lang === "en" ? "text-start" : "text-end"} mb-4 text-black`}>{t("explainFollowingTable")}</h3>

        <div className='margin-top-bottom w-100'>

        <table className="table  text-center table-bordered border-primary" style={tableStyles}>
            <colgroup>
<col>
</col>
        </colgroup>
        <thead className=''  >
            <tr className='tht'>
                <th  >{t("phase")}</th>
                <th  >{t("from")}</th>
                <th  >{t("to")} </th>
                <th  >{t("focus")} </th>
                <th  style={{ width: '100%'}}>{t("common")} </th>
            </tr>
            </thead>
            <tbody >
                <tr className='trt' style={{fontSize:'12px !important'}}>
                    <td>  {t('phaseA1')}  </td>
                    <td>  {t('phaseA2')}  </td>
                    <td>  {t('phaseA3')}  </td>
                    <td>  {t('phaseA4')}  </td>
                    <td>  {t('phaseA5')}  </td>
                </tr>
                <tr className='trt' style={{fontSize:'12px !important;'}}>
                    <td>  {t('phaseB1')}  </td>
                    <td>  {t('phaseB2')}  </td>
                    <td>  {t('phaseB3')}  </td>
                    <td>  {t('phaseB4')}  </td>
                    <td>  {t('phaseB5')}  </td>
                </tr>
                <tr className='trt' style={{fontSize:'12px !important;'}}>
                    <td>  {t('phaseC1')}  </td>
                    <td>  {t('phaseC2')}  </td>
                    <td>  {t('phaseC3')}  </td>
                    <td>  {t('phaseC4')}  </td>
                    <td >  {t('phaseC5')}  </td>
                </tr>
            </tbody>
        </table>
        

        </div>



        <div className='custom-margin'></div>

        {phasesDesc.map(({name, desc}, idx) => 
        <PhaseDetails name={name} desc={desc} key={idx}/>
        )}
        <div className='margin-top-bottom'>
            
            <h2>{t("TPDP")}</h2>

            {singlePhase.map(({name, desc}, idx) => 
            <PhaseDetails name={name} desc={desc} key={idx}/>
            )}
            
            <div className='custom-margin'></div>

            <table className='' border={2}  style={tableStyles}>
            
            <colgroup>
                <col style={{ width: '50%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
        <tr>
            <th  style={headerCellStyle}>{t("tablehead1")}</th>
            <th  style={headerCellStyle}></th>
            <th  style={headerCellStyle}>{t("tablehead2")} </th>
            <th  style={headerCellStyle}> </th>
        </tr>
        </thead>
        <tbody>
        <tr style={{backgroundColor:'#f2f2f2'}}>
            <td style={cellStyle}> 
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr1td1")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr1td2")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr1td3")}
                    </td>
                </tr>
                <tr>
                    <td > 
                    {t("tabletr1td4")}
                    </td>
                </tr>
            </td>
            <td style={cellStyle}> 
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' ,width: '10%' }}> 
                    1.1
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    1.2
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    1.3
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:'center',}} > 
                    1.4
                    </td>
                </tr>
            </td>
            
            <td style={cellStyle}>{t("tablet2tr2")} </td>
            <td style={{border: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            textAlign: 'center',}}>
                1
            </td>
        </tr>

        <tr style={{backgroundColor:'#ddddff'}}>
            <td style={cellStyle}> 
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr2td1")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr2td2")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr2td3")}
                    </td>
                </tr>
                <tr>
                    <td > 
                    {t("tabletr2td4")}
                    </td>
                </tr>
            </td>
            <td style={cellStyle}> 
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' ,width: '10%' }}> 
                    2.1
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    2.2
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    2.3
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:'center'}}> 
                    2.4
                    </td>
                </tr>
            </td>
            
            <td style={cellStyle}>{t("tablet2tr1")} </td>
            <td style={{border: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            textAlign: 'center',}}>
                2
            </td>
        </tr>

        <tr style={{backgroundColor:'#ccffccff'}}>
            <td style={cellStyle}> 
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr3td1")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr3td2")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr3td3")}
                    </td>
                </tr>
                <tr>
                    <td > 
                    {t("tabletr3td4")}
                    </td>
                </tr>
            </td>
            <td style={cellStyle}> 
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' ,width: '10%' }}> 
                    3.1
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    3.2
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    3.3
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:'center',}}> 
                    3.4
                    </td>
                </tr>
            </td>
            
            <td style={cellStyle}>{t("tablet2tr3")} </td>
            <td style={{border: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            textAlign: 'center',}}>
                3
            </td>
        </tr>

        <tr style={{backgroundColor:'#ffcccc'}}>
            <td style={cellStyle}> 
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr4td1")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr4td2")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr4td3")}
                    </td>
                </tr>
                <tr>
                    <td> 
                    {t("tabletr4td4")}
                    </td>
                </tr>
            </td>
            <td style={cellStyle}> 
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' ,width: '10%' }}> 
                    4.1
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    4.2
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    4.3
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:'center',}}> 
                    4.4
                    </td>
                </tr>
            </td>
            
            <td style={cellStyle}>{t("tablet2tr4")} </td>
            <td style={{border: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            textAlign: 'center',}}>
                4
            </td>
        </tr>

        <tr style={{backgroundColor:'#ffffccff'}}>
            <td style={cellStyle}> 
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr5td1")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr5td2")}
                    </td>
                </tr>
                <tr style={{  borderBottom: '1px solid black' ,width: '100%' ,display:'block' }}>
                    <td > 
                    {t("tabletr5td3")}
                    </td>
                </tr>
                <tr>
                    <td style={{ borderBottolm: '1px solid black' }}> 
                    {t("tabletr5td4")}
                    </td>
                </tr>
            </td>
            <td style={cellStyle}> 
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' ,width: '10%' }}> 
                    5.1
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    5.2
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign:'center', borderBottom: '1px solid black' }}> 
                    5.3
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:'center', borderBottolm: '1px solid black' }}> 
                    5.4
                    </td>
                </tr>
            </td>
            
            <td style={cellStyle}>{t("tablet2tr5")} </td>
            <td style={{border: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            textAlign: 'center',}}>
                5
            </td>
        </tr>

        </tbody>
        </table>
            {/* <ImageComp src={tableA} alt= 'Phase A Table' /> */}
            
            <div className='custom-margin'></div>


            <Link to='/register'>
                <ImageComp src={arrow} alt= 'Phase A Register' />
            </Link>

            <div className='custom-margin'></div>

            <p className='desc'>{t("trainingProgrammeProvides")}</p>

        </div>

        <h1>{t("phaseATitle")}</h1>

        <p className='desc'>{t("phaseAInfo")}</p>
        
        <div className='custom-margin'></div>

        <h3 className='custom-h3'>{t("endOfThisProgramme")}</h3>
        
        <ul className='mb-0'>
        {phaseAProgram.map (({desc}, idx) =>
                <li key={idx} className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{t(desc)}</span>
                </li>
            )}
        </ul>

        <div className='custom-margin'></div>

        <h3 className='custom-h3'>{t("whatIsAfterTakingPhaseA")}</h3>

        {phaseAResult.map(({name, desc}, idx) =>
        <PhaseDetails name={name} desc={desc} key={idx}/>
        )}
        
        <div className='custom-margin'></div>

        <div className='d-flex justify-content-between align-items-center expert-teacher-btn'>
            <h3 className='custom-h3 m-0'>{t("phaseAFree")}</h3>

            <Link className='register-link' to= '/register'>{t("registerNow")}</Link>

        </div>

        <div className='custom-margin'></div>

        <div className='d-flex justify-content-between align-items-center expert-teacher-btn'>
            
            <h3 className='custom-h3 m-0'>{t("phaseBCost")}</h3>

            <Link className='register-link' to= '/register'>{t("registerNow")}</Link>

        </div>



    </article>
)
}

export default ExpertTeacherDetails