import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Nashi',
    description: '🍐 The modern jQuery alternative.',
    themeConfig: {
        nav: [{ text: 'Github', link: 'https://github.com/akarachen/ringo' }],
        sidebar: [
            {
                text: 'Index',
                items: [
                    { text: 'Introduction', link: '/' },
                    { text: 'Core', link: '/core' },
                    { text: 'Attribute', link: '/attribute' },
                    { text: 'Style', link: '/style' },
                    { text: 'Element', link: '/element' },
                    { text: 'Event', link: '/event' },
                    { text: 'Util', link: '/util' },
                    { text: 'Type definition', link: '/type' },
                ],
            },
        ],
    },
});
