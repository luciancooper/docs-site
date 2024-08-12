import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    docsSidebar: [{
        type: 'doc',
        label: 'Install',
        id: 'install',
    }, {
        type: 'category',
        label: 'API',
        link: {
            type: 'doc',
            id: 'api/index',
        },
        items: [
            'api/add',
            'api/subtract',
        ],
    }, {
        type: 'doc',
        label: 'Options',
        id: 'options',
    }],
};

export default sidebars;