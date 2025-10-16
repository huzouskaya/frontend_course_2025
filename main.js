function changeGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement.textContent === 'Hello, World!') {
        greetingElement.textContent = 'Hello, FEFU!';
    } else {
        greetingElement.textContent = 'Hello, World!';
    }
}