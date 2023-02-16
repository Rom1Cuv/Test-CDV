import React from "react";
import { useState } from "react";
import '../App.css'


export default function FloorPannel() {

    const [buttonColor,setButtonColor] = useState(true);
    
    const handleClick = () => {
        setButtonColor(!buttonColor);
    };
        
        
   

    
    
     
    

      
    return (
    <div>
        <h1>Panneau Ascenseur</h1>
        <div className='Tableau' style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            fontSize:'50px',
        }}>

            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >8</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >6</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >4</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >2</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >0</button>
                    <div className={buttonColor ? "voyant1Off" : "voyant1On"} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>{buttonColor ? "doors open" : "doors closed"}</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center.'}}>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >9</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >7</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >5</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >3</button>
                    <button onClick={handleClick} className={buttonColor ? "boutonOff" : "boutonOn"}
                    >1</button>
                    <div className={buttonColor ? "voyant2Off" : "voyant2On"} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>{buttonColor ? "FLOOR" : "UP/DOWN"}</div>
                </div>
            </div>
      </div>
    </div>
    );
    }