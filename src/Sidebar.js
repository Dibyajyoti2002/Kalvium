import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import Man from './images/man.png'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://cdn.dribbble.com/userupload/4094964/file/original-6466429eea29e834a337a3c7fb6f6fb9.jpg?resize=1200x900" alt='' />
            <Avatar className='sidebar_avatar' src={Man} sx={{ width: 69, height: 69 }} />
            <h2>John Van Doe</h2>
            <h4>jvando22@gmail.com</h4>
        
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Total hours attended</p>
                <p className="sidebar_statNumber">992</p>
            </div>
            <div className="sidebar_stat">
                <p>Attendance percentage</p>
                <p className="sidebar_statNumber">95.31%</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar