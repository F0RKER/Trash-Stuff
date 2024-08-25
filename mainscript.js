(function() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '10px';
    container.style.right = '10px';
    container.style.padding = '10px';
    container.style.backgroundColor = 'lightblue';
    container.style.border = '1px solid #000';
    container.style.borderRadius = '5px';
    container.style.zIndex = '1000';
    container.style.fontFamily = 'Arial, sans-serif';

    const message = document.createElement('p');
    message.textContent = 'Hello from the fetched script!';
    message.style.margin = '0';
    message.style.fontSize = '16px';
    container.appendChild(message);

    document.body.appendChild(container);
})();
