import React from 'react'
import './Widgets.css'
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation'
import WidgetArticle from './WidgetArticle'


function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>Useful Resources</h2>
            <PermDeviceInformationIcon />
        </div>
        <WidgetArticle heading="Soft Skills - Video Course" tagline="Top Article - 999 readers"/>
        <WidgetArticle heading="Skill Development Course" tagline="Top Article - 831 readers"/>
        <WidgetArticle heading="Confronting Challenges" tagline="Top Article - 832 readers"/>
        <WidgetArticle heading="Indian Cultural Heritage" tagline="Top Article - 1031 readers"/>
        <WidgetArticle heading="Vedic Literature Course" tagline="Top Article - 1032 reader"/>
    </div>
  )
}

export default Widgets