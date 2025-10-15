<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fearless Quiz App - Welcome</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f7f8fa;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid #0ab4ff;
  }

  /* Typing animation */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blinkCaret {
    0%, 100% { border-color: transparent }
    50% { border-color: #0ab4ff }
  }

  .typing {
    display: inline-block;
    width: 0;
    animation: typing 3s steps(40, end) forwards, blinkCaret 0.75s step-end infinite;
  }
</style>
</head>
<body>

<h1 id="typing"></h1>

<script>
  const messages = [
    "Welcome To Fearless Quiz Repo",
    "Learn and Test Your Knowledge!",
    "Made With ❤️ by Fearless"
  ];

  const typingEl = document.getElementById("typing");
  let messageIndex = 0;

  function typeMessage(message, callback) {
    typingEl.textContent = "";
    typingEl.style.width = "0";
    let i = 0;

    const interval = setInterval(() => {
      typingEl.textContent += message[i];
      i++;
      if (i === message.length) {
        clearInterval(interval);
        setTimeout(callback, 1500); // wait before next message
      }
    }, 100); // typing speed
  }

  function showNextMessage() {
    typeMessage(messages[messageIndex], () => {
      messageIndex = (messageIndex + 1) % messages.length;
      showNextMessage();
    });
  }

  showNextMessage();
</script>

</body>
</html>
