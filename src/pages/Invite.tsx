import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {translate} from "../scripts";

import "../css/invite_page.css"
import "../css/styles.css"

export default function Invite() {
    React.useEffect(() => {
        document.title = translate("title.invite-page");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"invite-page-main"}>
                <div className="form">
                    <h2>{translate("invite.title")}</h2>
                    <p>{translate("invite.one-p")[0]} <a className="url" style={{color: 'white'}} href="#">{translate("invite.one-p")[1]}</a></p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeoNvqbsMUDeCyNtZqi_BsmxS0dhVsrgPzeTol8-UTpQEn6zg/viewform?embedded=true" frameBorder="0">Загрузка…</iframe>
                </div>
            </main>

            <Footer/>

        </div>
    )
}