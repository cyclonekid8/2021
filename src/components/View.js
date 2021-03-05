import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';


function View(props) {
    
    
    const initialresp = props.location.state.data;
    const [peekProfile, setPeekProfile] = useState(false);
    
    const fullProfile = Object.entries(initialresp).map(([key,value])=>{
        
        return (
            <tr key={key}>
                <td>
                    {key}
                </td>
                <td>
                    {value.toString()}
                </td>
            </tr>
            
        );
    });

    return (
        
        <div>
            
            
        {peekProfile ? <table className='ui celled table'>
                <tbody>
                {fullProfile}
                </tbody>
            </table> : <button className='ui button primary' onClick={()=>{setPeekProfile(true)}}>View User Details</button>}
            
        </div>
    );
}
export default withRouter(View);