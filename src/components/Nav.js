import React from 'react';
import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
    
    state={ clickedon : false,road:'',acckey:this.props.location.state.data.accountKey};

    
    clicked = () => {
        if(this.state.clickedon===false) {
            this.setState({clickedon:true});
        }
        else {
            this.setState({clickedon:false});
        }
    }
    Update = (buttonvalue) =>{
        const path=this.props.road
        if(path===buttonvalue) {
            window.location.reload(false);
        }
        else {
            console.log(this.state.acckey);
            this.props.history.push({pathname:buttonvalue,state:{data:this.state.acckey}});
        }
    }
    render() {

        
        console.log(this.state.acckey);
        return (
        <div>
            <button className="ui button" onClick={(e)=>this.Update("/view")}>
                <label>User details</label>
                
            </button>
            <button className="ui button" onClick={(e)=>this.Update("/balance")}>
                <label>wallet balance</label>
            </button>
            <button className="ui button" onClick={(e)=>this.Update("/price")}>
                <label>Current pricing of assets</label>
            </button>
            <button className="ui button" onClick={(e)=>this.Update("/historical")}>
                Historical pricing of assets
            </button>
            <button className="ui button" onClick={(e)=>this.Update("/pasttransaction")}>
                View past transactions
            </button>
            <button className="ui button" onClick={(e)=>this.Update("/buyandsell")}>
               Buy and sell assets
            </button>
        </div>);
    }
}
export default withRouter(Nav);