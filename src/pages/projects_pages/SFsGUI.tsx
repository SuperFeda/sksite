import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function BeautifulWorldInfo() {
    React.useEffect(() => {
        document.title = translate("title.projects-page.sfs-gui");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <img className="mod-logo img-center" src="https://cdn.modrinth.com/data/cached_images/50ad349dc872467abad4e8879a42b20fc7165e62.png" alt="sfs_gui_logo"  />
                <div className="links">
                    <a href="https://modrinth.com/resourcepack/sf-s_gui" className="modrinth-btn">Modrinth</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-rp")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("sfs-gui.one-p")}</p>
                <img src="https://cdn.modrinth.com/data/BeApUa5V/images/dcd2e753ce544260d9f991c406fa7a4d2680c7fe.png" alt="sfs_gui_screenshot" className="mod-img"/>
            </main>

            <Footer/>

        </div>
    )
}