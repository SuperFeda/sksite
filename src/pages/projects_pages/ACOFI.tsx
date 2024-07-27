import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {translate} from "../../scripts";

import '../../css/mod.css'
import '../../css/styles.css'

export default function ACOFI() {
    React.useEffect(() => {
        document.title = translate("title.projects-page.acofi");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <h2 className="mod-name">Alternate Create Of Fiery Items</h2>
                <div className="links">
                    <a href="https://modrinth.com/mod/acofi" className="modrinth-btn">Modrinth</a>
                </div>
                <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/6f135b6f210a45addd5f74dc70c8eeffbce40363.png" alt="title"/>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-mod")}</h3>
                <p id="first-line" className={'mod-desc-p'}>{translate("acofi.one-p")[0]} <a href="https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest" className="url">Twilight forest</a> {translate("acofi.one-p")[1]}</p>
                <h3 className="mod-desc-chap">{translate("acofi.chapter.about-item")}</h3>
                <img className="mod-logo" src="https://cdn.modrinth.com/data/cached_images/7d6ab5e686179433a6b45ec3b9ecd5c2b86730fd.png" alt="item"/>
                <p className={'mod-desc-p'}>{translate("acofi.second-p")}</p>
                <div className="images">
                    <img className="flex-element mod-logo" src="https://cdn.modrinth.com/data/cached_images/c2ef4553dd2e6cdeed83769f2a471052ae001c2d.png" alt="ur_ghast"/>
                    <img className="flex-element mod-logo" src="https://cdn.modrinth.com/data/cached_images/d37479b017ef28df3650a6ca9917c55e04888f73.png" alt="hydra"/>
                </div>
                <h3 className="mod-desc-chap">{translate("acofi.chapter.recipe")}</h3>
                <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/2585f784626e74e8d04faef0a133d90f5ac0b4ee.png" alt="recipes"/>
                <h3 className="mod-desc-chap">{translate("acofi.chapter.fix-problems")}</h3>
                <p className={'mod-desc-p'}>{translate("acofi.three-p")}</p>
                <img className="mod-img" src="https://cdn.modrinth.com/data/cached_images/755a5c762c6dc160ab1de3f4fa401748ea1340d2.png" alt="acofi_command"/>
                <p className={'mod-desc-p'}>{translate("acofi.four-p")}</p>
            </main>

            <Footer/>

        </div>
    )
}