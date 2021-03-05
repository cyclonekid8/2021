import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    state={user:'',pass:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onsubmit(this.state.user,this.state.pass);
    } 

    render() {
        return (
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Username: </label>
                    <input type="text" placeholder="Username..." onChange={(e)=>this.setState({user:e.target.value})} />
                </div>
                <div className="field">
                    <label>Password: </label>
                    <input type="text" placeholder="Password" onChange={(e)=>this.setState({pass:e.target.value})} />
                </div>
                <button className="ui button" type="submit">Login</button>

            </form>
        );
    }

}

export default withRouter(Login);