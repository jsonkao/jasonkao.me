if (!('scrollBehavior' in document.documentElement.style)) {
	console.log('hi')
  import('scroll-behavior-polyfill').then();
}

import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

export default app;
