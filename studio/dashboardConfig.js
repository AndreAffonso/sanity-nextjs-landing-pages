export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f985d2fafacab0d93487a5b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gam1rveh',
                  apiId: 'da49676c-814d-41d1-8007-61f597037d25'
                },
                {
                  buildHookId: '5f985d2ff3a4a80ace87b907',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1xnee6a7',
                  apiId: '84235e34-ae72-408f-9abe-cd3b1fb99987'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndreAffonso/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1xnee6a7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
