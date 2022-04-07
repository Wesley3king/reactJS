import React from "react";

export default function State (props) {
    return (
        <>
        <section>
            <label>nota {props.num} : </label>
          <input type="text" value={props.nota} onChange={(e)=>{props.setNota(e.target.value, props.num)}}/>
        </section>
        </>
    )
}