import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <div>
            <Link
                className={`nav-link ${match && " active"}`}
                aria-current="page"
                to={to}
                {...props}
            >
            {children}
            </Link>
        </div>
    );
}