import React,{useState} from 'react'
import './Post.css'
import Man from './images/man.png'
import { Avatar } from '@mui/material'
import Confetti from 'react-dom-confetti'

function Post(props) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className='post'>
        <div className='post_header'>
            <Avatar src={Man}/>
            <div className='post_info'>
                <h2>John Van Doe</h2>
                <p>Student@ XYZ Academy</p>
            </div>
        </div>
        <div className='post_body'>
            <div className={props.num}>
                <input onClick={handleClick} type="checkbox" id={props.id} />
                <label for={props.id} class="toggle"><span></span></label>
                <Confetti 
                    active={ active } 
                    config={ { spread: 500 } }
                    recycle={false}
                    gravity={0.5}
                    
                />
            </div>
            <p>{props.sub}</p>
        </div>

    </div>
  )
}

export default Post