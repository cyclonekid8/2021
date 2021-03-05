import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';


class Balance extends React.Component {
    

    state={balance:''};
    
    Balances = async() => {
        
        const obj=this.props.location.state.data;
        console.log(obj);
        const details= await LoginAPI.post("/balance",{
            'accountKey':obj
        });
        console.log(details);
        this.setState({balance:details});
       
    }
    
    
    render() {

    

    
        return (
            <div>
                <div >
                    Balance
                
                </div>  
            </div>
        );
    }
}
export default withRouter(Balance);