import { CustomLink } from "./CustomLink";

export function Tabs() {
    return(
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <CustomLink to="/">Description</CustomLink>
            </li>
            <li className="nav-item">
                <CustomLink to="jobs">Jobs</CustomLink>
            </li>
            <li className="nav-item">
                <CustomLink to="education">Education</CustomLink>
            </li>
        </ul>
    );
}