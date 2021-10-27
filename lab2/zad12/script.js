const colors = document.querySelectorAll('.color');
colors.forEach(c => c.addEventListener('click', color));
function color() {
    let color =  window.getComputedStyle(document.getElementById(this.id)).backgroundColor;
    let back = document.getElementById("bgcolor");
    back.style.backgroundImage = 'linear-gradient(45deg,' + color+ ', ' + color +')';
    colors.forEach(c => c.classList.remove('active'));
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}