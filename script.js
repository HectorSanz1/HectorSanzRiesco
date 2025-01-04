// Función para alternar entre modo oscuro y claro
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica si el usuario ya ha seleccionado un tema
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '🌕';  // Modo oscuro activado
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Cambia el ícono del botón
    if (body.classList.contains('dark')) {
        toggleButton.textContent = '🌕';  // Modo oscuro activado
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙';  // Modo claro activado
        localStorage.removeItem('theme');
    }
});
