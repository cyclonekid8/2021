import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';
import axios from 'axios';
import { Date } from 'prismic-reactjs';


class Price extends React.Component {
    
    
    
    call =async()=> {
        var unix = Math.round(+new Date()/1000);
        const price=await LoginAPI.post("/pricing/current",{
            timestamp:unix
        });
        return price;
    }
        

    render() {
        const data=this.call();
        console.log(data);

        return (
            <div>
                Price
            </div>
        );
    }
}
export default withRouter(Price);