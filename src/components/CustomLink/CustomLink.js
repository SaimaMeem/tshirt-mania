import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={
              { color: match ? "orange" : "black",
              fontWeight: match ? "bold" : "normal", 
              fontSize: match ? "1.2em" : "1em" } 
            
              }
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
};

export default CustomLink;
