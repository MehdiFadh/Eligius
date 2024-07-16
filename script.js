document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        errorMessage.textContent = '';
        alert('Connexion réussie !');
        window.location.href = 'home.html';  // Redirection vers la page d'accueil après connexion
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});