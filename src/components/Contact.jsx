import React, {useState} from "react"

function Contacts(props) { 

    const [backgroundColor, setBackgroundColor] = useState({});
    const [color, setColor] = useState({});
    const [line, setLine] = useState({});
    const [changeColor, setChangeColor] = useState({});


    function onMouseEnter() {
         setBackgroundColor({backgroundColor: "#323644", cursor: "pointer"})
         setColor({color: "white"})
         setLine({backgroundColor: "#323644"})
         setChangeColor({color: "white"})
    }

    function onMouseLeave() {
        setBackgroundColor({color: "white", backgroundColor: "white", cursor: "pointer"})
        setLine({backgroundColor: "white"})
        setColor({color: "rgb(50 54 68)"})
        setChangeColor({color: "#00aaef"})
   }

    return (
        <li style={backgroundColor} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="contacts">
            <div className="email name"><h2 style={changeColor} >{props.name} {props.surname}</h2></div>
            <div style={line} className="line"></div>
            <div className="checkbox"><input type="checkbox"></input></div>
            <div style={line} className="line"></div>
            <div className="email"><h2 style={color} >{props.email}</h2></div>
            <div style={line} className="line"></div>
            <div className="checkbox"><h2 style={color} >{props.phone}</h2></div>
            <div style={line} className="line"></div>
        </li>
    )
}

export default Contacts