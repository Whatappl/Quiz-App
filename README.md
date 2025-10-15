# Fearless Quiz App

**Fearless Quiz App** is an interactive educational quiz application that helps users learn across multiple subjects including Science, Math, History, Geography, English, and General Knowledge.  

---

## Features

- Multiple-choice questions from **all subjects**.
- Randomized questions and options.
- Highlights **correct answers in green** and **wrong answers in red**.
- Tracks user score and **total score persists** even after refresh.
- Automatically fetches new questions when quiz ends.
- Lightweight and browser-friendly.

---

## Demo

Open the `index.html` file in your browser to start playing the quiz.  

---

## How It Works

1. The app fetches **10 random questions** from a random category using [Open Trivia Database](https://opentdb.com/).
2. Options for each question are **randomized**.
3. Users click an option:
   - Correct → button turns **green**
   - Wrong → button turns **red**
4. After a short delay, the next question is displayed.
5. The **progress bar** shows quiz progression.
6. **Total score** updates and is saved in localStorage.

---

## Installation

1. Clone the repository:
   ```bash
   https://github.com/Whatappl/Quiz-App
