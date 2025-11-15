// ==========================
// Initialisation AOS
// ==========================
AOS.init({
    duration: 1000, // durée de l'animation
    once: true      // animation une seule fois
});

// ==========================
// Gestion du lien actif dans le menu
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const activeClasses = "bg-[#FFDE11] text-[#094154] font-bold py-2 px-4 rounded-sm transition-colors duration-200";
    const inactiveClasses = "py-2 px-4 transition-colors duration-200 hover:text-[#FFDE11]";

    // Récupère le nom du fichier actuel (ex: "grille.html"), par défaut 'index.html'
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Sélectionne tous les liens du menu
    const navLinks = document.querySelectorAll('#main-nav-links a');

    navLinks.forEach(link => {
        // Nom du fichier du href du lien
        const linkPath = link.href.split('/').pop() || 'index.html';

        // Applique d'abord le style inactif
        link.className = inactiveClasses;

        // Si le lien correspond à la page actuelle, applique le style actif
        if (linkPath.toLowerCase() === currentPath.toLowerCase() || (currentPath === '' && linkPath === 'index.html')) {
            link.className = activeClasses;
        }
    });
});
