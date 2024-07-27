import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {translate} from "../scripts";

import '../css/index.css';
import '../css/styles.css';

export default function Home() {
    React.useEffect(() => {
        document.title = translate("title.home");
    }, []);

    return (
        <div id={'box'}>

            <Header/>

            <main id={'index-main'}>
                <div className="up-info">
                    <img height="100" width="530" src={"/img/png/SkylightProduction.png"} alt="sk_logo"/>
                    <h2 className="up-info-text">{translate("home.about_text")}<p>Minecraft</p></h2>
                </div>

                <div className="studios">
                    <h2 className="chapter">{translate("home.our_studios")}</h2>
                    <div className="studios-list">
                        <a className="studio" href="/studios/skylight-modding">
                            <img src="/img/png/sm_logo_miniature.png" className="mini-img" id="sm_logo" alt="sm_logo"/>
                            <div className="studio-content">
                                <h3>SkylightModding<svg style={{height: '17px', width: '17px', position: 'relative', top: '2px', left: '5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="external-icon" data-v-f4bed260=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path></svg></h3>
                                <p>{translate("home.skylightmodding.creation-date")}<br></br>{translate("home.skylightmodding.projects-count")}</p>
                            </div>
                        </a>
                        <a className="studio mde" href="/studios/mdestudio">
                            <img src={"/img/png/mdelogo.png"} className="mini-img" id="mde_logo" alt="mde_logo"/>
                            <div className="studio-content">
                                <h3>MDE Studio<svg style={{height: '17px', width: '17px', position: 'relative', top: '2px', left: '5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="external-icon" data-v-f4bed260=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path></svg></h3>
                                <p>{translate("home.mdestudio.creation-date")}<br></br>{translate("home.mdestudio.projects-count")}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            <Footer/>

        </div>
    )
}