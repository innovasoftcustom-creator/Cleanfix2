// Funcionalidad del menú responsive
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Crear overlay para cerrar el menú
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Función para abrir/cerrar menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Funcionalidad del acordeón de servicios en la página principal
document.addEventListener('DOMContentLoaded', () => {
    const serviceButtons = document.querySelectorAll('.service-title.accordion-button');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isOpen = content.classList.contains('show');
            
            // Cerrar todos los demás acordeones
            document.querySelectorAll('.service-content.accordion-content').forEach(item => {
                item.classList.remove('show');
                item.previousElementSibling.classList.remove('active');
            });
            
            // Si no estaba abierto, abrir el actual
            if (!isOpen) {
                content.classList.add('show');
                button.classList.add('active');
            }
        });
    });
});document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});