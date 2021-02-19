import React from 'react'
import hPageImages from '../../images/homePageImage.jpg'
const HomePage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",width:"70%",margin:"0 auto"}}>
           <h1 style={{margin:"20px auto"}}>HOŞGELDİNİZ</h1>
           <img src={hPageImages} alt="" style={{width:"1000px",marginTop:"60px",borderRadius:"30px"}}></img>
        </div>
    )
}

export default HomePage
