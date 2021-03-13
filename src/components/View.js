import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import LoginAPI from '../api/LoginAPI';


function View(props) {
    
    
    const initialresp = props.location.state.data;
    console.log(initialresp);
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
            
            
        {peekProfile ? <div>

                <button className="ui button grey" onClick={(e)=>setPeekProfile(false)}>Hide</button>
                <table className='ui celled table'>
                    <tbody>
                    {fullProfile}
                    </tbody>
                </table> 
            </div>: <button className='ui button light green' onClick={()=>{setPeekProfile(true)}}>View User Details</button>}
            
        </div>
    );
}
export default withRouter(View);