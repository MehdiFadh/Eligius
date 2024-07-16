document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

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
        alert('Connexion réussie !');
        
        // Redirection en fonction de l'utilisateur connecté
        if (user.username === "user1") {
            window.location.href = 'home.html';  // Redirection vers la page d'accueil pour user1
        } else if (user.username === "user2") {
            window.location.href = 'home2.html';  // Redirection vers la page d'accueil pour user2
        } else {
            window.location.href = 'defaultHome.html';  // Redirection par défaut
        }
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});
