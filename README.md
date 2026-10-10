# Smile Su-Jok Foundation, Dehradun: website

React + TypeScript + Vite + Tailwind CSS + lucide-react.

    npm install
    npm run dev      # local development
    npm run build    # production build in dist/ (relative paths, works on GitHub Pages or any static host)

Pages (hash routes): `#/` Home, `#/learn` Know & Learn Sujok, `#/donate` Donate.

- Text and course/FAQ content: `src/data.ts`
- Photos and logo: `src/assets/img/` (gallery captions are in `src/data.ts`, `GALLERY`)
- Team portraits for Dr. Subhash Chaudhary and Dr. Gurmeet Chauhan are still loaded from the old Vercel site; replace the URLs in `TEAM` with local files when you have them.
- The donation form has no payment gateway connected yet.

## Deploy on GitHub Pages

1. Create an empty repository on GitHub and push this project to its `main` branch.
2. In the repository, open Settings, then Pages, and set Source to "GitHub Actions".
3. Every push to `main` builds and publishes the site at `https://<username>.github.io/<repository>/`.
