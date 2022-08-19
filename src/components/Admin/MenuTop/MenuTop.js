import React from "react";
import { Button, Icon } from "antd";
import AgusLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={AgusLogo} alt="Logo" />

                <Button type="link" onClick={() => console.log("Click")}>
                    <Icon type="menu-fold"/>

                </Button>
                <div className="menu-top__right">
                    <Button type="link">
                        <Icon type="poweroff"/>

                    </Button>

                </div>


            </div>

        </div>
    );
}
