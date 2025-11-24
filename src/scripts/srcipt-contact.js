document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.bg-white > button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Trouver le div de réponse (juste après le bouton)
                const answerDiv = button.nextElementSibling;
                // Trouver l'icône de flèche (le premier enfant du bouton)
                const arrowSpan = button.querySelector('span:first-child');

                // Basculer la visibilité (en ajoutant/retirant la classe 'hidden')
                answerDiv.classList.toggle('hidden');

                // Changer l'icône de flèche
                if (answerDiv.classList.contains('hidden')) {
                    // C'est masqué, montrer l'icône "fermé"
                    arrowSpan.textContent = '►';
                } else {
                    // C'est visible, montrer l'icône "ouvert"
                    arrowSpan.textContent = '▼';
                }
            });
        });
    });