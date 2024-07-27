import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function HarpicCore() {
    React.useEffect(() => {
        document.title = translate("title.projects-page.harpiccore");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <img className="mod-img" src="/img/png/harpiclogo.png" alt="harpiccore_logo"/>
                <div className="links">
                    <a href="https://www.curseforge.com/minecraft/mc-mods/harpiccore-mod" className="curseforge-btn">CurseForge</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-mod")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("harpiccore.one-p")}</p>
                <img src="https://cdn.discordapp.com/attachments/968157912843288606/1266348295509245953/2024-07-26_16.48.25.png?ex=66a4d241&is=66a380c1&hm=149f02db17d060129aa90556ea88d35da1e7c4a4b6c5966b89928d87545cfcbb&" alt="" className="mod-img"/>
                <p className={"mod-desc-p"}>{translate("harpiccore.second-p")}</p>
                <img src="https://cdn.discordapp.com/attachments/968157912843288606/1266349589427126303/2022-12-12_17.png?ex=66a4d375&is=66a381f5&hm=30a60293df9635c0080ab1b12a5eb150128baf01b5bae230c42977ac428ed576&" alt="" className="mod-img"/>
                <p className={"mod-desc-p"}>{translate("harpiccore.three-p")}</p>
                <img src="https://cdn.discordapp.com/attachments/968157912843288606/1266652729808519168/2024-07-27_14.03.07.png?ex=66a5edc8&is=66a49c48&hm=8676957342e08c6d72374678d16e8b0001d5e3afe7644eb8457ef1074a7e6d82&" alt="" className="mod-img"/>
                <p className={"mod-desc-p"}>{translate("harpiccore.four-p")}</p>
                <img src="https://media.discordapp.net/attachments/968157912843288606/1266348295031357501/2024-07-26_16.58.35.png?ex=66a4d241&is=66a380c1&hm=59c6a220694f9907d147488f1b99be4bfeabde467f459e64b93b4b8ef5ed2ec0&=&format=webp&quality=lossless&width=951&height=504" alt="" className="mod-img"/>
            </main>

            <Footer/>

        </div>
    )
}