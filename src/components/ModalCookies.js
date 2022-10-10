import React, { useEffect } from "react";
import "../styles/ModalCookies.css";

const ModalCookies = ({ text, buttonText }) => {
    const aceptar = () => {
        let sixMonthsFromNow = new Date();
        sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
        document.cookie = `modalCookie=1; expires=${sixMonthsFromNow}`;
        document.querySelector(".container").style.display = "none";
    };

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        let alreadyAccepted = getCookie("modalCookie");
        if (alreadyAccepted === "1") {
            document.querySelector(".container").style.display = "none";
        }
    }

    useEffect(() => {
        checkCookie();
    });

    return (
        <div className="container">
            <div className="modal">
                <div className="text">{text}</div>
                <div className="button" onClick={aceptar}>
                    {buttonText}
                </div>
            </div>
        </div>
    );
};

export default ModalCookies;
