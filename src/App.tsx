import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import Invite from "./pages/Invite";
import BeautifulWorld from "./pages/projects_pages/BeautifulWorld";
import SFsGUI from "./pages/projects_pages/SFsGUI";
import MDEStudioTheme from "./pages/projects_pages/MDEStudioTheme";
import DCDiscAddon from "./pages/projects_pages/DCDiscAddon";
import CITATTFP from "./pages/projects_pages/CITATTFP";
import DungeonsContent from "./pages/projects_pages/DungeonsContent";
import BloodCrystal from "./pages/projects_pages/BloodCrystal";
import ACOFI from "./pages/projects_pages/ACOFI";
import SkylightModding from "./pages/studios_pages/SkylightModding";
import MDEStudio from "./pages/studios_pages/MDEStudio";
import Model from "./pages/services_pages/Model";
import StandartSkin from "./pages/services_pages/StandartSkin";
import SkinRew from "./pages/services_pages/SkinRew";
import MCLogo from "./pages/services_pages/MCLogo";
import CharactersDesign from "./pages/services_pages/CharactersDesign";
import Cape from "./pages/services_pages/Cape";
import Texture from "./pages/services_pages/Texture";
import Totem from "./pages/services_pages/Totem";
import HarpicCore from "./pages/projects_pages/HarpicCore";

export default function App() {
    let langCode = localStorage.getItem("lang") === "null"
    || localStorage.getItem("lang") === "undefined"
    || localStorage.getItem("lang") === null
    || localStorage.getItem("lang") === undefined
        ? "ru"
        : localStorage.getItem("lang")

    localStorage.setItem("lang", String(langCode))

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/invite" element={<Invite/>}/>

            <Route path="/studios/skylight-modding" element={<SkylightModding/>}/>
            <Route path="/studios/mdestudio" element={<MDEStudio/>}/>

            <Route path="/projects/beautiful-world" element={<BeautifulWorld/>}/>
            <Route path="/projects/sfs-gui" element={<SFsGUI/>}/>
            <Route path="/projects/mdestudio-theme" element={<MDEStudioTheme/>}/>
            <Route path="/projects/dungeons-content-music-disc" element={<DCDiscAddon/>}/>
            <Route path="/projects/harpiccore" element={<HarpicCore/>}/>
            <Route path="/projects/citattfp" element={<CITATTFP/>}/>
            <Route path="/projects/dungeons-content" element={<DungeonsContent/>}/>
            <Route path="/projects/blood-crystal" element={<BloodCrystal/>}/>
            <Route path="/projects/acofi" element={<ACOFI/>}/>

            <Route path="/services/model" element={<Model/>}/>
            <Route path="/services/standart-skin" element={<StandartSkin/>}/>
            <Route path="/services/rew-skin" element={<SkinRew/>}/>
            <Route path="/services/logo" element={<MCLogo/>}/>
            <Route path="/services/characters-design" element={<CharactersDesign/>}/>
            <Route path="/services/cape" element={<Cape/>}/>
            <Route path="/services/texture" element={<Texture/>}/>
            <Route path="/services/totem" element={<Totem/>}/>
        </Routes>
    )
}

