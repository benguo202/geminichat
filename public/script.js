document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('chat-input').value;
    if (input) {
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ message: input }),
        })
        .then(response => response.json())
        .then(data => {
            const chatBox = document.getElementById('chat-box');
            const userMessage = document.createElement('div');
            userMessage.textContent = `You: ${input}`;
            chatBox.appendChild(userMessage);

            const botMessage = document.createElement('div');
            botMessage.textContent = `Bot: ${data.reply}`;
            chatBox.appendChild(botMessage);

            document.getElementById('chat-input').value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    }
});
