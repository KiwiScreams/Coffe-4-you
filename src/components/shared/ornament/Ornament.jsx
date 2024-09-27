import "./Ornament.css";
import React from "react";
import ornament from "../../../assets/images/ornament.svg";
const Ornament = (props) => {
    return ( 
        <>
        <section className="ornament" style={props.style}>
            <img src={ornament} alt="Coffe 4 You" />
        </section>
        </>
     );
}
 
export default Ornament;