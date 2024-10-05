# Blockchain Validator Static Website

This is a space-themed, single-page static website for a blockchain validator, compatible with GitHub Pages hosting.

## Deployment Instructions

To deploy this website to GitHub Pages, follow these steps:

1. Create a new repository on GitHub or use an existing one.
2. Push the contents of this project to the repository.
3. Go to the repository settings on GitHub.
4. Scroll down to the "GitHub Pages" section.
5. Under "Source", select the branch you want to use for GitHub Pages (usually "main" or "master").
6. Select the root folder (/) as the source.
7. Click "Save".
8. GitHub will provide you with a URL where your site is published.

## Formspree Setup

The contact form uses Formspree for handling form submissions. To set it up:

1. Go to [Formspree](https://formspree.io/) and create an account.
2. Create a new form and get the form's endpoint URL.
3. Replace the placeholder URL in the `action` attribute of the form in `script.js` with your Formspree endpoint.

Example:
```javascript
'#contact': `
    <h2>Contact Us</h2>
    <form id="contact-form" action="https://formspree.io/f/your_formspree_endpoint" method="POST">
        ...
    </form>
    <div id="form-status"></div>
`
```

Replace `your_formspree_endpoint` with the actual endpoint provided by Formspree.

## Customization

To customize the content of the website, modify the `getContent` function in `script.js`. Each section's content is defined there and can be easily updated.

## Local Development

To run the website locally for development:

1. Install a local web server (e.g., `python -m http.server` or Live Server extension in VS Code).
2. Open the project folder in your preferred code editor.
3. Start the local web server.
4. Open a web browser and navigate to `http://localhost:8000` (or the port specified by your local server).

Remember to replace the Formspree endpoint with your actual endpoint before deploying to GitHub Pages.
