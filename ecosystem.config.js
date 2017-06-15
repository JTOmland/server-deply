module.exports = {
  apps: [{
    name: 'server-deploy',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-227-228-8.compute-1.amazonaws.com',
      key: '~/.ssh/ApostateNode.pem',
      ref: 'origin/master',
      repo: 'https://github.com/JTOmland/server-deply.git',
      path: '/home/ubuntu/server-deply',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}