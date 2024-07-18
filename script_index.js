document.getElementById('butTheme').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Assurez-vous que la variable users est définie et contient des utilisateurs
    if (!users || users.length === 0) {
        errorMessage.textContent = 'Aucun utilisateur n\'est défini.';
        return;
    }
    
    const user = users.find(u => u.username === username && u.password === password);
    
    // Vérifiez si l'utilisateur existe avant d'accéder à ses propriétés
    if (user) {
        
        errorMessage.textContent = '';
        alert('Connexion réussie ! Bonjour ' + user.username);
        localStorage.setItem('isAuthenticated', 'true');
        
        // Redirection en fonction de l'utilisateur connecté
        if (user.username === "user1") {
            window.location.href = 'home_user1.html';  // Redirection vers la page d'accueil pour user1
        } else if (user.username === "nissaf") {
            window.location.href = 'home_user2.html';  // Redirection vers la page d'accueil pour user2
        } 
        else {
            window.location.href = 'https://mehdifadh.github.io/Portfolio/';  // Redirection vers la page d'accueil pour user2
        }
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});
});