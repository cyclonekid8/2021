import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import LoginAPI from '../api/LoginAPI';
import Price from './Price';
import moment from 'react-moment'
import ReactDOM from 'react-dom';

class Historical extends React.Component {
    
    state={arrays:[],called:false,data:'',done:false,clicked:false,x:0,y:10};
    call =async()=> {
        if(this.state.clicked===false) {
            this.setState({clicked:true});
        }
        else {
            this.setState({clicked:false});
        }
        
        if(this.state.called===false) {
            const price=await LoginAPI.post("/pricing/historical");
            const array=price.data;
            this.setState({arrays:array});
      
            this.setState({called:true});
            
        }
    }

    increment=()=> {
        const num1=this.state.x;
        const num2=this.state.y;
        this.setState({x:num1+10});
        this.setState({y:num2+10});
    }
    decrement=()=> {
        const num1=this.state.x;
        const num2=this.state.y;
        if(num1===0) {
            return 
        }
        this.setState({x:num1-10});
        this.setState({y:num2-10});
    }
    render() {
        const data=this.state.arrays;
        console.log(data[1]);
        const x=this.state.x;
        const y=this.state.y;
        var row=data.slice(x,y).map(item =>{
            const ref=1614855600
            var minute=(item.timestamp-ref)/60
            
            var zero=null
            var pmoram="pm"
            var date=4
            if (minute>=60) {
                var temp1=minute
                minute=temp1%60
                if (minute<10) {
                    zero=0
                }
              

            }
            var hour=Math.floor((item.timestamp-ref)/3600)+19
            if(hour >= 24) {
                var temp1=date
                date=temp1+1
                var temp2=hour
                hour=temp2%24
            }
            if (hour<12) {
                pmoram="am"
            }
            else {
                pmoram="pm"
            }
            if (hour>24) {
                var temp1 =date
                date=temp1+1
            }
            return (
                <tr>
                    <td>{item.assetSymbol}</td>
                    <td>{item.price}</td>
                    <td>{date}th March {hour}:{zero}{minute}{pmoram}</td>
                </tr>
            );
        })
            return (
            
               <div>
                    {this.state.clicked ? 
                    <div>
                        <button className="ui button grey" onClick={(e)=>this.call()} >
                            Hide
                            
                        </button> 
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>Cryptocurrency Symbol</th>
                                    <th>Price of Cryptocurrency</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>{row}</tbody>
                        </table>  
                        <label className="ui label" onClick={(e)=>this.decrement()} >Previous Page</label>
                        <label className="ui label" onClick={(e)=> this.increment()}>Next Page</label>
                    </div>: 
                    <div>    
                        <button className="ui button light green" onClick={(e)=>this.call()}>
                            View historical pricing
                        </button>

                        
                    </div>}
                </div>
                    );
        }
    }

export default withRouter(Historical);