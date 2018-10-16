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
  plugins: [doczPluginNetlify()]
};
