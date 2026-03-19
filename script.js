async function fetchProfile() {
    try {
        const response = await fetch('https://api.github.com/users/Alexandre-Ch');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do GitHub');
        }
        const data = await response.json();
        
        // Atualizar avatar
        document.querySelector('.profile-avatar').src = data.avatar_url;
        
        // Atualizar nome
        document.querySelector('.profile-name').textContent = data.name || data.login;
        
        // Atualizar username
        document.querySelector('.profile-username').textContent = '@' + data.login;
        
        // Atualizar números
        const numbersItems = document.querySelectorAll('.numbers-item');
        numbersItems[0].innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
        numbersItems[1].innerHTML = `<h4>Seguidores</h4>${data.followers}`;
        numbersItems[2].innerHTML = `<h4>Seguindo</h4>${data.following}`;
        
        // Atualizar link
        document.querySelector('.profile-link').href = data.html_url;
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao carregar dados do perfil. Verifique o console para mais detalhes.');
    }
}

fetchProfile();