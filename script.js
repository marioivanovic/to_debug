const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    // Bug 6: Erreur de syntaxe dans l'addEventListener
    item.addEventListener('click', function ()) {
        // Bug 7: Utilisation de innerHTML au lieu de textContent
        const price = item.querySelector('.price').innerHTML;

        // Bug 8: Tentative d'accès à une propriété undefined
        const dishName = item.querySelector('h2').innerText.name;

        // Bug 9: Console.log au lieu de console.error pour les erreurs
        console.log(`Erreur: ${dishName} non trouvé`);

        // Bug 10: Mauvaise gestion des erreurs
        alert(Le plat ${ dishName } coûte ${ price });
    });
});