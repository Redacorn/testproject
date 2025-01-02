import App from './App.svelte';
import './main.css';

const app = new App({
    target: document.getElementById('app'),
    props: {
        name: 'Electron + Svelte',
    },
});

export default app;
