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
        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className="w-[335px]">
                <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent />


        </div>
    </div>
  )
}

export default ProfilePage