import React from 'react'
import './card.css'
import profile from '../../../../public/images/avatar-jessica.jpeg'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='container'>
        <div className='card'>
            <div className='card_profile'>
                <div className='profile_pic'>
                    <Image src={profile} alt="Jessica Randall's profile picture"/>
                </div>
                <div className='profile_name'>
                    <h1>Jessica Randall</h1>
                    <h2>london, united kingdom</h2>
                </div>  
            </div>
            <div className='profile_media'>
                <p>&quot;Front-end developer and avid reader.&quot;</p>
                <div className='media'><p>GitHub</p></div>
                <div className='media'><p>Frontend Mentor</p></div>
                <div className='media'><p>Linkedin</p></div>
                <div className='media'><p>Twitter</p></div>
                <div className='media'><p>Instagram</p></div>
            </div>
        </div>
    </div>
  )
}

export default Card