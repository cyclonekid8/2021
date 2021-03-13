import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';




class Price extends React.Component {
    
    
    
    call =async()=> {
        const price=await LoginAPI.post("/pricing/current");
        return price;

    }
        

    render() {
        const data=this.call();
        console.log(data);

        return (
            <button className="ui button" >
                Price
            </button>
        );
    }
}
export default withRouter(Price);