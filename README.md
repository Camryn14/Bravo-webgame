# Bravo-webgame
Camryns Cis 376 web game
# Bravo Web Game

> A simple drag-and-drop web game built with HTML, CSS, JavaScript, jQuery, jQuery UI, and Bootstrap 5.

---

## Authorship

* **Author:** Camryn Williams
* **GitHub:** https://github.com/Camryn14
* **Date:** June 2026
* **Version:** 1.0

---

## User Story

* **As a** visitor to my GitHub profile,
* **I want** to play a simple drag-and-drop game,
* **So that** I can have fun while viewing my web development projects.

---

## Narrative

Guide the lion to the goal before time runs out! Enter your name (or play as a randomly generated guest), drag the lion across the game board, and drop it into the target to win. Your score is tracked during the session, and you can reset and play again whenever you'd like.

---

# About the App

### Wiki / Wireframe

* Wireframe: *(Add your Wiki link here)*
* GitHub Wiki: *(Add your Wiki link here)*

---

### Game Ideas Issue

* GitHub Issue #1: *(Paste your issue link here)*

---

### Directory Structure

```text
Bravo-WebGame/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── pages/
│
├── index.html
├── README.md
```

---

### Technologies Used

* HTML5
* CSS3
* JavaScript
* jQuery
* jQuery UI
* Bootstrap 5
* Bootstrap Icons
* Normalize.css
* Visual Studio Code
* Git
* GitHub
* GitHub Pages

---

### Favorite Code Snippet

```javascript
$("#winGame").droppable({
    drop: function (event, ui) {
        $(this)
            .css("background-color", "green")
            .find("p")
            .html("You Win!!");
    }
});
```

This code detects when the player successfully drags the lion into the goal area and displays the winning message.

---

### Validation & Accessibility

* HTML validated using the W3C Nu Validator.
* Lighthouse accessibility and performance report completed.
* Semantic HTML elements used where appropriate.
* Bootstrap components improve accessibility.

---

### Future Ideas (Sprint 99)

* Add multiple levels.
* Add obstacles and enemies.
* Add a timer and high-score leaderboard.
* Add sound effects and background music.
* Save scores using localStorage or a database.

---

## Live Demo

GitHub Pages: *(Paste your GitHub Pages link here.)*

---

## Repository

GitHub Repository: *(Paste your repository link here.)*

