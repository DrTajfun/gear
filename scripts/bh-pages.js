const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/gear',
    {
        branch: 'master',
        repo: 'https://github.com/DrTajfun/gear.git',
        user: {
            name: 'DrTajfun',
            email: 'drtajfun@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)