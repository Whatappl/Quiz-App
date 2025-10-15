<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fearless Quiz Repo - README</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f7f8fa;
    color: #222;
    margin: 0;
    padding: 0;
  }

  header {
    background: #0ab4ff;
    color: white;
    padding: 30px 20px;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid white;
    display: inline-block;
  }

  @keyframes blinkCaret {
    0%, 100% { border-color: transparent; }
    50% { border-color: white; }
  }

  main {
    max-width: 900px;
    margin: 30px auto;
    padding: 0 20px;
  }

  h2 {
    color: #0ab4ff;
    border-bottom: 2px solid #0ab4ff;
    padding-bottom: 5px;
  }

  p, li {
    line-height: 1.6;
    font-size: 1rem;
  }

  ul {
    list-style: square inside;
    margin-left: 0;
    padding-left: 0;
  }

  code {
    background: #eee;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: monospace;
  }

  a {
    color: #0ab4ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
</head>
<body>

<header>
  <h1 id="typing"></h1>
</header>

<main>
  <section>
    <h2>Overview</h2>
    <p>The <strong>Fearless Quiz Repo</strong> is an interactive educational quiz platform that allows users to test their knowledge across multiple subjects including Science, Math, History, Geography, English, and General Knowledge.</p>
  </section>

  <section>
    <h2>Features</h2>
    <ul>
      <li>Randomized questions and options from multiple subjects.</li>
      <li>Correct answers highlighted in green and wrong answers in red.</li>
      <li>Tracks user score and total score persists even after refresh.</li>
      <li>Automatically fetches new questions after each quiz.</li>
      <li>Mobile-friendly and browser-ready.</li>
    </ul>
  </section>

  <section>
    <h2>Installation</h2>
    <p>1. Clone the repository:</p>
    <code>git clone https://github.com/yourusername/fearless-quiz-repo.git</code>
    <p>2. Open <code>index.html</code> in your browser. No dependencies required!</p>
  </section>

  <section>
    <h2>License</h2>
    <p>Free to use and modify. Made with ❤️ by <strong>Fearless</strong>.</p>
  </section>
</main>

<script>
  const message = "Welcome To Fearless Quiz Repo";
  const typingEl = document.getElementById("typing");
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typingEl.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // typing speed
    } else {
      typingEl.style.borderRight = "none"; // remove caret after typing
    }
  }

  typeWriter();
</script>

</body>
</html>
