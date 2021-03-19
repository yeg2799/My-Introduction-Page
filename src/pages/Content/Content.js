import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Aboutme from './Aboutme'
import Blog from './Blog'
import Contact from './Contact'
import HomePage from './HomePage'
import MyProject from './MyProject'
import '../../style/Content/content.scss'
import BlogPageSingle from './BlogPageSingle'
const Content = () => {
    return (
        <div class="content" >
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
                <Route exact path="/blog/:id">
                    <BlogPageSingle/>
                </Route>
                <Route exact path="/iletisim">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    )
}

export default Content
