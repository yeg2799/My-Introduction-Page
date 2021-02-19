import React from 'react'
import hPageImages from '../../images/homePageImage.jpg'
const HomePage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",width:"70%",margin:"0 auto",paddingTop:"50px"}} >
           <h1 style={{textAlign:"center"}}>HOŞGELDİNİZ</h1>
           <img src={hPageImages} alt="" style={{width:"1000px",marginTop:"60px",borderRadius:"30px"}}></img>
        </div>
    )
}

export default HomePage
