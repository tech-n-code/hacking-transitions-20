[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Hacking Transitions

## Description
A Full-Stack React application for transition managers to keep track of students, and their appointments. The application stores information in a database for multiple cohorts, who each have multiple students. Information attributed to the students includes Full name, Branch, Duty status, ETS date (with corresponding color indicator depending on the time to ETS), and their phone numbers. The application  provides the ability to add/edit/delete appointment notes on the fly for each individual student. The application requires users to register using email credentials, and provide a password for access to sensitive information. The user's password is hashed with additional 10 salt rounds, and is one-way encrypted so it can be stored in the database, and attributed to each individual user.

## Table of Contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license) 

## Installation

1. This application builds the development environment inside Docker, so after forking/cloning, make sure you have Docker desktop running.
1. In your terminal run `cp .env.example .env; cp api/.env.example api/.env` - Copy required environment variables.
1. In your terminal run `npm install; npm install --prefix=api; npm install --prefix=client` - Install all dependencies.
1. In your terminal run `docker compose up --build` - From the root directory (Note* the --build command ensures dependencies are installed alongside the Docker container build).
1. Visit deployed application @ https://hacking-transitions.herokuapp.com.
1. *Note: Since the database for the deployed application is hosted on Heroku, any changes to the data, or structure of the ERD must be pushed to heroku manually by using Heroku's CLI and adding/removing/altering the data from there. Updating the included migration and seed files will not affect the deployed version.

## Technologies

#### Font-End

[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=html5&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)

#### Back-End

[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=Node.js&logoColor=black)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![Render](https://img.shields.io/badge/-Render-46E3B7?style=flat&logo=render&logoColor=black)](https://render.com/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=black)](https://www.docker.com/)

#### Dev Environment

[![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=F6DC40)](https://vitejs.dev/)
[![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=black)](https://git-scm.com/)
[![Npm](https://img.shields.io/badge/-Npm-CB3837?style=flat&logo=npm&logoColor=white)](https://npmjs.com/)
[![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=black)](https://code.visualstudio.com/)

#### Key Libraries

| Link | Description |
| ---- | ---- |
| [![FullCalendar](https://img.shields.io/badge/FullCalendar-3775cb)](https://fullcalendar.io/) | FullCalendar provides a highly performant React component that accepts JSX for rendering nested content. |
| [![ReactTooltip](https://img.shields.io/badge/ReactTooltip-ef6e47)](https://github.com/ReactTooltip/react-tooltip) | ReactTooltip renders a floating react tooltip element that displays information related to an anchor element when it receives keyboard focus or the mouse hovers over it. |
| [![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=Axios&logoColor=white)](https://axios-http.com/) | Axios is a simple promise based HTTP client for the browser and node.js. |
| [![JSON Web Tokens](https://img.shields.io/badge/-JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/) | JSON Web Tokens (JWT) are a compact and self-contained means of securely transmitting information as a digitally signed JSON object, commonly used for authentication and authorization purposes.right baz |
| [![Concurrently](https://img.shields.io/badge/Concurrently-F7DF1E)](https://github.com/open-cli-tools/concurrently) | Concurrently is a JavaScript library that allows running multiple commands concurrently in a single terminal window. |
| [![Bcrypt](https://img.shields.io/badge/Bcrypt-008080)](https://github.com/kelektiv/node.bcrypt.js) | Bcrypt is a JavaScript library used for hashing and comparing passwords securely. |
| [![Cypress](https://img.shields.io/badge/Cypress-41b883)](https://github.com/cypress-io/cypress) | Cypress is a JavaScript end-to-end testing framework that allows for fast, reliable, and easy-to-write tests for web applications. |
| [![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?style=flat&logo=vitest&logoColor=F6DC40)](https://vitest.dev/) | A blazing fast unit test framework powered by Vite. |

### Collaboration Tools

[![Slack](https://img.shields.io/badge/-Slack-4A154B?style=flat&logo=slack&logoColor=white)](https://slack.com/)
[![Discord](https://img.shields.io/badge/-Discord-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.com/)

## Usage

For Staff Members charged with assisting students as they transition from military service.

## Screenshots

![alt text](assets/images/hacking-transitions-1.png)

## Contributors

| Role | Contact Info |
| ---- | ---- |
| Project Manager | [![GitHub](https://img.shields.io/badge/-Blake%20Barkman-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/BlakesHere) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/blakebarkman000/) |
| User Interface Owner | [![GitHub](https://img.shields.io/badge/-Josh%20Benton-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/josh-benton) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/blakebarkman000/) |
| Architecture Owner| [![GitHub](https://img.shields.io/badge/-Will%20Franceschini-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com//tech-n-code) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/will-franceschini/) |
| Software Engineer | [![GitHub](https://img.shields.io/badge/-Matt%20Drevon-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/MDrevon) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matthew-drevon/) |
| Software Engineer | [![GitHub](https://img.shields.io/badge/-Dennis%20Kennedy-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/Kennedyz71) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/dennis-kennedy-285616118/) |
| Software Engineer | [![GitHub](https://img.shields.io/badge/-Kimberly%20Jenkins-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/Spirit1269) [![Linkedin](https://img.shields.io/badge/-Let's%20Connect!-0A66C2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/kimberly-d-jenkins/)

## Tests

Full E2E test suite with Cypress, Multiple unit tests written for various components throughout the entire application with Vitest & react-test-library, and development testing with Postman during API development to test routes.

## License

The license used for this project is MIT.
For more information visit: https://opensource.org/license/mit/
