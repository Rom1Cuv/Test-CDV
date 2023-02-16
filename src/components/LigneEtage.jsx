import React from 'react';
import '../App.css'

export default function FloorLine(props) {
    return (
        <div style={{fontSize:'30px'}}>

            <table>
                <tr style={{display:'flex', padding:'15px'}}>
                    <td>Etage {props.level}</td>
                    <td style={{display:'flex', padding:'10px'}}>{props.isHereButton}</td>
                    <td>{props.callButton}</td>
                </tr>

            </table>
             
           
        </div>
    );
};

