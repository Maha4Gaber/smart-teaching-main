import React from 'react'
import ImageComp from '../ImageComp/ImageComp'
import { Link } from 'react-router-dom'
import './FeatureCards.css'
import { useTranslation } from 'react-i18next'

const FeatureCards = ({cards}) => {
  const {t} = useTranslation()
  return (
    <div className='row gy-4 feature-cards' >
        {cards?.map((card, idx)=>
        <div data-aos="flip-left" className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12" key={idx}>
            <Link to= {card.path} className="feature-card d-flex align-items-center justify-content-between flex-column h-100 text-dark">
                <div className="img-container mx-auto">
                    <ImageComp src={card.Img} alt={t(card.title)}/>
                </div>
                <h5 className='text-center m-0'>{t(card.title)}</h5>
                {/* <p className='text-center m-0'>{card.no}</p> */}
                
            </Link>
        </div>
        )}
    </div>
  )
}

export default FeatureCards