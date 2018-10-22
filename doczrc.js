// doczrc.js
import doczPluginNetlify from 'docz-plugin-netlify';

export default {
  title: 'Concurrent React',
  description: 'Unstable, unofficial documentation for early adopters',
  // theme: 'my-coolest-theme',
  // themeConfig: {
  //   colors: {
  //     primary: 'papayawhip'
  //   }
  // }
  // modifyBundlerConfig: config => {
  //   /* do your magic here */
  // },
  plugins: [doczPluginNetlify()],
  files: '**/*.md',
  menu: [
    'Introduction',
    {
      name: 'APIs',
      menu: [
        'Scheduler and Time Slicing',
        'React Suspense',
        'react-cache',
        'hidden',
        'Misc APIs'
      ]
    },
    {
      name: 'Community',
      menu: ['Libraries', 'Demos', 'Talks']
    },
    {
      name: 'Edit this on Github',
      href: 'https://github.com/sw-yx/fresh-concurrent-react'
    }
  ]
};
