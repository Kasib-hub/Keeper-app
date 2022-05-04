import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &#169; {currentYear}</p>
        </footer>
    );
}

export default Footer;