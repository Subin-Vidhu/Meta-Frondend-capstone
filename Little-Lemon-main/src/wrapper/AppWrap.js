import React from "react";
import './AppWrapper.css';

const AppWrap = (Component, idName, ClassNames) => function HOC() {

    return (
    <div
        id={idName}
        className={`app__container ${ClassNames}`}
    >
        <div
            className="app__wrapper app__flex"
        >
            <Component />
        </div>
    </div>);
};

export default AppWrap;