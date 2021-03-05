import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import LoginAPI from '../api/LoginAPI';

class Historical extends React.Component {
    
    call =async()=> {
        const price=await LoginAPI.post("/pricing/historical");
        return price;

    }

    render() {
        const data=this.call();
        console.log(data);
        return (
            <div>
                Historical
            </div>
        );
    }
}
export default withRouter(Historical);