import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function CITATTFP(){
    React.useEffect(() => {
        document.title = translate("title.projects-page.citattfp");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <h2 className="mod-name">CITATTFP</h2>
                <div className="links">
                    <a href="https://modrinth.com/datapack/custom-item-to-activate-the-tf-portal" className="modrinth-btn">Modrinth</a>
                    <a href="https://www.curseforge.com/minecraft/texture-packs/custom-item-to-activate-the-twilight-forest-portal" className="curseforge-btn">CurseForge</a>
                    <a href="https://www.planetminecraft.com/data-pack/custom-item-to-activate-the-twilight-forest-portal-5822764/" className="planet-mc-btn">Planet minecraft</a>
                    <a href="https://github.com/SkylightProduction/CITATTFP" className="github-btn">GitHub</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-dp")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("citattfp.one-p")}</p>
                <h3 className="mod-desc-chap">{translate("citattfp.chapter.guide")}</h3>
                <ul className={"mod-ul"}>
                    <li className={'mod-li'}>{translate("citattfp.ul.one-li")} <a className="code">"data/twilightforest/tags/items/portal"</a>.</li>
                    <li className={'mod-li'}>{translate("citattfp.ul.second-li")} <a className="code">"activator.json"</a>.</li>
                    <li className={'mod-li'}>{translate("citattfp.ul.three-li")[0]} <a className="code">"id":"minecraft:netherite_block"</a>. <a className="code">"minecraft:netherite_block"</a> {translate("citattfp.ul.three-li")[1]}</li>
                    <ul className={"mod-ul"}>
                        <li className={'mod-li'}>
                            {translate("citattfp.ul.four-li")}
                            <img src="https://cdn.modrinth.com/data/cached_images/a50e51bbafe0fabe74782e7bed83435d74ea73ff.png" className="mod-img"/>
                            {translate("citattfp.ul.five-li")[0]} <a className="code">activator.json</a>. {translate("citattfp.ul.five-li")[1]}
                        </li>
                    </ul>
                    <li className={'mod-li'}>{translate("citattfp.ul.six-li")}</li>
                    <li className={'mod-li'}>{translate("citattfp.ul.seven-li")[0]} <a className="code">C:\Users\(UserName)\AppData\Roaming\.minecraft\saves\(WorldName)\datapacks</a> {translate("citattfp.ul.seven-li")[1]}</li>
                </ul>
            </main>

            <Footer/>

        </div>
    )
}