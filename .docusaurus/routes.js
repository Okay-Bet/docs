import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '58b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/ben',
    component: ComponentCreator('/blog/authors/ben', '474'),
    exact: true
  },
  {
    path: '/blog/bets-with-friends',
    component: ComponentCreator('/blog/bets-with-friends', '291'),
    exact: true
  },
  {
    path: '/blog/product-hunt',
    component: ComponentCreator('/blog/product-hunt', 'a6f'),
    exact: true
  },
  {
    path: '/blog/superchain-accelerator',
    component: ComponentCreator('/blog/superchain-accelerator', '4d0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/base',
    component: ComponentCreator('/blog/tags/base', '250'),
    exact: true
  },
  {
    path: '/blog/tags/onchain',
    component: ComponentCreator('/blog/tags/onchain', '847'),
    exact: true
  },
  {
    path: '/blog/tags/optimism',
    component: ComponentCreator('/blog/tags/optimism', '4a0'),
    exact: true
  },
  {
    path: '/blog/tags/product-hunt',
    component: ComponentCreator('/blog/tags/product-hunt', 'fdb'),
    exact: true
  },
  {
    path: '/blog/tags/thirdweb',
    component: ComponentCreator('/blog/tags/thirdweb', 'c5a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '710'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '171'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b71'),
            routes: [
              {
                path: '/docs/category/tutorial',
                component: ComponentCreator('/docs/category/tutorial', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/directory',
                component: ComponentCreator('/docs/directory', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-usage/fund-or-cancel',
                component: ComponentCreator('/docs/tutorial-usage/fund-or-cancel', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-usage/make-a-bet',
                component: ComponentCreator('/docs/tutorial-usage/make-a-bet', '09f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-usage/resolve-a-bet',
                component: ComponentCreator('/docs/tutorial-usage/resolve-a-bet', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-usage/set-a-username',
                component: ComponentCreator('/docs/tutorial-usage/set-a-username', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-usage/signing-in',
                component: ComponentCreator('/docs/tutorial-usage/signing-in', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
