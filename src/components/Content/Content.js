import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Aboutme from './Aboutme'
import Blog from './Blog'
import Contact from './Contact'
import HomePage from './HomePage'
import MyProject from './MyProject'

const Content = () => {
    return (
        <div style={{background:"#D7DDE8",height:"1024px"}}>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/hakkimda">
                    <Aboutme/>
                </Route>
                <Route exact path="/projelerim">
                    <MyProject/>
                </Route>
                <Route exact path="/blog">
                    <Blog/>
                </Route>
                <Route exact path="/iletisim">
                    <Contact/>
                </Route>
            </Switch>
            
            
        </div>
    )
}

export default Content
