// Head Config
module.exports = [
  ["link", { rel: "icon", href: "/logo/small.png" }],
  ["meta", { name: "keywords", content: "chitu-sdp,chitu-sdp-flink,chitu-sdp-provider,赤兔实时计算,赤兔实时计算文档" }],
  ["meta", { name: "theme-color", content: "#11a8cd" }],
  ["meta", { name: "viewport", content: "width=device-width,initial-sacle=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" }],
  ["script", {}, `
  var appKey = 'r336dqylqlyt6aqotj8u0771';
var logUrl = 'kye-log-sdk.ky-express.com';
var jsUrl = 'https://bg-prd-cos-bdp-1257092428.cos.ap-guangzhou.myqcloud.com/bigdata/kyelog/aplus_web_v9_md5_c1f7.js';
if(window.location.host.indexOf('localhost') >= 0) {
  return
}
(function (w, d, s, q) {
w[q] = w[q] || [];
var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
j.async = true;
j.id = 'beacon-aplus';
j.src = jsUrl;
f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'aplus_queue')
//集成应用的appKey
aplus_queue.push({ action: 'aplus.setMetaInfo', arguments: ['appKey', appKey] })
//如果是私有云部署还需要在上面那段JS后面紧接着添加日志域名埋点
//通常私有云日志服务端域名类似于：quickaplus-web-api.xxx.com.cn, 具体域名要找交付同学要
aplus_queue.push({ action: 'aplus.setMetaInfo', arguments: ['aplus-rhost-v', logUrl] })
aplus_queue.push({ action: 'aplus.setMetaInfo', arguments: ['DEBUG', true] })
//开启全埋点
aplus_queue.push({
action: 'aplus.setMetaInfo',
arguments: ['aplus-autotrack-enabled', true]
});
// 全埋点配置
aplus_queue.push({
action: 'aplus.setMetaInfo',
arguments: [
  'aplus-autotrack-config',
  {
    collect_tags: {
      li: true,
      img: true,
      div: true,
      span: true,
      i: true,
      svg: true,
      path: true,
      p: true,
      td: true
    },
    collect_input: true, // 采集input框输入内容
    element_capture_enable: true // 全埋点控件点击支持事件捕获模式，默认为冒泡模式，值为false
  }
]
})
//apm
void (function (e, t, n, a, o, i, m) {
(e._um_apm_namespace = o),
  (e[o] =
    e[o] ||
    function () {
      (e[o].q = e[o].q || []).push(arguments);
    }),
  (e[o].l = e[o].l || +new Date()),
  (i = t.createElement(n)),
  i.setAttribute('crossorigin', ''),
  (i.src = a),
  (m = t.getElementsByTagName(n)[0]),
  m.parentNode.insertBefore(i, m);
})(window, document, "script", "https://bg-prd-cos-bdp-1257092428.cos.ap-guangzhou.myqcloud.com/bigdata/kyelog/apm_v2_md5_1b26.js", "_apm");
_apm('create', {
pid: appKey,
dsn: 'https://' + logUrl,
pageFilter: { mode: 'ignore', rules: [] },
});`],
];
