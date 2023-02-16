import React from "react";
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FloorLine from './LigneEtage';
import '../App.css'

const floorList = [
    {
        level:"9",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"8",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"7",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"6",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"5",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"4",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"3",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"2",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"1",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    },
    {
        level:"0",
        isHereButton: <SwapVerticalCircleIcon />,
        callButton: <RadioButtonCheckedIcon />
    }
]

export default function FloorList() {
      
    return (
        <div>
        <h1>Tableau Immeuble</h1>
        {floorList.map((floorList,index) => (
            <FloorLine 
                key={index}
                level={floorList.level}
                isHereButton={floorList.isHereButton}
                callButton={floorList.callButton}
            />    

        ))}
        </div>
    ); 
}