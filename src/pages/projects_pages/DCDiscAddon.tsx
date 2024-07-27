import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function DCDiscAddon(){
    React.useEffect(() => {
        document.title = translate("title.projects-page.dc-disc-addon");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <h2 className="mod-name">Dungeons Content Music Disc</h2>
                <div className="links">
                    <a href="https://www.curseforge.com/minecraft/mc-mods/dungeons-content-music-disc" className="curseforge-btn">CurseForge</a>
                </div>
                <h3 className="mod-desc-chap">{translate('mod-info.about-p-mod')}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("dc-disc-addon.one-p")[0]} <a className="url" href="/projects/dungeons_content">Dungeons Content</a>{translate("dc-disc-addon.one-p")[1]}</p>
                <img src="https://cdn.modrinth.com/data/cached_images/779ef6849f7cb2f46c86b121909636f628b270b8.png" className={"mod-img"} alt="discs" />
            </main>

            <Footer/>

        </div>
    )
}