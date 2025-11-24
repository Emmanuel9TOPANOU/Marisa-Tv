// ===================================
// 1. Initialisation des Bibliothèques
// ===================================
AOS.init({
    duration: 1000, // durée de l'animation
    once: true      // animation une seule fois
});


// ===================================
// 2. Déclaration des Variables Globales (Bouton et Sidebar)
// ===================================

// Bouton de défilement vers le haut
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Sidebar et Hamburger
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
const closeSidebar = document.getElementById('closeSidebar');


// ===================================
// 3. Fonctions
// ===================================

// Fonction pour le défilement vers le haut
function scrollToTop() {
    // Utilise la méthode native du navigateur pour un défilement fluide
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fonction pour montrer/cacher le bouton "Retour en haut"
function toggleScrollToTopButton() {
    const scrollThreshold = 300; // Seuil de défilement (300 pixels)

    if (window.scrollY > scrollThreshold) {
        // L'utilisateur a suffisamment défilé : Rendre le bouton visible
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100'); 
    } else {
        // L'utilisateur est en haut de page : Cacher le bouton
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.remove('opacity-100');
    }
}


// ===================================
// 4. Écouteurs d'Événements (Exécution après le chargement du DOM)
// ===================================

document.addEventListener("DOMContentLoaded", () => {
    // --- Gestion du lien actif dans le menu ---
    const activeClasses = "bg-[#FFDE11] text-[#094154] font-bold py-2 px-4 rounded-sm transition-colors duration-200";
    const inactiveClasses = "py-2 px-4 transition-colors duration-200 hover:text-[#FFDE11]";

    // Récupère le nom du fichier actuel
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Sélectionne tous les liens du menu
    const navLinks = document.querySelectorAll('#main-nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.href.split('/').pop() || 'index.html';
        
        // Applique d'abord le style inactif
        link.className = inactiveClasses;

        // Si le lien correspond à la page actuelle, applique le style actif
        if (linkPath.toLowerCase() === currentPath.toLowerCase() || (currentPath === '' && linkPath === 'index.html')) {
            link.className = activeClasses;
        }
    });

    // --- Initialisation du bouton "Retour en haut" au chargement ---
    // (Ceci appelle la fonction pour cacher/montrer le bouton immédiatement si on recharge la page loin du haut)
    toggleScrollToTopButton();
});


// --- Gestion du bouton "Retour en haut" (Défilement et Clic) ---

// Écoute l'événement de défilement sur la fenêtre pour montrer/cacher le bouton
window.addEventListener('scroll', toggleScrollToTopButton);

// Écoute le clic sur le bouton pour déclencher le retour en haut
// (Nécessite que scrollToTopBtn soit défini plus haut)
scrollToTopBtn.addEventListener('click', scrollToTop);


// --- Gestion de la Sidebar Mobile ---

hamburgerBtn.addEventListener('click', () => {
    mobileSidebar.style.right = '0';
});

closeSidebar.addEventListener('click', () => {
    mobileSidebar.style.right = '-100%';
});

// Optionnel: fermer la sidebar en cliquant en dehors
window.addEventListener('click', (e) => {
    if (mobileSidebar && hamburgerBtn && 
        !mobileSidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileSidebar.style.right = '-100%';
    }
});