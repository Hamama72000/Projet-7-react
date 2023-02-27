import React, { useState, useRef, useEffect } from "react";
import "../styles/collapse.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


export default function Collapse({ props, title }) {
    const ChevronDown = <FontAwesomeIcon icon={faChevronDown}/>;
    const ChevronUp = <FontAwesomeIcon icon={faChevronUp}/>;
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    console.log('test', ChevronUp)
    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const displayProps = () => {
        if (typeof props === "object") {
            return (
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{props}</p>;
        }
    };

    return (
        <div className="collapse">
            <div onClick={toggleState} className="collapse_visible">
                <h3>{title}</h3>
                <div className="collapse_icon">
                    {toggle ? ChevronUp : ChevronDown}
                </div>
            </div>

            <div
                ref={refHeight}
                className={
                    toggle ? "collapse_toggle animated" : "collapse_toggle"
                }
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                {displayProps()}
            </div>
        </div>
    );
}