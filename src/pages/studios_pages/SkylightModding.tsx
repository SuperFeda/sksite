import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/studio.css'

export default function SkylightModding() {
    React.useEffect(() => {
        document.title = translate("title.studios.skylightmodding");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"studio-page"}>
                <img src="/img/png/SkylightModding.png" className="studio-logo img-center" alt="sm_logo"/>
                <ul className="links">
                    <li><a href="https://discord.gg/Fm9maH3qGr" className="discord-btn">Discord</a></li>
                </ul>
                <ul className="member-list">
                    <a className="member" href="https://ru.namemc.com/profile/SuperFeda.1">
                        <img src="https://s.namemc.com/2d/skin/face.png?id=b2fc5658446baae5&scale=35" className="mini-img" alt="SuperFeda"/>
                        <div className="member-content">
                            <h3 className="card-title">SuperFeda<svg style={{height:'17px',width:'17px',position:'relative',top:'2px',left:'5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="external-icon" data-v-f4bed260=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path></svg></h3>
                            <p className="card-desc">{translate("studio.role.founder")}</p>
                        </div>
                    </a>
                    <a className="member" href="https://ru.namemc.com/profile/LosT22Reg.1">
                        <img src="https://s.namemc.com/2d/skin/face.png?id=2d3a644b558cf785&scale=35" className="mini-img" alt="LosTKnighT"/>
                        <div className="member-content">
                            <h3 className="card-title">LosT22Reg<svg style={{height:'17px',width:'17px',position:'relative',top:'2px',left:'5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="external-icon" data-v-f4bed260=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path></svg></h3>
                            <p className="card-desc">{translate("studio.tole.co-founder")}</p>
                        </div>
                    </a>
                </ul>
            </main>

            <Footer/>

        </div>
    )
}