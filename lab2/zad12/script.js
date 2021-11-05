const colors = document.querySelectorAll('.color');
colors.forEach(c => c.addEventListener('click', color));
function color() {
    let color =  window.getComputedStyle(document.getElementById(this.id)).backgroundColor;
    document.documentElement.style.setProperty("--current", color);
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}

const sizes = document.querySelectorAll('.size');
sizes.forEach(c => c.addEventListener('click', size));
function size() {
    sizes.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
