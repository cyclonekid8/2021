import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';


class Balance extends React.Component {
    

    state={assetbalance:'',cashbalance:'',clicked:false,called:false};
    
    Balances = async(obj) => {
        
        if(this.state.clicked===true) {
            this.setState({clicked:false}); 
        }
        else {
            this.setState({clicked:true});
        }
        
        if(this.state.called===false) {
            const details= await LoginAPI.post("/balance",{
                'accountKey':obj
            });
           
            this.setState({called:true});
            this.setState({assetbalance:details.data.assetBalance});
            this.setState({cashbalance:details.data.cashBalance})
           
        }

       
    }
    
    
    render() {

    
        const obj=this.props.location.state.data.accountKey;
        return (
            <div>
                <div className="ui container">
                    {this.state.clicked ? 
                    <div>
                        <div className="ui container">
                            Your asset balance is : {this.state.assetbalance}
                            <hr/>
                            Your cash balance is : {this.state.cashbalance}
                        </div>
                        <button className="ui button grey" onClick={(e)=>this.Balances(obj)}>Hide</button>
                    </div>:<button className="ui button green" onClick={(e)=>this.Balances(obj)}>Show</button>}
                </div>
            </div>                
        )
    }
}

export default withRouter(Balance);