import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    title: 'Nashi',
    description: '🍐 The modern jQuery alternative.',
    lang: 'en-US',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Nashi',
            description: 'The modern jQuery alternative.',
        },
        '/zh/': {
            lang: '简体中文',
            title: 'Nashi',
            description: '现代的 jQuery 替代品',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                navbar: [
                    {
                        text: 'Github',
                        link: 'https://github.com/akarachen/nashi',
                    },
                ],
                selectLanguageName: 'English',
                sidebar: [
                    '/',
                    '/core',
                    '/attribute',
                    '/style',
                    '/element',
                    '/event',
                    '/util',
                    '/type',
                ],
            },
            '/zh/': {
                navbar: [
                    {
                        text: 'Github',
                        link: 'https://github.com/akarachen/nashi',
                    },
                ],
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                sidebar: [
                    '/zh/',
                    'core',
                    'attribute',
                    'style',
                    'element',
                    'event',
                    'util',
                    'type',
                ],
            },
        },
    }),
});
