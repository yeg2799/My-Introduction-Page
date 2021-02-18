import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Link to="/">Anasayfa</Link>
            <Link to="/hakkimda">Hakkımda</Link>
            <Link to="/projelerim">Projelerim</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/iletisim">İletişim</Link>
        </div>
    )
}

export default Menu
