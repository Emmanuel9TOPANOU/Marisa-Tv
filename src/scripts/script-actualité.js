// Sélection des conteneurs principaux
        const newsList = document.getElementById('news-list');
        const newsDetail = document.getElementById('news-detail');

        // Sélection des éléments à remplir dans la page détail
        const dTitle = document.getElementById('detail-title');
        const dCategory = document.getElementById('detail-category');
        const dDate = document.getElementById('detail-date');
        const dImage = document.getElementById('detail-image');
        const dIntro = document.getElementById('detail-intro');

        /**
         * Fonction appelée lors du clic sur une carte
         * @param {HTMLElement} card - L'élément cliqué
         */
        function openDetail(card) {
            // 1. Récupération des données stockées dans les attributs 'data-'
            const title = card.getAttribute('data-title');
            const category = card.getAttribute('data-category');
            const date = card.getAttribute('data-date');
            const image = card.getAttribute('data-image');
            const intro = card.getAttribute('data-intro');

            // 2. Injection des données dans le HTML de la page détail
            dTitle.innerText = title;
            dCategory.innerText = category;
            dDate.innerText = date;
            dImage.src = image;
            dIntro.innerText = intro; // On met le résumé en guise d'intro

            // 3. Transition : On cache la liste et on affiche le détail
            newsList.classList.add('hidden');
            newsDetail.classList.remove('hidden');

            // 4. On remonte tout en haut de la page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /**
         * Fonction pour le bouton "Retour"
         */
        function closeDetail() {
            // 1. On cache le détail et on réaffiche la liste
            newsDetail.classList.add('hidden');
            newsList.classList.remove('hidden');

            // 2. On remonte en haut
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }