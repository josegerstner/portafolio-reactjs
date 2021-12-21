import './Tabs.css';
import { CustomLink } from "./CustomLink";

export function Tabs() {
    return(
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <CustomLink to="/">Education</CustomLink>
            </li>
            <li className="nav-item">
                <CustomLink to="jobs">Jobs</CustomLink>
            </li>
            <li className="nav-item">
                <CustomLink to="projects">Projects</CustomLink>
            </li>
            <li className="nav-item">
                <CustomLink to="technologies">Technologies</CustomLink>
            </li>
        </ul>
    );
}