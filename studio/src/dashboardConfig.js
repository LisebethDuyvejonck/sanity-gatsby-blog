export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea1773b83c9a6bbfa43e109',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ecnnpwzb',
                  apiId: '764b08df-caeb-418b-bf22-9448ad662fce'
                },
                {
                  buildHookId: '5ea1773ce8e85af6ae8e2130',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9z91u4ve',
                  apiId: '895ff438-300d-4d4d-a9ea-eedc838a6ca5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LisebethDuyvejonck/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9z91u4ve.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
