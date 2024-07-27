import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {translate} from "../../scripts";

import '../../css/styles.css'
import '../../css/mod.css'

export default function MDEStudioTheme() {
    React.useEffect(() => {
        document.title = translate("title.projects-page.mdetheme");
    }, []);

        return (
        <div id={"box"}>

            <Header/>

            <main id={"mod-main"}>
                <h2 className="mod-name">MDEStudio Theme</h2>
                <div className="links">
                    <a href="https://mcreator.net/plugin/86766/mdestudio-theme" className="mcreator-btn">MCreator</a>
                </div>
                <h3 className="mod-desc-chap">{translate("mod-info.about-p-plugin")}</h3>
                <p id="first-line" className={"mod-desc-p"}>{translate("mdetheme-plugin.one-p")}</p>
                <img src="https://sun9-22.userapi.com/impg/xUurwivoJxP7xpRp9oe5EMhFdGhhRzYlWj5Ixg/auUScG1YO5Y.jpg?size=1259x747&quality=96&sign=47783e8299f36e53707d12a4e57c691c&type=album" alt="mcreator_ui_with_plugin" className="mod-img"/>
            </main>

            <Footer/>

        </div>
    )
}