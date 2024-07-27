import React from 'react';
import {Link} from "react-router-dom";
import {translate} from "../scripts";

export default function Header() {
    const [lang, setLang] = React.useState(String(localStorage.getItem('lang')))

    React.useEffect((): void => {
        localStorage.setItem('lang', lang)
    }, [lang])

    function changeLangListVisibility(): void {
        let opt_list = document.getElementById('opt-list')

        if (!opt_list) { return }

        opt_list.style.display === 'grid' ? opt_list.style.display = 'none' : opt_list.style.display = 'grid'
    }

    function toggleAdapHeader(): void {
        let adap_header = document.getElementById('adap-site-header')
        if (adap_header) { adap_header.classList.toggle("active-header") }
    }

    function changeLang(langId: string): void {
        setLang(langId)
        window.location.reload()
    }

    return (
        <header className="site-header">
            <div id="adap-site-header">
                <ul id="adap-nav-links">
                    <Link to={"/home"}><b>{translate('nav_bar.home_page')}</b></Link>
                    <Link to={"/projects"}><b>{translate("nav_bar.projects_page")}</b></Link>
                    <Link to={"/services"}><b>{translate("nav_bar.services_page")}</b></Link>
                </ul>
            </div>
            <a href="/home"><img style={{height: '2.5rem', width: '6.5rem'}} src={'/img/png/sk_logo_miniature.png'} alt="sk_logo"/></a>
            <nav id="nav-bar">
                <ul id="nav-links">
                    <Link to={"/home"}><b>{translate('nav_bar.home_page')}</b></Link>
                    <Link to={"/projects"}><b>{translate("nav_bar.projects_page")}</b></Link>
                    <Link to={"/services"}><b>{translate("nav_bar.services_page")}</b></Link>
                </ul>
            </nav>
            <div id="header-buttons">
                <button id="burger-button" onClick={() => toggleAdapHeader()}><span className="material-symbols-outlined">menu</span></button>
                <div className="select-menu" onClick={() => changeLangListVisibility()}>
                    <label><span className="material-symbols-outlined lang-icon">translate</span><a id={"lang-text"}>Lang</a></label>
                    <div className="options-list" id='opt-list'>
                        <option value="ru" className="select-option" onClick={() => changeLang('ru')}>RU</option>
                        <option value="en" className="select-option" onClick={() => changeLang('en')}>EN</option>
                    </div>
                </div>
            </div>
        </header>
    );
}
