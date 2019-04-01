module.exports = {
  schedule: {
    interval: '5000', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    console.log(process.pid);
  },
};


