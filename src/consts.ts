export const SITE = {
  title: 'K-Aesthetica',
  tagline: 'The art of Korean skincare.',
  description:
    'A K-beauty journal: honest reviews, routine breakdowns, and the science behind glass skin. Slow rituals, clean ingredients, real results.',
  url: 'https://www.k-aesthetica.com',
  author: 'Min-seo Park',
};

// Newsletter — set `buttondownUser` to your Buttondown username to go live.
// Sign up free at https://buttondown.com, then put your username here.
// Leave as 'DEMO' to keep the form in demo mode (shows success, sends nothing).
export const NEWSLETTER = {
  buttondownUser: 'DEMO',
};

// Community — fill these in to go live.
export const COMMUNITY = {
  // Create a free Discord server, then make an invite (Server → Invite People → Edit invite
  // → "Never expire") and paste the https://discord.gg/XXXX URL here.
  discordInvite: '',
  // Create a Google Form for review submissions and paste its share URL here
  // (or any form/Tally/Airtable link). Leave blank to hide the submit button.
  reviewsFormUrl: '',
};

// Giscus comments — backed by GitHub Discussions on iceair0025/k-aesthetica-web.
// One manual step required: install the giscus app at https://github.com/apps/giscus
// and grant it access to the k-aesthetica-web repo. IDs below are already configured.
export const GISCUS = {
  repo: 'iceair0025/k-aesthetica-web',
  repoId: 'R_kgDOSshAQw',
  category: 'Announcements',
  categoryId: 'DIC_kwDOSshAQ84C-LJE',
};

export const NAV = [
  { label: 'Routines', href: '/category/routines/' },
  { label: 'Reviews', href: '/category/reviews/' },
  { label: 'Ingredients', href: '/category/ingredients/' },
  { label: 'Community', href: '/community/' },
  { label: 'About', href: '/about/', hideSm: true },
  { label: 'Subscribe', href: '/#newsletter' },
];
