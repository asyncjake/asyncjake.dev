# vscode-portfolio / jak edition

Forked and updated from the original masterpiece by [Nitin Ranganath (@itsnitinr)](https://github.com/itsnitinr/vscode-portfolio) (cheers for releasing this under MIT!)

This is a developer portfolio website themed like VSCode and built with Next.js. This fork is configured for static site output by default, which is intended for easy Github Pages usage. Site setup guide to come in a future blog post.

The only external service contacted during site build is Github in my variant of this template, which is used to pre-populate your git commit graph graphic. This is entirely optional, and will only print an INFO message about the github key.

NOTICE: getting this to work on Github Pages requires a bunch of little secrets, attempting to document the footnotes here for expansion later:
- A nojekyll to allow `_next` files: https://stackoverflow.com/a/64493580
- CNAME in the root of the repo, custom build command/postbuild
    - TODO: just root, or anywhere in repo and that dir is served?
    - i think there's more to it, is there a recursive lookup?

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

## Alternately: Deploy anywhere static sites are supported like Github Pages

TODO: info here, probably an outline of the parallel blog to this topic

# ---
# TASKS / TODO
# ---

## CORE TODO TO MVP
- contact filled out with handles
- projects.json replaced with my work
- projects scroll sideways? wack, see if easy or backlog
- Contact needs my contact, i dont want spam
  - email is good enough, any techy neat way to do this?
  - ALIAS BABY lets go contact@asyncjake.com
- github links target _blank
- About section similar to old github readme

## Things to prioritize
ArticleCard -> CardLink? So it's like article, but repurposed for general use as projects?
CardLink directs to ${contentType}/${pageName} or smth

## Improvements
- Head:20 image card for SEO is Nitin's
- pages/contact.jsx: save in another format to keep form?
- Home page text
  - where does form go D:
  - can embed google form? ew? :/
- Projects to reflect short summaries of current projects
  - MAKE ONE project page for a bigger breakdown
  - "the technical bits" and "the personal story"
- Articles: get this to load to a stub article
  - get ONE good article

### Bugs I'm ignoring
images unoptimized seems dumb can we do better
components/Head.jsx needs more details, and an image i guess
console.logs in Sidebar
title meaning multiple things throughout app
env has a next config section, ideal for my stuff for now
  does env.STAGE override this section?

### Home / typing subtext taglines @ HomePage()::styles.bio
srs
  Product Engineer<a> / Fullstack Developer
fun
  If you had to stop and think, it was probably a bit
  Adam and Eve were horny single celled organisms
  That's my secret, I always wish I was snowboarding
  HELP I'M TRAPPED IN A DIV AAAAAAAAAAAAAA
  God writes Python, /fight me/stop denying snake earth theory/
  Fuck that wanna go on an adventure


### Home / under-text-bg-thing @ HomePage():styles.background
// caeser cypher dumb shit here lol
// or webdings lol
REACT IS A PSYOP
HUT HUT HYAHHHHH
PERMISSION TO LEAVE THE STATION
WE'LL TAKE OUR LEAVE AND GO
ITS JUST A SPARK BUT ITS ENOUGH

### Source Cred
https://github.com/itsnitinr/vscode-portfolio

