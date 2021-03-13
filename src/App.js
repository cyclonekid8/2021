import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import View from './components/View';
import Login from './components/Login';
import LoginApi from './api/LoginAPI';
import Balance from './components/Balance';
import Price from './components/Price';
import Historical from './components/Historical';
import Past from './components/Past';
import Buy from './components/Buy';


class App extends React.Component {
    state = {response: ""};
    LoggingIn = async (user, pass) => {
        const loggedin = await LoginApi.post("/login",{
            username: user,
            password: pass
        });
        this.setState({response: loggedin});
        console.log(loggedin.data);
        this.props.history.push({pathname:"/view",state:{data:loggedin.data,user,pass}})
    }
    
    
    
    
    
    render() {
        return (
            <div>

                
                <Switch>

                    <Route exact path="/">
                        <Login onsubmit={this.LoggingIn}/>
                    </Route>
                    <Route path="/view">
                        <Nav road="/view" />
                        <View />
                    </Route>
                    <Route path="/balance">
                        <Nav road="/balance"/>
                        <Balance/>
                    </Route>
                    <Route path="/price">
                        <Nav road="/price"/>
                        <Price />
                    </Route>
                    <Route path="/historical">
                        <Nav road="/historical"/>
                        <Historical/>
                    </Route>
                    <Route path="/pasttransaction">
                        <Nav road="/pasttransaction"/>
                        <Past/>
                    </Route>
                    <Route path="/buyandsell">
                        <Nav road="/buyandsell"/>
                        <Buy/>
                    </Route>
                    <Route path="/logout">
                        <Login onsubmit={this.LoggingIn}/>
                    </Route>
                </Switch>
            </div>
        );

    }
}

export default withRouter(App);