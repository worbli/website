module.exports = {
    apps: [{
      name: 'wprbli-www',
      script: 'npm',
      args: 'start',
      watch: true,
      exec_mode: 'cluster',
      instances: 2,
    }],
  };
  