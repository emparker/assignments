import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './components/AuthPage.js'
import ProfilePage from './components/ProfilePage.js'
import PublicPage from './components/PublicPage.js'
import { UserContext } from './context/UserProvider.js'
// import { IssueContext } from './context/IssueProvider.js'

export default function App(){
const { token } = useContext(UserContext)

    return (
        <div>
            <h1>ROCK THE VOTE!</h1>
            <section>
                <Switch>
                    <Route exact path="/"
                        render={()=> token ? <Redirect to="/profile"/> : <AuthPage />}
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
