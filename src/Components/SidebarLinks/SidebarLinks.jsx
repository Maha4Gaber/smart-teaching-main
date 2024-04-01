import React from 'react'
import { Link } from 'react-router-dom'

import './SidebarLinks.css'
import { useTranslation } from 'react-i18next'
const SidebarLinks = ({links}) => {
  const {t} = useTranslation()
  return (
    <div>
    <aside className='sidebar-links'>
        {links.map(({link, path}, idx) =>
        <Link key={idx} className='member-link' to={path}>{t(link)}</Link>
        )}
    </aside>
    

    
    </div>
  )
}

export default SidebarLinks
