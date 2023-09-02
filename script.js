document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkSections() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const offset = 100; 

            if (rect.top <= window.innerHeight - offset && rect.bottom >= 0) {
                section.style.opacity = 1;
                section.style.visibility = "visible";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 1s, transform 2s"; 
            } else {
                section.style.opacity = 0;
                section.style.visibility = "hidden";
                section.style.transform = "translateY(50px)"; 
                section.style.transition = "none"; 
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    window.addEventListener("resize", checkSections);

    checkSections(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const perfilImg = document.getElementById("perfil-img");
    const imagenes = ["./multimedia/perfil1.png", "./multimedia/perfil2.png", "./multimedia/perfil3.png"];
    let imagenActual = 0;

    function cambiarImagen() {
        perfilImg.style.opacity = 0;
        setTimeout(function () {

            perfilImg.src = imagenes[imagenActual];
            imagenActual = (imagenActual + 1) % imagenes.length;

            perfilImg.style.opacity = 1;
        }, 500); 
    }



    setInterval(cambiarImagen, 3000);
});