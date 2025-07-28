function searchProfiles() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const profiles = document.getElementsByClassName('profile');
    
    Array.from(profiles).forEach(profile => {
        const name = profile.querySelector('h3').textContent.toLowerCase();
        if (name.includes(input)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
}