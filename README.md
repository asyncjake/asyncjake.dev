# vscode-portfolio / jak edition

Forked and updated from the original masterpiece by [Nitin Ranganath (@itsnitinr)](https://github.com/itsnitinr/vscode-portfolio) (cheers for releasing this under MIT!)

Only two commands to know:
- npm start: runs npm install, then a local hotreload next server
- npm run build: assuming linux/osx, builds the app and if it compiles we git add automatically

This is a developer portfolio website themed like VSCode and built with Next.js. This fork is configured for static site output by default, which is intended for easy Github Pages usage. Site setup guide to come in a future blog post.

The only external service contacted during site build is Github in my variant of this template, which is used to pre-populate your git commit graph graphic. This is entirely optional, and will only print an INFO message about the github key.

NOTICE: getting this to work on Github Pages requires a bunch of little secrets, attempting to document the footnotes here for expansion later:
- A nojekyll to allow `_next` files: https://stackoverflow.com/a/64493580
- CNAME in the root of the repo, custom build command/postbuild
    - TODO: just root, or anywhere in repo and that dir is served?
    - i think there's more to it, is there a recursive lookup?

## Running Development Server

```bash
npm install && npm start
# or
yarn install && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser for a hot-reloading site of awesomeness.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Deploy to Github Pages

Deploying to Pages works the same as any static site - in this case, use "npm run build" to export the Next site to the "docs/" directory, which allows you to configure Github Pages using their default settings to "serve from the docs/ folder". Additional DNS steps will be necessary, I don't have that here, but I believe in you!

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Alternately: Deploy on Vercel

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), a pay-for-convenience alternative to AWS, provided by the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Alternately: Deploy anywhere static sites are supported like Github Pages

TODO: Full info here, little tutorials in the docs are probably an antipattern but in this case it seems cool

