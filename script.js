const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function ()) {

        const price = item.querySelector('.price').innerHTML;

        const dishName = item.querySelector('h2').innerText.name;

        console.log(`Erreur: ${dishName} non trouvé`);

        alert(Le plat ${ dishName } coûte ${ price });
    });
});