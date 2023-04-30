if (screen.availHeight > screen.availWidth) {
    const landNav = document.getElementById("navigation");
    landNav.remove();
    document.write('<header id="portraitNav">');
    document.write('            <button id="navButton" type="button">');
    document.write(
        '                <i class="material-icons">menu</i></button'
    );
    document.write("            ><img");
    document.write('                src="../favicon_io/apple-touch-icon.png"');
    document.write('                alt=""');
    document.write('                class="portraitLogo"');
    document.write("            />");
    document.write('            <h1 class="name">Deril Jose</h1>');
    document.write("        </header>");
    document.write('        <nav class="nav">');
    document.write('            <div class="navLinks">');
    document.write(
        '                <a href="../index/index.html" class="navLink"'
    );
    document.write(
        '                    ><i class="material-icons">home</i> Home</a'
    );
    document.write(
        '                ><a href="../journey/journey.html" class="navLink"'
    );
    document.write(
        '                    ><i class="material-icons">route</i>Journey</a'
    );
    document.write(
        '                ><a href="../project/project.html" class="navLink"'
    );
    document.write(
        '                    ><i class="material-icons">dashboard</i>Projects</a'
    );
    document.write(
        '                ><a href="../social/social.html" class="navLink"'
    );
    document.write(
        '                    ><i class="material-icons">person</i>Socials</a'
    );
    document.write("                >");
    document.write("            </div>");
    document.write('            <div class="navOverlay"></div>');
    document.write("        </nav>");

    document.addEventListener("DOMContentLoaded", () => {
        const nav = document.querySelector(".nav");
        document.querySelector("#navButton").addEventListener("click", () => {
            nav.classList.add("navOpen");
        });
        document.querySelector(".navOverlay").addEventListener("click", () => {
            nav.classList.remove("navOpen");
        });
    });
}
