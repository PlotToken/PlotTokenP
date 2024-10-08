let tokens = 0;

function farmTokens() {
    const earned = Math.floor(Math.random() * 10) + 1; // Generar entre 1 y 10 tokens
    tokens += earned;
    document.getElementById('token-display').innerText = `Tokens: ${tokens}`;
    alert(`Has farmeado ${earned} tokens Plot 💩`);
}
