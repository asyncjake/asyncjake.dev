# vscode-portfolio / jak edition

Forked and corrupted from the original masterpiece by [Nitin Ranganath (@itsnitinr)](https://github.com/itsnitinr/vscode-portfolio) (cheers for releasing this under MIT!)

This is a developer portfolio website themed like VSCode and built with Next.js. This fork is configured for static site output by default, which is intended for easy Github Pages usage. Site setup guide to come in a future blog post.

The only external service contacted during site build is Github in my variant of this template, which is used to pre-populate your git commit graph graphic. This is entirely optional, and will only print an INFO message about the github key.

## Idealistic Goals

- [ ] Themes and customizations
  - colorjakd showcase
  - write script to turn theme file into portfolio theme? blog it? blogception?
- [ ] Easter Egg ideas
  - build a vscode-like alert component
  - close button in 'editor' alerts 'your bank account is now closed, thank you'

## Running Development Server

```bash
npm install && npm start
# or
yarn install && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser for a hot-reloading site of awesomeness.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Deploy to Github Pages

TODO: explain pages setup, output dir, expectations, why 'public' dir already in use
TODO: recommend pro for private site with public pages with free https built in (vs manual gitlab config)
TODO: write out a blog about github pages, like a damn good setup blog for 3 popular site generators
TODO: blog it all as one thing, link to it here

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Alternately: Deploy on Vercel

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), a pay-for-convenience alternative to AWS, provided by the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

TODO: summarize the change needed to next config for vercel deploy
