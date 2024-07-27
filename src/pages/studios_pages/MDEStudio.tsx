import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/studio.css'

export default function SkylightModding() {
    React.useEffect(() => {
        document.title = translate("title.studios.mdestudio");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"studio-page"}>
                <img src="/img/png/mdelogo.png" height="220" className="img-center" style={{filter: "drop-shadow(0 0 10px black)"}} alt="mde_logo"/>
                <ul className="links">
                    <li><a href="https://discord.gg/Tu8E846aCB" className="discord-btn">Discord</a></li>
                    <li><a href="https://www.youtube.com/channel/UCdoIeHmaULeYsDv3mQrN9xA" className="youtube-btn">YouTube</a></li>
                </ul>
                <ul className="member-list">
                    <a className="member" href="https://ru.namemc.com/profile/SlashBro31.2">
                        <img src="https://s.namemc.com/2d/skin/face.png?id=4a51df3dfae69ad8&scale=35" className="mini-img" alt="SlashBro31"/>
                        <div className="member-content">
                            <h3 className="card-title">SlashBro31<svg style={{height: '17px', width: '17px', position: 'relative', top: '2px', left: '5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="external-icon" data-v-f4bed260=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path></svg></h3>
                            <p className="card-desc">{translate("studio.role.founder")}</p>
                        </div>
                    </a>
                </ul>
            </main>

            <Footer/>

        </div>
    )
}