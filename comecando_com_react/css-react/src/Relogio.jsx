import React from "react";
export default function Relogio (){
    return (
        <div>
            <p style={{textAlign: 'center'}}>
                {new Date().toLocaleTimeString()}
            </p>
        </div>
    )
}