// Plugin Config
module.exports = [
  // 代码块复制
  [
    "one-click-copy", {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false
    }
  ],
  // 图片缩放
  [
    "vuepress-plugin-zooming", {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    }
  ],
  // "上次更新"时间格式
  [
    "@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs"); // https://day.js.org/
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      }
    }
  ],
];
