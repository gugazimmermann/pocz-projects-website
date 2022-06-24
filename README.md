# PoCz Project Website

Development: [![Development Deployment](https://github.com/gugazimmermann/pocz-projects-website/actions/workflows/main.yml/badge.svg?branch=development)](https://github.com/gugazimmermann/pocz-projects-website/actions/workflows/main.yml?branch=development)

<https://project-site.pocz.io>

Production: [![Production Deployment](https://github.com/gugazimmermann/pocz-projects-website/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/gugazimmermann/pocz-projects-website/actions/workflows/main.yml?branch=master)

<https://www.animus.app.br>

## Tech

Created using React / TypeScript / Tailwind / Sequelize / PostgreSQL / Github Actions

### Description

- A basic product landing page to be used with all the projects created by PoCz. Designed to be easy to change and adjust to every project.

### Tests

#### Unit Tests - JEST / React Testing Library

`yarn test`

![Tests Coverage](./readme-imgs/tests.png)

#### E2E Tests - Cypress

`yarn cypress:run` or `yarn cypress:open`

![E2E Coverage](./readme-imgs/tests_cy.png)

### CI/CD

Using GitHub Actions to run tests, build and send to AWS in the correct environment.

![CICD](./readme-imgs/cicd.png)
