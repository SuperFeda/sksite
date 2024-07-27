import React from "react";
import {IProject} from "../models";
import {translate} from "../scripts";

interface props { product: IProject }

export default function ProjectCard(project: props) {
    return (
        <a className="mod" href={project.product.url}>
            <img src={project.product.img} className="mini-img" alt="mod_logo"/>
            <div className="content">
                <h3 className="card-title">{project.product.name}</h3>
                <p className="card-desc">{translate(project.product.description)}</p>
            </div>
        </a>
    )
}
