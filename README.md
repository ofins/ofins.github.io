# Aria Template

This is a personal blog, portfolio, or blog template created for [Astro](https://astro.build).

Astro port of [aria](https://github.com/static-templates/aria).

![Aria Template Cover Photo](https://github.com/ccbikai/astro-aria/blob/main/public/assets/images/cover.png?raw=true)

You can install this theme with the [Astro](https://astro.build) command like so:

```js
npm create astro@latest -- --template ccbikai/astro-aria
```

## Getting Started

Follow these steps to get started with the Aria Template:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.0.0 or later)
- [npm](https://www.npmjs.com/) (version 6.0.0 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ccbikai/astro-aria.git
   cd astro-aria
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm start
```

This will start the server at `http://localhost:4321`. You can now open your browser and visit this URL to see the template in action.

### Building for Production

To build the project for production, run:

```sh
npm run build
```

This will create an optimized build of your project in the `dist` directory.

### Deploying

You can deploy the contents of the `dist` directory to any static hosting service of your choice.

## Project Structure

Here is a brief overview of the project's structure:

```
/src
  /components
  /layouts
  /pages
  /styles
/public
  /assets
    /images
```

## Customization

You can customize the template by editing the files in the `src` directory. Here are some common customizations:

- **Changing the Logo**: Replace the logo file in `public/assets/images`.
- **Updating Styles**: Modify the CSS files in `src/styles`.
- **Adding New Pages**: Create new `.astro` files in the `src/pages` directory.

## Tips

### Deploying on Github page

1. Create a Github repo with `your-user-name.github.io`.
2. On setting, change source to `Github Action`.
3. Reference [Astro's official site for Github Action workflow](https://docs.astro.build/en/guides/deploy/github/). You can also reference my workflows folder.

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
