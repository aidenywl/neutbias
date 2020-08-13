# Demo for neutralizing bias with NLP

This website demos the NLP model created from my artificial intelligence project class.

The model is trained on Stanford's Wikipedia Neutrality Corpus.

Find out more about the project here: https://aidenywl.github.io/neutbias/

## Getting Started

### Editor Set-up

1. Obtain the extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatter, configured via `.prettierrc`
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin): TS linter, configured via `.tslint.json`
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): CSS linter, configured via `.stylelintrc`
- [PostCSS syntax](https://marketplace.visualstudio.com/items?itemName=ricard.PostCSS): Enable postCSS syntax to use Javascript variables inside CSS files.

2. Update workspace's `settings.json` with this:

   "editor.formatOnSave": true,

3. Reload your editor

### Running the starter page

1. Pull the repository
2. Run `yarn` to install all packages.
3. Run `yarn start` and go to your browser to see the starting website.

### Deploying To Github Pages

1. There are deployment scripts in `package.json`.
2. Simply run `yarn deploy` to deploy to github pages with `gh-pages`.

## The Website

### Development

This website extends the typescript react boilerplate I've written [here](https://github.com/aidenywl/typescript-react-webpack-boilerplate).
- Typescript modules and all relevant react modules for development with typescript are installed.
- Webpack is configured to build and serve Typescript and CSS files.
- Babel is set up for ES6 syntax.
- CSS Loader and POSTCSS Loader is used to shift away from global css and localized css for each component.
- Further CSS set-up: `autoprefixer` and `autoprefixer` normalizes styles for each browser and takes away the trouble of writing specific css classes for each browser
- Redux Saga and Redux is used to abstract away the data layer and api calls.

### Testing Framework
Although Jest is set up, minimal tests have been written for this static page.

- Jest is set up and ready to go via `yarn test`.
- React Testing Library is used to write tests instead of enzyme for flexibility and being able to better simulate the DOM as seen by a user.
- Using RTL allows us to move away from snapshot testing and test each component mocking components as required.

### Backend

The backend is running on Flask on a GCP compute server serving the [OpenNMT-py](https://github.com/OpenNMT/OpenNMT-py) model trained on the corpus data.
