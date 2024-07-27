import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import {translate} from "../scripts";
import {services} from '../data/services'

import '../css/services_page.css';
import '../css/styles.css';

export default function ProjectsPage() {
    React.useEffect(() => {
        document.title = translate("title.services-page");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"services-page"}>
                <h2 className={'services-chap'} key={1}>{translate("services-page.title")} <a>SkylightProduction</a></h2>
                <div className="message">
                    <p>{translate("services-page.message.one-p")}</p>
                    <p>{translate("services-page.message.second-p")[0]} <u><i><b>{translate("services-page.message.second-p")[1]}</b></i></u> {translate("services-page.message.second-p")[2]}</p>
                </div>
                <ul className="services-list">
                    <ServiceCard service={services.standart_skin}/>
                    <ServiceCard service={services.rew_skin}/>
                    <ServiceCard service={services.logo}/>
                    <ServiceCard service={services.model}/>
                    <ServiceCard service={services.cape}/>
                    <ServiceCard service={services.texture}/>
                    <ServiceCard service={services.totem}/>
                    <ServiceCard service={services.characters_design}/>
                </ul>
            </main>

            <Footer/>

        </div>
    )
}