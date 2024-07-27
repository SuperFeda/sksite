import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function BeautifulWorld() {
    React.useEffect(() => {
        document.title = translate("title.projects-page.beautiful-world");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <img src="https://cdn.modrinth.com/data/cached_images/ea944db28a2fa2a6aef6761220ebc7161e6e1aea.png" className="mod-img" alt="bw_logo"/>
                <div className="links">
                    <a href="https://modrinth.com/mod/beautiful-world" className="modrinth-btn">Modrinth</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-mod")}</h3>
                <p id="first-line" className={'mod-desc-p'}>{translate("beautiful-world.one-p")}</p>
                <p className={'mod-desc-p'}><i>{translate("beautiful-world.second-p")}</i></p>
                <img src="https://cdn.modrinth.com/data/wQWBAodn/images/2e2566208549a4e9dfb1c527bce5dc138e5f6e8d.png" alt="bw-screen" className="mod-img"/>
                <h3 className="mod-desc-chap">{translate('beautiful-world.chapter.navigation')}</h3>
                <details className={'mod-details'}>
                    <summary className={'mod-summary'}>{translate("beautiful-world.details.summary.lore")}</summary>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p1")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p2")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p3")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p4")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p5")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p6")}</p>
                    <p className={'mod-desc-p'}>{translate("beautiful-world.details.lore.p7")}</p>
                </details>
            </main>

            <Footer/>

        </div>
    )
}
