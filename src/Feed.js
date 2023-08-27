import React from 'react'
import './Feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
        <Post sub="MATHEMATICS" num="checkbox-wrapper-1" id="cbx-1"/>
        <Post sub="GEOGRAPHY" num="checkbox-wrapper-2" id="cbx-2"/>
        <Post sub="ENGLISH II" num="checkbox-wrapper-3" id="cbx-3"/>
        <Post sub="SOCIAL SCIENCE" num="checkbox-wrapper-4" id="cbx-4"/>
        <Post sub="CHEMISTRY" num="checkbox-wrapper-5" id="cbx-5"/>
    </div>
  )
}

export default Feed