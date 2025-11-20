
    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-button');
        const cards = document.querySelectorAll('.category-card');
        const gridContainer = document.getElementById('filter-grid');
        const programCountElement = document.getElementById('program-count');
        
        // Classes pour le conteneur principal
        const gridClasses = ['grid', 'gap-6', 'sm:grid-cols-2', 'lg:grid-cols-3'];
        const flexClasses = ['flex', 'flex-wrap', 'justify-start', 'gap-6']; // Utilisation de gap-6 pour espacement uniforme

        // Classes de largeur pour les cartes en mode filtré (assure 3 par ligne sur grand écran)
        // Les cartes utilisent w-[calc(33.333%-16px)] pour compenser le gap de 6 (24px) entre elles.
        // Puisque nous utilisons 'gap-6' directement sur le conteneur flex, nous simplifions la largeur.
        const filteredCardWidthClasses = ['w-full', 'sm:w-[calc(50%-12px)]', 'lg:w-[calc(33.333%-16px)]'];

        // Fonction pour mettre à jour le style du bouton actif
        function setActiveButton(activeButton) {
            filterButtons.forEach(button => {
                // Style inactif
                button.classList.remove('bg-yellow-300', 'text-gray-900', 'shadow-md');
                button.classList.add('bg-white', 'text-gray-800', 'border', 'border-gray-200', 'hover:bg-gray-100');
            });

            // Style actif
            activeButton.classList.remove('bg-white', 'text-gray-800', 'border', 'border-gray-200', 'hover:bg-gray-100');
            activeButton.classList.add('bg-yellow-300', 'text-gray-900', 'shadow-md');
        }

        // Fonction principale de filtrage
        function filterPrograms(category) {
            let visibleCount = 0;
            
            // 1. Gérer le conteneur (Grid vs. Flex)
            // Retirer toutes les classes de disposition avant d'en ajouter de nouvelles
            gridContainer.classList.remove(...gridClasses, ...flexClasses);
            
            if (category === 'all') {
                gridContainer.classList.add(...gridClasses);
            } else {
                gridContainer.classList.add(...flexClasses);
            }
            
            // 2. Filtrer les cartes et appliquer les classes de largeur
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Retirer les anciennes classes de largeur spécifiques au filtre
                card.classList.remove(...filteredCardWidthClasses, 'hidden'); 
                
                if (category === 'all' || cardCategory === category) {
                    // Afficher la carte
                    card.classList.remove('hidden');

                    if (category !== 'all') {
                        // Appliquer les classes de largeur pour l'alignement côte à côte (3 par ligne sur grand écran)
                        card.classList.add(...filteredCardWidthClasses);
                    }
                    visibleCount++;

                } else {
                    // Masquer la carte
                    card.classList.add('hidden');
                }
            });
            
            // 3. Mise à jour du compteur
            programCountElement.textContent = `${visibleCount} émission${visibleCount > 1 ? 's' : ''}`;
        }
        
        // Écouteur d'événement sur chaque bouton
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); 
                const category = e.currentTarget.getAttribute('data-category');
                setActiveButton(e.currentTarget);
                filterPrograms(category);
            });
        });

        // Initialisation : s'assurer que le bouton "Tous" est actif et que le compteur est correct
        const allButton = document.querySelector('[data-category="all"]');
        setActiveButton(allButton);
        filterPrograms('all');
    });