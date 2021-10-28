import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  description: 'Utilities for doing various annoying tasks',
  canonical: process.env['NEXT_PUBLIC_FRONTEND_URL'],
  openGraph: {
    site_name: 'Utils',
    title: 'Utils - A Cool Repo',
    description: 'Utilities for doing various annoying tasks'
  },
  twitter: {
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'Xenfo,xenfo,Utils,utils'
    },
    {
      property: 'author',
      content: 'Xenfo'
    },
    {
      property: 'theme-color',
      content: '#3f58fc'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;600;700&display=swap'
    }
  ]
};

export default config;
