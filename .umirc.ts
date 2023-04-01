import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/', component: '@/layouts/index', routes: [
        {path: '/', component: '@/pages/index'},
        {path: '/deploymentCommands', component: '@/pages/deploymentCommands'}
      ]
    },
  ],
  fastRefresh: {},
});
