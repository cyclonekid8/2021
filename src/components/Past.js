
import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';

class Past extends React.Component {
    
    state={view:false,called:false,obj:[]}
    Call =async(itemm) => {
        if(this.state.called===false) {
            const data =await LoginAPI.post("/transactions/view",{
                accountKey:itemm
                
            })
            
            this.setState({called:true})
            this.setState({obj:data.data})
            return data.data;}

    }
    Toggle=()=>{
        if(this.state.called===false) {
            const objj=this.props.location.state.data.accountKey;
            const resp=this.Call(objj)
            
            console.log(resp)
        }
        if(this.state.view===true) {
            this.setState({view:false})

        }
        else {
            this.setState({view:true})
        }
    }
    render() {
        const objj=this.props.location.state.data.accountKey;
        const past=this.state.obj
        var pasttran=past.map(item=>{
            var date=new Date(item.timestamp*1000)
            return (
                <tr>
                    <td>{item.assetSymbol}</td>
                    <td>{item.assetPrice}</td>
                    <td>{item.assetAmount}</td>
                    <td>{item.cashAmount}</td>
                    <td>{item.orderType}</td>
                    <td>{item.transactionId}</td>
                    <td>{date.toLocaleDateString()+" at "+date.toLocaleTimeString()}</td>
                </tr>
            );
        })


        return (
            <div>
                {this.state.view ? <div>
                <button className="ui button grey" onClick={(e)=>this.Toggle()}>
                    Hide
                </button>
                <table className="ui celled table">
                    <thead>
                        <tr>                    
                            <th>Asset Symbol</th>
                            <th>Asset Price</th>
                            <th>Asset Amount</th>
                            <th>Cash Amount</th>
                            <th>Order Type</th>
                            <th>Transaction Id</th>
                            <th>Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>
                      {pasttran}  
                    </tbody>
                </table>
                
                </div> : <button className="ui button green" onClick={(e)=>this.Toggle()}>Show</button> }
            </div>
        );
    }
}
export default withRouter(Past);