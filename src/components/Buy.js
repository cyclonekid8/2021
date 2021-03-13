import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';

class Buy extends React.Component {
    
    state={amount:''};
    Call = async(respob,type,amt) => {
        const data= await LoginAPI.post("/transactions/add",{
            'accountKey':respob,
            'orderType':type,
            'assetAmount':parseFloat(amt)
        })
        console.log(data);
        return data;
    }
    render() {
        const passed_Data=this.props.location.state.data.accountKey;
        console.log(passed_Data);
        
        return (
            <div>
                <label></label>
                <input onChange={(e)=>this.setState({amount:e.target.value})} className="ui input field" type="number" ></input>
                <button className="ui button" onClick={(e)=>this.Call(passed_Data,"BUY",this.state.amount)} >Buy</button>
                <button className="ui button" onClick={(e)=>this.Call(passed_Data,"SELL",this.state.amount)} >Sell</button>
            </div>
        );
    }
}

export default withRouter(Buy);