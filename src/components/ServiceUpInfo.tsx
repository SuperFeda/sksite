import React from "react";
import {IService} from "../models";
import {translate} from "../scripts";

interface props { service: IService }

export default function ProjectCard(service: props) {
    let classList = service.service.nprice ? "service-price-sp not-static" : "service-price-sp"

    return (
        <div className="service-info">
            <img src={service.service.img} className="service-img-sp" height="400" alt="service-img"/>
            <div className="service-content">
                <h2 className="service-name-sp">{translate(service.service.name)}</h2>
                <p className="service-desc-sp">{translate(service.service.description)}</p>
                <p className={classList}>{translate(service.service.price)}</p>
                <a className="button" href={service.service.pay_url}><span className="material-symbols-outlined buy-icon">shopping_cart</span>{translate("service-info-page.button.pay")}</a>
            </div>
        </div>
    )
}
