import { Button, Tooltip, Backtop } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
import 'wowjs/css/libs/animate.css'
import 'vue-dplayer/dist/vue-dplayer.css'
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer
}) => {
  Vue.use(Button);
  Vue.use(Tooltip);
  Vue.use(Backtop);
  Vue.use(animated)
  if (!isServer) {
    await import('vue-dplayer').then(module => {
      Vue.use(module.default)
    })
    await import('wowjs').then(module => {
      Vue.prototype.$wow = module.WOW
    })
  }
}