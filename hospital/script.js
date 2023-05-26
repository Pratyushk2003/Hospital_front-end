document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  const userInput = document.getElementById('user-input');
  form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userMessage = userInput.value;
        if (userMessage.trim() === '') {
          return;
        }

        userInput.value = '';
        appendMessage(userMessage, 'user');

        try {
          const response = await fetch('/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: userMessage })
          });

          const data = await response.json();
          const reply = data.reply;
          appendMessage(reply, 'bot');
        } catch (error) {
          console.error(error);
          appendMessage('Something went wrong', 'bot');
        }
      });
  function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
      }
