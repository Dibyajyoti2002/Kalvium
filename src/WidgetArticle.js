import React from 'react'
import './Widgets.css'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function WidgetArticle(props) {
  return (
    <div className="widgets_article">
        <div className="widgets_articleLeft">
            <RadioButtonCheckedIcon />
        </div>
        <div className="widgets_articleRight">
            <h4>{props.heading}</h4>
            <p>{props.tagline}</p>
        </div>
    </div>
  )
}

export default WidgetArticle