import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from "../components/ProjectCard";
import {projects} from '../data/projects'
import {translate} from "../scripts";

import '../css/projects_page.css';
import '../css/styles.css';

export default function ProjectsPage() {
    React.useEffect(() => {
        document.title = translate("title.projects-page");
    }, []);

    return (
        <div id={'box'}>

            <Header/>

            <main id={"projects-main"}>

                <div className="circle1 circle"></div>
                <div className="circle2 circle"></div>

                <h2 className={'project-chap'}>SkylightModding <a>X</a> MDE Studio</h2>
                <div className="mod-list">
                    <ProjectCard product={projects.beautiful_world}/>
                </div>

                <h2 className={'project-chap'}>SkylightModding</h2>
                <div className="mod-list">
                    <ProjectCard product={projects.acofi}/>
                    <ProjectCard product={projects.ctattfp}/>
                    <ProjectCard product={projects.blood_crystal}/>
                    <ProjectCard product={projects.sfs_gui}/>
                </div>

                <h2 className={'project-chap'}>MDE Studio</h2>
                <div className="mod-list">
                    <ProjectCard product={projects.dungeons_content}/>
                    <ProjectCard product={projects.hapriccore}/>
                    <ProjectCard product={projects.dc_music_discs}/>
                    <ProjectCard product={projects.mdetheme}/>
                </div>
            </main>

            <Footer/>

        </div>
    );
}
