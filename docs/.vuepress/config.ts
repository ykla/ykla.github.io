/**
 * @file config.ts
 * @brief Configuration of the translated FreeBSD-Ask.
 * @copyright Copyright (c) 2022 FreeBSD MFGA. All rights reserved.
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from '@vuepress/cli'
import { fullTextSearchPlugin } from 'vuepress2-plugin-full-text-search'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { defaultTheme } from '@vuepress/theme-default'

import {sideBarConfig} from './configs'
    
export default defineUserConfig({
  lang: 'en-US',
  title: 'FreeBSD MFGA',
  description: 'FreeBSD MFGA',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    docsRepo: 'https://github.com/ykla/ykla.github.io',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: 'Edit in GitHub',
    lastUpdatedText: 'Last Update',
    contributorsText: 'Contributors'
  }),
  
  plugins: [
    fullTextSearchPlugin,
    googleAnalyticsPlugin({
      id: 'G-08Q6JW7QTV',
    }),
    sitemapPlugin({
      hostname: 'https://mfga.bsdcn.org/',
    }),
    seoPlugin({
      hostname: 'https://mfga.bsdcn.org/',
    }),
  ],
});
