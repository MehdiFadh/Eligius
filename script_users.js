document.getElementById('butTheme').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

document.addEventListener('DOMContentLoaded', function () {
    // Vérifiez l'authentification sur les pages protégées
    if (window.location.pathname.endsWith('home_user1.html') && localStorage.getItem('isAuthenticated') !== 'true' || window.location.pathname.endsWith('home_user2.html') && localStorage.getItem('isAuthenticated') !== 'true' || window.location.pathname.endsWith('home_user3.html') && localStorage.getItem('isAuthenticated') !== 'true' ) {
    window.location.href = 'interdiction.html';  // Redirection vers la page de connexion si non authentifié
}

document.getElementById('butQuitter').addEventListener('click', function(){
    window.location.href = 'index.html';
})

// Ajout d'un écouteur d'événement pour le bouton de déconnexion
document.getElementById('butDeconnection').addEventListener('click', function () {
    // Action de déconnexion
    localStorage.removeItem('isAuthenticated');  // Supprimer l'indicateur d'authentification
    alert('Vous avez été déconnecté.');
    window.location.href = 'index.html';  // Redirection vers la page de connexion
})});