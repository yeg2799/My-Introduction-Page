import React from 'react'
import hPageImages from '../../images/homePageImage.jpg'
import '../../style/Content/homepage.scss'
const HomePage = () => {
    return (
        <div className="hPage">
           <h1 className="hPage-Title">HOŞGELDİNİZ</h1>
           <img src={hPageImages} alt=""  className="hpage-img"></img>
        </div>
    )
}

export default HomePage
