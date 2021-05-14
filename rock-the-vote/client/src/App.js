import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthPage from './components/AuthPage.js'
import ProfilePage from './components/ProfilePage.js'
import PublicPage from './components/PublicPage.js'

export default function App(){

    return (
        <div>
            {/* <h1>ROCK THE VOTE</h1> */}
            <section>
                testy tester
                <Switch>
                    <Route exact path="/"
                        render={()=> <AuthPage />}
                    />
                    <Route path="/profile"
                        render={()=> <ProfilePage />}
                    />
                    <Route path="/public"
                        render={()=> <PublicPage />}
                    />
                </Switch>
            </section>
        </div>
    )
}
