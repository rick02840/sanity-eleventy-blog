export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e2e1b3bbd2243db67e0d13a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ygotx6ua',
                  apiId: '618983ee-5ff3-4eb3-bd05-0419e9aa10dd'
                },
                {
                  buildHookId: '5e2e1b3bc666a229062f66f8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-niw4x7gd',
                  apiId: 'bcc1e06c-2bfe-4c23-a294-18830a6984c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rick02840/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-niw4x7gd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
