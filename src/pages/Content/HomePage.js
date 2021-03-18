import React from 'react'
import hPageImages from '../../images/homePageImage.jpg'
import '../../style/Content/homepage.scss'
const HomePage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",width:"70%",margin:"0 auto",paddingTop:"50px"}} >
           <h1 style={{textAlign:"center"}}>HOŞGELDİNİZ</h1>
           <img src={hPageImages} alt=""  className="hpage-img"></img>
        </div>
    )
}

export default HomePage
