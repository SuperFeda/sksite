import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function DungeonsContent(){
    React.useEffect(() => {
        document.title = translate("title.projects-page.dungeons-content");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <img className="mod-logo img-center" alt="mod_logo" width="612" height="100%" src="../../img/png/dc.png"/>
                <div className="links">
                    <a href="https://modrinth.com/mod/dungeons-content" className="modrinth-btn">Modrinth</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/minecraft-dungeons-content" className="curseforge-btn">CurseForge</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-mod")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("dungeons-content.one-p")}</p>
                <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/3e752d58ae03abedb8cbe8ccd718466d324bac72.png" alt="screen"/>
                <p className={"mod-desc-p"}>{translate("dungeons-content.second-p")}</p>
                <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/a30c4be2ed58145ace78d073764e2e267f987bee.png" alt="screen"/>
                <img className="warn-img mod-img" src="https://cdn.modrinth.com/data/cached_images/0b46b4ff5141e3a865f0f9d5ebf1d18a0c98f1f5.png" alt="warning"/>
                <ul className={"mod-ul"}>
                    <li className={"mod-li"}>{translate("dungeons-content.warning.ul.one-li")} <a className="url" href="https://modrinth.com/mod/geckolib">GeckoLib</a>.</li>
                    <li className={"mod-li"}>{translate("dungeons-content.warning.ul.second-li")}</li>
                    <li className={"mod-li"}>{translate("dungeons-content.warning.ul.three-li")}</li>
                    <li className={"mod-li"}>
                        {translate("dungeons-content.warning.ul.four-li")[0]} <a className="url" href="https://www.curseforge.com/minecraft/texture-packs/stay-true">Stay True</a> {translate("dungeons-content.warning.ul.four-li")[1]}
                        <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/a7ef62a85133486d167efcaf6372f38c34f50457.png" alt="stay-true-bug"/>
                    </li>
                </ul>
                <h3 className="mod-desc-chap">{translate("dungeons-content.chapter.bedrock-edition")}</h3>
                <img className="img-center mod-logo" style={{marginTop: '10px', marginBottom: '10px'}} src="https://cdn.modrinth.com/data/cached_images/120796032bc0047375d02c2931eff8d4a2e938fc.png"/>
                <p className={"mod-desc-p"}>{translate("dungeons-content.three-p")[0]} <a href="https://ru.namemc.com/profile/EmptyCoso.1" className="url">EmptyCoso</a>. {translate("dungeons-content.three-p")[1]} <a href="https://mcpedl.com/dungeons-content-bedrock/" className="url">https://mcpedl.com/dungeons-content-bedrock/</a>.</p>
                <hr/>
                <details className={"mod-details"}>
                    <summary>{translate("dungeons-content.details.summary.add-content")}</summary>
                    <ul className={"mod-ul"}>
                        <li className={"mod-li"}><a className="url" href="https://www.curseforge.com/minecraft/mc-mods/dungeons-content-music-disc">Dungeons Content Music Disc</a> {translate("dungeons-content.details.add-content-p1")}</li>
                        <li className={"mod-li"}>Dungeons Content Plus <i>{translate("dungeons-content.details.add-content-p2")}</i></li>
                    </ul>
                </details>
                <details className={"mod-details"}>
                    <summary>{translate("dungeons-content.details.summary.credits")}</summary>
                    <ul className={"mod-ul"}>
                        <li className={"mod-li"}><a href="https://ru.namemc.com/profile/SlashBro31.2" className="url">SlashBro31</a> {translate("dungeons-content.details.credits-slashbro")}</li>
                        <li className={"mod-li"}><a href="https://ru.namemc.com/profile/SuperFeda.1" className="url">SuperFeda</a> {translate("dungeons-content.details.credits-superfeda")}</li>
                        <li className={"mod-li"}><a href="https://ru.namemc.com/profile/EmptyCoso.1" className="url">EmptyCoso</a> {translate("dungeons-content.details.credits-emptycoso")}</li>
                        <li className={"mod-li"}><a href="https://ru.namemc.com/profile/zozozrob.2" className="url">zozozrob</a> {translate("dungeons-content.details.credits-zozozrob")}</li>
                    </ul>
                </details>
            </main>

            <Footer/>

        </div>
    )
}