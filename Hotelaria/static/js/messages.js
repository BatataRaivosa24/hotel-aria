const alerts = document.querySelectorAll('.alert');

alerts.forEach(alert => {
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(50px)';
        setTimeout(() => {
            alert.remove();
        }, 500); 
    }, 3500); 
});
