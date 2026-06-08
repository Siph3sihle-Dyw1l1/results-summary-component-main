# Frontend Mentor - Results Summary Component Solution

This is my solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- See the summary list dynamically populated using JavaScript and local JSON data
- See the average score calculated automatically from the data instead of being hardcoded

### Screenshot

![Screenshot of my solution](./assets/images/Screenshot%202026-06-08%20032931.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Siph3sihle-Dyw1l1/results-summary-component-main)
- Live Site URL: [Live Site](https://siph3sihle-dyw1l1.github.io/results-summary-component-main/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox layout
- Responsive design with media queries
- Vanilla JavaScript
- Local JSON data for dynamic content
- Custom local font using `@font-face`

### What I learned

This project was a great exercise in bringing together HTML, CSS, and JavaScript into one complete, polished component. Here are the key things I took away from building it.

**CSS Custom Properties** were one of the most useful things I used throughout this project. Instead of repeating the same color values like `hsl(252, 100%, 67%)` everywhere in the stylesheet, I defined all colors once inside `:root` and referenced them using `var(--variable-name)`. This made it very easy to keep the design consistent and would make future color changes effortless.

**CSS Gradients** were used in two places — the purple panel background uses a `linear-gradient` going from a light slate blue at the top to a darker royal blue at the bottom, and the score circle uses a second gradient that fades from a solid violet to fully transparent, which creates the dark glowing effect around the number.

**`@font-face`** taught me how to load a custom font from a local file rather than importing it from Google Fonts. Because the font file lives inside the project's assets folder, no external network request is needed, which keeps load times fast and means the font works even without internet access.

**Flexbox** was the main layout tool for this entire project. The two-panel card uses `display: flex` with `flex-direction: row` to place the purple result panel and the white summary panel side by side. Inside each panel, Flexbox is used again to center and stack the content vertically. `justify-content: space-between` on each summary row pushes the category name to the left and the score to the right automatically.

**Responsive Design with `@media` queries** made the component work on mobile screens. At 600px and below, the card switches from `flex-direction: row` to `flex-direction: column`, stacking the two panels on top of each other. The border radius, padding, and font sizes are all adjusted at that breakpoint as well to suit smaller screens.

**JavaScript DOM manipulation** was used to build the four summary rows dynamically from a data array instead of hardcoding them in the HTML. Using `document.createElement()` and `appendChild()` to build and insert elements taught me how JavaScript interacts with the live page structure. I also used a `for` loop to calculate the average score from the array and update the displayed number, meaning if the data ever changes, the score updates automatically without touching the HTML.

**Debugging JavaScript** was also a big part of this project. I encountered several bugs including using regular quotes instead of backticks for template literals, a typo in a variable name (`ccsClass` instead of `cssClass`), mismatched CSS class names in the innerHTML, and forgetting to call `appendChild()` to actually add elements to the page. Finding and fixing these taught me to read error messages carefully and check every detail.

### Continued development

Going forward I want to focus on the following areas:

- **CSS Grid** — Flexbox handled this project well but I want to get comfortable with Grid for more complex two-dimensional layouts where rows and columns need to align with each other.
- **The `fetch()` API** — In this project the data lived in a local JavaScript array. I want to practice fetching real data from an external JSON file or API endpoint using `fetch()` and handling the promise-based response correctly.
- **CSS Animations and Transitions** — The hover effect on the Continue button uses a simple color transition, but I want to explore keyframe animations to bring UI components to life with entrance effects and interactive feedback.
- **Accessibility** — I want to learn more about writing HTML that works well with screen readers, including proper use of ARIA attributes, focus management, and color contrast requirements.
- **Version control with Git** — This project introduced me to pushing code to GitHub and deploying with GitHub Pages, and I want to get more comfortable with branching, commits, and collaborative workflows.

---

## Author

- GitHub - [@Siph3sihle-Dyw1l1](https://github.com/Siph3sihle-Dyw1l1)
- Frontend Mentor - [@Siph3sihle-Dyw1l1](https://www.frontendmentor.io/profile/Siph3sihle-Dyw1l1)