import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthPage from './components/AuthPage.js'
import ProfilePage from './components/ProfilePage.js'
import PublicPage from './components/PublicPage.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
const { token } = useContext(UserContext)

    return (
        <div>
            <h1>Rock The Vote!</h1>
            <section>
                <Switch>
                    <Route exact path="/"
                        render={()=> <AuthPage />}
                        />
                        {/* token ? <ProfilePage /> :  */}
                    
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
