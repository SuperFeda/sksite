import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function BloodCrystal(){
    React.useEffect(() => {
        document.title = translate("title.projects-page.blood-crystal");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <h2 className="mod-name">Blood Crystal</h2>
                <div className="links">
                    <a href="https://modrinth.com/mod/blood-crystal" className="modrinth-btn">Modrinth</a>
                    <a href="https://www.planetminecraft.com/mod/blood-crystal-5827135/" className="planet-mc-btn">Planet minecraft</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/blood-crystal" className="curseforge-btn">CurseForge</a>
                    <a href="https://github.com/SkylightProduction/BloodCrystal" className="github-btn">GitHub</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-mod")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("blood-crystal.one-p")[0]} <a href="https://modrinth.com/mod/enhanced-celestials" className="url">Enhanced Celestials</a>{translate("blood-crystal.one-p")[1]} <a href="https://modrinth.com/mod/enhanced-celestials" className="url">Enhanced Celestials</a>.</p>
                <img src="https://cdn.modrinth.com/data/H7T4w0KZ/images/9e7dbfa8dd8481a2c7c23e92be1c1d6f1179bb34.png" className="mod-img" alt="blood_moon"/>
                <details className={'mod-details'}>
                    <summary>{translate("blood-crystal.details.summary.guide")}</summary>
                    <h3 className="mod-desc-chap">{translate("blood-crystal.chapter.blood-crystal")}</h3>
                    <p className={"mod-desc-p"}>{translate("blood-crystal.second-p")}</p>
                    <h3 className="mod-desc-chap">{translate("blood-crystal.chapter.lucky-crystal")}</h3>
                    <p className={"mod-desc-p"}>{translate("blood-crystal.three-p")}</p>
                    <h3 className="mod-desc-chap">{translate("blood-crystal.chapter.harvest-crystal")}</h3>
                    <p className={"mod-desc-p"}>{translate("blood-crystal.four-p")}</p>
                    <h3 className="mod-desc-chap">{translate("blood-crystal.chapter.unstable-crystals")}</h3>
                    <p className={"mod-desc-p"}>{translate("blood-crystal.five-p")}</p>
                </details>
            </main>

            <Footer/>

        </div>
    )
}