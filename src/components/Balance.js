import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';


class Balance extends React.Component {
    

    state={assetbalance:'',cashbalance:'',clicked:false};
    
    Balances = async(obj) => {
        
        if(this.state.clicked===true) {
            this.setState({clicked:false}); 
        }
        else {
            this.setState({clicked:true});
        }
        console.log(obj);
        const details= await LoginAPI.post("/balance",{
            'accountKey':obj
        });
        console.log(details);
        this.setState({assetbalance:details.data.assetBalance});
        this.setState({cashbalance:details.data.cashBalance})
        console.log(details);
       
    }
    
    
    render() {

    
        const obj=this.props.location.state.data;
        return (
            <div className="ui container">
                {this.state.clicked ? 
                <div>
                    <div className="ui container">
                        {this.state.assetbalance}
                        <hr/>
                        {this.state.cashbalance}
                    </div>
                    <button onClick={(e)=>this.Balances(obj)}>Hide</button>
                </div>:<button onClick={(e)=>this.Balances(obj)}>Show</button>}
            </div>

        )
    }
}

export default withRouter(Balance);