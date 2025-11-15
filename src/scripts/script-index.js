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





// 1. Récupération du bouton
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Distance à partir de laquelle le bouton doit apparaître (ex: 300 pixels)
const scrollThreshold = 300;

// 2. Fonction pour gérer l'affichage du bouton au défilement
function toggleScrollToTopButton() {
    // Si la position de défilement verticale (scrollY) dépasse le seuil
    if (window.scrollY > scrollThreshold) {
        // Rendre le bouton visible (enlève opacity-0 et pointer-events-none)
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100');
    } else {
        // Cacher le bouton
        scrollToTopBtn.classList.remove('opacity-100');
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
}

// 3. Fonction pour le défilement vers le haut
function scrollToTop() {
    // Utilise la méthode native du navigateur pour un défilement fluide
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 4. Écouteurs d'événements

// Écoute l'événement de défilement sur la fenêtre pour montrer/cacher le bouton
window.addEventListener('scroll', toggleScrollToTopButton);

// Écoute le clic sur le bouton pour déclencher le retour en haut
scrollToTopBtn.addEventListener('click', scrollToTop);

// Initialise l'état du bouton au chargement de la page
document.addEventListener('DOMContentLoaded', toggleScrollToTopButton);




  const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    hamburgerBtn.addEventListener('click', () => {
        mobileSidebar.style.right = '0';
    });

    closeSidebar.addEventListener('click', () => {
        mobileSidebar.style.right = '-100%';
    });

    // Optionnel: fermer la sidebar en cliquant en dehors
    window.addEventListener('click', (e) => {
        if (!mobileSidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileSidebar.style.right = '-100%';
        }
    });