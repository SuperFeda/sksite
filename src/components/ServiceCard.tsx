import React from "react";

import {IService} from "../models";
import {translate} from "../scripts";


interface props { service: IService }

export default function ProjectCard(service: props) {
    let classList = service.service.nprice ? "service-price not-static" : "service-price"

    return (
        <li className="service"><a href={service.service.url}>
            <img src={service.service.img} className="service-icon" alt="service_icon"/>
            <div className="service-content">
                <h3 className="service-name">{translate(service.service.name)}</h3>
                <p className={classList}>{translate(service.service.price)}</p>
            </div>
        </a></li>
    )
}
