import React from "react"
import {translate} from "../scripts";

export default function Footer() {
    return (
        <footer>
            <a href="/home"><img height="50" width="280" id="footer-img" src={"/img/png/SkylightProduction.png"} alt="sk_logo"/></a>
            <ul className="footer-pillar">
                <h3>{translate("footer.url-column-name")}</h3>
                <li className="footer-param"><a href="https://github.com/SkylightProduction">GitHub</a></li>
                <li className="footer-param"><a href="https://modrinth.com/organization/SkylightProduction">Modrinth</a></li>
                {/*<li className="footer-param"><a href="#">YouTube</a></li>*/}
                <li className="footer-param"><a href="https://www.donationalerts.com/r/skylightproduction_">DonationAlerts</a></li>
            </ul>
            <ul className="footer-pillar">
                <h3>{translate("footer.contacts-column-name")}</h3>
                <li className="first-column-param"><span id="mail" onClick={()=>navigator.clipboard.writeText('skylightproduction22@gmail.com')}>skylightproduction22@gmail.com</span><span className="material-symbols-outlined">content_copy</span></li>
            </ul>
            <ul className="footer-pillar">
                <li><a className="button" href="/invite">{translate("footer.button.invite")}</a></li>
            </ul>
        </footer>
    );
}
