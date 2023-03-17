const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "赤兔实时计算平台",
  description: '赤兔实时计算平台是大数据产品生态体系的实时化分析利器，是基于 Apache Flink 构建的具备一站开发、无缝连接、亚秒延时、低廉成本、安全稳定等特点的企业级实时大数据计算平台。平台提供SQL化IDE开发环境，任务运维发布流程，任务监控体系，多环境隔离转环境支持，多集群管理等多种企业级特性支持，帮助企业加速进行实时应用开发与实践, 加快实时化数字化的建设进程。',
  base: "/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
