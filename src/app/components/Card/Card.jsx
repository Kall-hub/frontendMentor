import React from 'react'
import './card.css'
import profile from '../../../../public/images/avatar-jessica.jpeg'
import Image from 'next/image'

const Card = () => {
  return (
    <main className='container'>
        <div className='card'>
            <div className='card_profile'>
                <div className='profile_pic'>
                    <Image src={profile} alt="Jessica Randall's profile picture"/>
                </div>
                <div className='profile_name'>
                    <h2>Jessica Randall</h2>
                    <h3>london, united kingdom</h3>
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
    </main>
  )
}

export default Card