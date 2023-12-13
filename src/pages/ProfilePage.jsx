import React, { useState } from 'react'
import Header from '../Components/Layout/Header'
import styles from '../styles/Styles'
import ProfileSideBar from  "../Components/Profile/ProfileSidebar"
import ProfileContent from "../Components/Profile/ProfileContent"

const ProfilePage = () => {
    const [active,setActive] = useState(1)
  return (
    <div>
        <Header/>
        <div className={`py-2 flex bg-[#f5f5f5] ${styles.section} `}>
            <div className="w-[335px]">
                <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active}/>


        </div>
       
    </div>
  )
}

export default ProfilePage