function changeStyle() {
    const text = document.getElementById('new-text').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('font-size').value;

    const outputDiv = document.getElementById('text-section');
    outputDiv.textContent = text;
    outputDiv.style.color = color;
    outputDiv.style.fontSize = size + 'px';
}