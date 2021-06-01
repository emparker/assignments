import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './components/AuthPage.js'
import ProfilePage from './components/ProfilePage.js'
import PublicPage from './components/PublicPage.js'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
const { token } = useContext(UserContext)

    return (
        <div>
            <h1>ROCK THE VOTE</h1>
            <section>
                <Switch>
                    <Route 
                        exact path="/"
                        render={()=> token ? <Redirect to="/profile"/> : <AuthPage />}
                    />
                    <ProtectedRoute 
                        path="/profile"
                        component={ProfilePage}
                        redirectTo="/"
                        token={token}
                    />
                    <ProtectedRoute 
                        path="/public"
                        component={PublicPage}
                        redirectTo="/"
                        token={token}
                    />
                </Switch>
            </section>
        </div>
    )
}
