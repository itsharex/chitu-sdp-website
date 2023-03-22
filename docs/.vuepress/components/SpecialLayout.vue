<template>
  <div class="layout-container">
    <!-- 头部 -->
    <div class="header-container flex">
      <div class="left">
        <div class="logo">
          <img src="/chitu-sdp-website/image/logo.png"
               alt="赤兔实时计算平台">
        </div>
      </div>
      <div class="center flex-1">
        <ul class="menu-list flex-between">
          <li class="menu-item"
              :class="{ active: activeItem === item.key }"
              v-for="(item,key) in menuList"
              :key="key"
              @click="openMenu(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="btn"
             @click="toSDP">体验Demo</div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="main-container">
      <div class="introduce-container flex">
        <div class="left flex-1">
          <div class="title">赤兔实时计算平台</div>
          <div class="info">
            基于Apache Flink构建的企业级、一站式、高性能、低门槛实时大数据实时计算平台，广泛适用于流式数据应用开发场景。
          </div>
          <div class="btns flex">
            <div class="btn btn-left pointer"
                 @click="toSDP">体验Demo</div>
            <div class="btn btn-right pointer ml-20"
                 @click="toGitHub">GitHub</div>
          </div>
        </div>
        <div class="right">
          <div class="player">
            <d-player :options="dplayerOpt"
                      style="width: 100%; height: 100%;display:block;"></d-player>
          </div>
        </div>
      </div>
      <div class="banner-container">
        <div class="banner-list flex">
          <div class="item flex-center"
               v-for="(item,key) in bannerList"
               :key="key">
            <img src="/chitu-sdp-website/image/check.png"
                 alt="">
            {{item.name}}
          </div>
        </div>
        <div class="mask-warp">
          <div class="before"></div>
          <div class="mask-content"></div>
          <div class="after"></div>
        </div>
      </div>
      <div class="application-container wow bounceInUp"
           data-wow-duration="1.5s">
        <div class="main-title">热门应用场景</div>
        <div class="application-content flex">
          <div class="flex-1 pd-60">
            <div class="main-content-title text-r">事件驱动应用</div>
            <img class="phone-img"
                 src="/chitu-sdp-website/image/img_sjqdyy.png"
                 alt="">
            <div class="main-content-text text-indent">事件驱动应用是对一系列订阅事件进行处理或作出响应的系统。事件驱动应用通常需要依赖内部状态，例如欺诈检测、风控系统、运维异常检测系统等。当用户行为触发某些风险控制点时，系统会捕获这个事件，并根据用户当前和之前的行为进行分析，决定是否对用户进行风险控制。</div>
          </div>
          <div class="flex-1">
            <img class="pc-img"
                 src="/chitu-sdp-website/image/img_sjqdyy.png"
                 alt="">
          </div>
        </div>
        <div class="application-content flex">
          <div class="flex-1">
            <img class="pc-img"
                 src="/chitu-sdp-website/image/img_sssjfx.png"
                 alt="">
          </div>
          <div class="flex-1 pd-60">
            <div class="main-content-title">实时数据分析</div>
            <img class="phone-img"
                 src="/chitu-sdp-website/image/img_sssjfx.png"
                 alt="">
            <div class="main-content-text text-indent">传统数据仓库解决方案基于离线批量采集及分析，无法做到实时的数据分析功能。流式查询或应用会接入实时事件流，随着事件消费持续产生和更新结果。这些结果数据可能会写入外部数据库系统或以内部状态的形式维护。仪表展示应用可以相应地从外部数据库读取数据或直接查询应用的内部状态。</div>
          </div>
        </div>
        <div class="application-content flex">
          <div class="flex-1 pd-60">
            <div class="main-content-title text-r">实时ETL</div>
            <img class="phone-img"
                 src="/chitu-sdp-website/image/img_ssetl.png"
                 alt="">
            <div class="main-content-text text-indent">ETL 是将业务系统的数据经过抽取、清洗转换之后加载到目的端的过程，目的是将企业中的分散、零乱、标准不统一的数据整合到一起，为企业的决策提供分析依据。</div>
          </div>
          <div class="flex-1">
            <img class="pc-img"
                 src="/chitu-sdp-website/image/img_ssetl.png"
                 alt="">
          </div>
        </div>
      </div>
      <div class="feature-container wow bounceInUp"
           data-wow-duration="1.5s">
        <div class="main-title">亮 点</div>
        <div class="feature-content flex-center">
          <div class="left">
            <div class="content">
              <img src="/chitu-sdp-website/image/icon_qtgyzs.png"
                   alt="">
              <div class="main-content-title text-r">全托管一站式</div>
              <div class="main-content-text ">提供 Flink SQL/JAR 任务开发、上线、运维、监控一体化 开箱即用，免运维</div>
            </div>
            <div class="content">
              <img src="/chitu-sdp-website/image/icon_dhj.png"
                   alt="">
              <div class="main-content-title text-r">多环境</div>
              <div class="main-content-text text-r">支持测试/生产环境切换及转环境，多维度进行资源环境的隔离</div>
            </div>
          </div>
          <div class="center">
            <img src="/chitu-sdp-website/image/img_ldpt.png"
                 alt="">
          </div>
          <div class="right">
            <div class="content">
              <img src="/chitu-sdp-website/image/icon_yys.png"
                   alt="">
              <div class="main-content-title">云原生</div>
              <div class="main-content-text">资源调度支持 K8S，资源弹性化，数据云上化</div>
            </div>
            <div class="content">
              <img src="/chitu-sdp-website/image/icon_yyx.png"
                   alt="">
              <div class="main-content-title">易用性</div>
              <div class="main-content-text">Flink 元表自动生成、支持 Flink 多版本、自定义配置监控告警规则等</div>
            </div>
          </div>
        </div>
      </div>
      <div class="function-phone-container wow bounceInUp"
           data-wow-duration="1.5s">
        <div class="main-title">功 能</div>
        <div class="function-content flex">
          <div class="item">
            <img src="/chitu-sdp-website/image/img_tgsql.png"
                 alt="">
            <div>
              <div class="main-content-title">通过SQL或代码开发实时任务</div>
              <img class="main-content-img"
                   src="/chitu-sdp-website/image/func_banner_1.png"
                   alt="">
              <div class="main-content-text">强大的 IDE 套件，支持 jar、SQL开发模式，支持拖拽、模块化、多语言等特性，提供多种调试方式，支持任务血缘、版本管理等。</div>
            </div>
          </div>
          <div class="item">
            <img src="/chitu-sdp-website/image/img_tgqyjgnzc.png"
                 alt="">
            <div>
              <div class="main-content-title">提供企业级功能支持</div>
              <img class="main-content-img"
                   src="/chitu-sdp-website/image/func_banner_2.png"
                   alt="">
              <div class="main-content-text">提供多环境、多集群、多版本的企业级功能支持。</div>
            </div>
          </div>
          <div class="item">
            <img src="/chitu-sdp-website/image/img_qddywjk.png"
                 alt="">
            <div>
              <div class="main-content-title">强大的运维监控告警支持</div>
              <img class="main-content-img"
                   src="/chitu-sdp-website/image/func_banner_3.png"
                   alt="">
              <div class="main-content-text">提供任务的全生命周期事件管理，支持任务运行状态各种维度 metrics 的汇总与展示，实现问题快速排查和恢复，保障 SLA。</div>
            </div>
          </div>
          <div class="item">
            <img src="/chitu-sdp-website/image/img_wsdrwfb.png"
                 alt="">
            <div>
              <div class="main-content-title">完善的任务发布流程</div>
              <img class="main-content-img"
                   src="/chitu-sdp-website/image/func_banner_4.png"
                   alt="">
              <div class="main-content-text">提供开发/上线模式，以实现开发/运维隔离，保障开发工作不直接影响线上任务，支持快照版本管理；通过调试功能为开发者模拟低成本开发集群，在不引入额外成本前提下全面保障线上安全。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="function-pc-container wow bounceInUp"
           data-wow-duration="1.5s">
        <div class="main-title">功 能</div>
        <div class="content-list"
             v-for="(item,key) in funcContentList"
             v-show="key == activeBanner"
             :key="key">
          <div class="content-list_title">
            {{item.title}}
          </div>
          <div class="content-list_text"
               v-for="(val,index) in item.desc"
               :key="index">
            <span v-html="val.text"></span>
          </div>
        </div>
        <div class="banner-list">
          <el-carousel height="592px"
                       @change="carouselChange">
            <el-carousel-item v-for="(item,key) in funcBannerList"
                              :key="key">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer-container">
      <div class="footer-content">
        <div class="content-title">
          <div class="item">
            <img src="/chitu-sdp-website/image/footer-logo.png"
                 alt=""
                 style="width:100%">
          </div>
          <div class="item pc-item">Resource</div>
          <div class="item pc-item">更多</div>
          <div class="item pc-item">关注</div>
        </div>
        <div class="content-item">
          <div class="item pc-item">
            <div></div>
          </div>
          <div class="item pc-item">
            <div class="text pointer active-hover"
                 @click="toDoc">文档</div>
            <div class="text pointer active-hover"
                 @click="toFAQ">FAQ</div>
          </div>
          <div class="item pc-item">
            <div class="text pointer active-hover"
                 @click="toGitHub">Github</div>
            <div class="text pointer active-hover"
                 @click="toSDP">体验demo</div>
          </div>
          <div class="item">
            <div class="text qrcode-list flex">
              <div class="mr-16">
                <img class="icon-qrcode"
                     src="/chitu-sdp-website/image/zx.jpg"
                     alt="" />
                <div>咨询</div>
              </div>
              <div>
                <img class="icon-qrcode"
                     src="/chitu-sdp-website/image/gzh.png"
                     alt="" />
                <div>公众号</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 侧边栏 -->
    <div class="sidebar-container">
      <div class="sidebar-list">
        <div class="sidebar-item">
          <el-tooltip popper-class="qrcode-popover"
                      effect="light"
                      placement="left">
            <div class="qrcode-wrap"
                 slot="content">
              <img class="icon-qrcode"
                   src="/chitu-sdp-website/image/zx.jpg"
                   alt=""
                   style="width:100px;" />
            </div>
            <div class="qrcode-content">
              <svg t="1678976239134"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4289"
                   width="24"
                   height="24">
                <path d="M275.413333 810.666667L85.333333 960V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768a42.666667 42.666667 0 0 1 42.666667 42.666667v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H275.413333zM298.666667 426.666667a213.333333 213.333333 0 0 0 426.666666 0h-85.333333a128 128 0 0 1-256 0H298.666667z"
                      p-id="4290"></path>
              </svg>
              咨询
            </div>
          </el-tooltip>
        </div>
        <div class="sidebar-item">
          <el-tooltip popper-class="qrcode-popover"
                      effect="light"
                      placement="left">
            <div class="qrcode-wrap"
                 slot="content">
              <img class="icon-qrcode"
                   src="/chitu-sdp-website/image/gzh.png"
                   alt=""
                   style="width:100px;" />
            </div>
            <div class="qrcode-content">
              <svg t="1678976116780"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4143"
                   width="24"
                   height="24">
                <path d="M792.490667 585.002667a38.826667 38.826667 0 0 0 38.314666-38.314667c0-21.248-17.024-38.314667-38.314666-38.314667s-38.314667 17.066667-38.314667 38.314667c0 21.333333 17.066667 38.314667 38.314667 38.314667z m-188.8 0a38.826667 38.826667 0 0 0 38.314666-38.314667c0-21.248-17.066667-38.314667-38.314666-38.314667-21.333333 0-38.314667 17.066667-38.314667 38.314667 0 21.333333 17.024 38.314667 38.314667 38.314667z m280.192 215.04a14.805333 14.805333 0 0 0-7.338667 15.786666c0 2.048 0 4.138667 1.066667 6.272 4.181333 17.792 12.544 46.122667 12.544 47.189334 0 3.114667 1.066667 5.205333 1.066666 7.338666a9.386667 9.386667 0 0 1-9.429333 9.386667c-2.133333 0-3.157333-1.024-5.248-2.048l-61.824-35.669333a34.090667 34.090667 0 0 0-14.677333-4.181334c-3.114667 0-6.272 0-8.362667 1.024-29.354667 8.405333-59.733333 12.586667-92.202667 12.586667-156.16 0-281.898667-104.832-281.898666-234.88 0-130.005333 125.738667-234.88 281.898666-234.88 156.117333 0 281.856 104.874667 281.856 234.88 0 70.272-37.717333 134.229333-97.450666 177.237333zM711.381333 345.557333a388.48 388.48 0 0 0-11.946666-0.213333c-178.090667 0-324.522667 122.026667-324.522667 277.546667 0 23.637333 3.413333 46.506667 9.728 68.266666h-3.797333a425.088 425.088 0 0 1-110.250667-15.701333c-3.157333-1.066667-6.314667-1.066667-9.472-1.066667a35.498667 35.498667 0 0 0-17.834667 5.248l-74.581333 42.88c-2.133333 1.066667-4.224 2.133333-6.314667 2.133334a11.648 11.648 0 0 1-11.52-11.52c0-3.157333 1.024-5.248 2.090667-8.405334 1.024-1.024 10.496-35.584 15.744-56.490666 0-2.133333 1.024-5.248 1.024-7.338667a23.722667 23.722667 0 0 0-9.429333-18.858667C87.808 570.709333 42.666667 494.336 42.666667 409.514667 42.666667 253.653333 194.986667 128 381.866667 128c160.64 0 295.68 92.544 329.514666 217.514667z m-219.904 17.834667c24.448 0 43.776-20.352 43.776-43.776 0-24.448-19.328-43.776-43.776-43.776s-43.776 19.328-43.776 43.776 19.328 43.776 43.776 43.776z m-224.426666 0c24.448 0 43.818667-20.352 43.818666-43.776 0-24.448-19.370667-43.776-43.818666-43.776-24.405333 0-43.776 19.328-43.776 43.776s19.370667 43.776 43.776 43.776z"
                      p-id="4144"></path>
              </svg>
              公众号
            </div>
          </el-tooltip>
        </div>
        <div class="sidebar-item">
          <div class="qrcode-content"
               @click="toSDP">
            <svg t="1678976260158"
                 class="icon"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="4435"
                 width="24"
                 height="24">
              <path d="M128 128h768a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m725.333333 298.666667H170.666667v384h682.666666v-384zM213.333333 256v85.333333h85.333334V256H213.333333z m170.666667 0v85.333333h85.333333V256H384z"
                    p-id="4436"></path>
            </svg>
            Demo
          </div>
        </div>
      </div>
    </div>
    <el-backtop class="pointer">
      <svg t="1679015840745"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="4581"
           width="20"
           height="20">
        <path d="M558.976 981.333333h-90.197333l-0.085334-600.661333-277.802666 274.858667-63.018667-63.402667 348.970667-346.154667c20.352-22.698667 52.437333-23.893333 74.112 0 27.008 26.752 143.829333 142.805333 350.421333 348.074667l-60.928 64-281.386667-277.333333M85.333333 42.666667h853.333334v89.6H85.333333V42.666667z"
              fill="#272636"
              p-id="4582"></path>
      </svg>
    </el-backtop>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {},
    data () {
      return {
        wow: null,
        activeItem: 'home',
        activeBanner: 0,
        menuList: [
          { name: '首页', key: 'home', path: '/' },
          { name: '文档', key: 'docs', path: '/pages/69fb10/' },
          { name: 'FAQ', key: 'fqa', link: 'https://github.com/galaxy-data-cn/chitu-sdp/issues' },
          { name: 'GitHub', key: 'github', link: 'https://github.com/galaxy-data-cn/chitu-sdp' },
        ],
        bannerList: [
          { name: '一站式的流任务管理平台' },
          { name: '一系列开箱即用的 Connectors' },
          { name: '支持多环境切换' },
          { name: '支持 Yarn / K8s 多集群部署' },
          { name: '支持 Flink SQL 和 Flink DataStream 任务运行' },
        ],
        dplayerOpt: {
          video: {
            url: "https://bg-uat-cos-bdp-1257092428.cos.ap-guangzhou.myqcloud.com/bigdata/wordpress/2023/03/20230315071216480.mp4",
            pic: "/chitu-sdp-website/image/player-pic.png"//视频封面图
          },
        },
        funcContentList: [
          {
            title: '通过SQL或代码开发实时任务',
            desc: [
              {
                text: '强大的 IDE 套件，支持 jar、SQL开发模式，'
              },
              {
                text: ' 支持拖拽、模块化、多语言等特性，。'
              },
              {
                text: ' 提供多种调试方式，支持任务血缘、版本管理等。'
              },
            ]
          },
          {
            title: '提供企业级功能支持',
            desc: [
              {
                text: '提供多环境、多集群、'
              },
              {
                text: '多版本的企业级功能支持。'
              },
              {
                text: '&ensp;'
              }
            ]
          },
          {
            title: '强大的运维监控告警支持',
            desc: [
              {
                text: '提供任务的全生命周期事件管理，'
              },
              {
                text: '支持任务运行状态各种维度 metrics 的汇总与展示，'
              },
              {
                text: '实现问题快速排查和恢复，保障 SLA。'
              }
            ]
          },
          {
            title: '完善的任务发布流程',
            desc: [
              {
                text: '提供开发/上线模式，以实现开发/运维隔离，'
              },
              {
                text: '保障开发工作不直接影响线上任务，支持快照版本管理，'
              },
              {
                text: '通过调试功能为开发者模拟低成本开发集群，在不引入额外成本前提下全面保障线上安全。'
              }
            ]
          }
        ],
        funcBannerList: [
          {
            img: '/chitu-sdp-website/image/func_banner_1.png'
          },
          {
            img: '/chitu-sdp-website/image/func_banner_2.png'
          },
          {
            img: '/chitu-sdp-website/image/func_banner_3.png'
          },
          {
            img: '/chitu-sdp-website/image/func_banner_4.png'
          }
        ]
      }
    },
    computed: {},
    watch: {},
    created () { },
    mounted () {
      this.wow = new this.$wow({
        boxClass: 'wow', // default  需要执行动画的元素的 class
        animateClass: 'animated', // default  animation.css 动画的 class
        offset: 0, // default  距离可视区域多少开始执行动画
        mobile: true, // default  是否在移动设备上执行动画
        live: true,  // 异步加载的内容是否有效
      })
      this.wow.init();
    },
    destroyed () {
      this.wow = null;

    },
    methods: {
      openMenu (menu) {
        if (menu.path) {
          this.$router.push(menu.path)
        } else {
          window.open(menu.link)
        }
      },
      toSDP () {
        window.open('http://183.57.45.188/')
      },
      toGitHub () {
        window.open('https://github.com/galaxy-data-cn/chitu-sdp')
      },
      toFAQ () {
        window.open('https://github.com/galaxy-data-cn/chitu-sdp/issues')
      },
      toDoc () {
        this.$router.push('/pages/69fb10/')
      },
      carouselChange (val) {
        this.activeBanner = val
      }
    },
  }
</script>
<style lang='scss' scoped>
  ul,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
  }
  div {
    cursor: default;
  }
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-center {
    display: flex;
    align-items: center;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .text-l {
    text-align: left;
  }
  .text-r {
    text-align: right;
  }
  .text-indent {
    text-indent: 2em;
  }
  .pointer {
    cursor: pointer;
  }
  .layout-container {
    font-size: 16px;
    color: #fff;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-image: url("/chitu-sdp-website/image/home-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    .header-container {
      width: 1200px;
      padding: 20px 0;
      margin: 0 auto;
      align-items: flex-end;
      .center {
        .menu-list {
          width: 400px;
          margin-left: 88px;
          .menu-item {
            opacity: 0.6;
            font-size: 16px;
            cursor: pointer;
            color: #fff;
            &:hover {
              opacity: 1;
              color: #fff;
            }
            &.active {
              opacity: 1;
              border-bottom: 2px solid;
              border-image-source: linear-gradient(to right, #34a5ff, #9fff67);
              border-image-slice: 2;
              color: #fff;
            }
          }
        }
      }
      .right {
        .btn {
          height: 40px;
          width: 140px;
          line-height: 40px;
          color: #ffffff;
          cursor: pointer;
          text-align: center;
          background: linear-gradient(45deg, #008fff, #18ecea 64%, #9fff67 100%);
          border-radius: 21px;
          box-shadow: 0px 10px 30px 0px rgba(62, 5, 97, 0.2);
        }
      }
    }
    .main-container {
      width: 1100px;
      margin: 150px auto 0 auto;
      .main-title {
        font-size: 36px;
        font-weight: 700;
        color: #303133;
        line-height: 47px;
        text-align: center;
      }
      .main-content-title {
        font-size: 24px;
        font-weight: 400;
        color: #303133;
        line-height: 31px;
        letter-spacing: 2px;
        margin-bottom: 26px;
        &:hover {
          color: #086bff;
        }
      }
      .main-content-text {
        font-size: 16px;
        font-weight: 400;
        color: #80879a;
        line-height: 28px;
        letter-spacing: 1px;
      }
      .introduce-container {
        .left {
          padding-right: 50px;
          .title {
            font-size: 50px;
            font-weight: 700;
            line-height: 66px;
            letter-spacing: 4.63px;
            margin-bottom: 50px;
          }
          .info {
            font-size: 20px;
            font-weight: 400;
            color: #a5d4ff;
            line-height: 36px;
            letter-spacing: 1px;
            margin-bottom: 50px;
          }
          .btns {
            .btn {
              width: 180px;
              height: 56px;
              line-height: 56px;
              font-size: 20px;
              text-align: center;
            }
            .btn-left {
              background: linear-gradient(
                45deg,
                #008fff,
                #18ecea 64%,
                #9fff67 100%
              );
              border-radius: 28px;
              box-shadow: 0px 10px 30px 0px rgba(17, 5, 97, 0.2);
            }
            .btn-right {
              border: 1px solid #70f995;
              border-radius: 29px;
              box-shadow: 0px 10px 30px 0px rgba(17, 5, 97, 0.2);
            }
          }
        }
        .right {
          width: 600px;
          height: 340px;
          box-sizing: border-box;
          .player {
            height: 100%;
            background: #ffffff;
            border: 5px solid rgba(255, 255, 255, 0.8);
            border-radius: 6px;
          }
        }
      }
      .banner-container {
        margin-top: 100px;
        position: relative;
        overflow: hidden;
        .banner-list {
          animation: move_safe_iso_ipad 15s linear infinite;
        }
        @keyframes move_safe_iso_ipad {
          to {
            -webkit-transform: translateX(-1100px);
            -moz-transform: translateX(-1100px);
            -o-transform: translateX(-1100px);
            transform: translateX(-1100px);
          }
        }
        .item {
          margin-right: 30px;
          max-width: 360px;
          min-width: 360px;
          width: 360px;
          img {
            margin-right: 5px;
          }
        }
        .mask-warp {
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          .mask-content {
            width: 800px;
          }
          .before,
          .after {
            flex: 1 1;
          }
          .before {
            background: linear-gradient(
              90deg,
              #321cc3 19.77%,
              hsla(0, 0%, 100%, 0)
            );
          }
          .after {
            background: linear-gradient(
              270deg,
              #321cc3 20.45%,
              hsla(0, 0%, 100%, 0)
            );
          }
        }
      }
      .application-container {
        margin-top: 120px;
        padding: 48px 90px;
        background: #ffffff;
        border-radius: 6px;
        box-shadow: 0px 10px 30px 0px rgba(7, 106, 255, 0.1);
        .application-content {
          margin-top: 100px;
          .pd-60 {
            padding: 0 60px;
          }
          .phone-img {
            display: none;
          }
        }
      }
      .feature-container {
        margin-top: 120px;
        .feature-content {
          margin-top: 70px;
          .left {
            text-align: right;
            padding-right: 37px;
          }
          .right {
            text-align: left;
            padding-left: 37px;
          }
          .content {
            height: 220px;
          }
        }
      }
      .function-phone-container {
        display: none;
        margin-top: 120px;
        .function-content {
          margin-top: 70px;
          flex-wrap: wrap;
          justify-content: space-between;
          .item {
            margin-bottom: 70px;
            width: 526px;
            height: 300px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0px 10px 30px 0px rgba(7, 106, 255, 0.1);
            text-align: center;
            padding: 0 70px;
            box-sizing: border-box;
            img {
              margin-top: -50px;
            }
            .main-content-title {
              margin-top: -40px;
              margin-bottom: 10px;
            }
            .main-content-img {
              width: 100%;
              margin-top: 0;
            }
          }
        }
      }
      .function-pc-container {
        margin-top: 120px;
        .content-list {
          .content-list_title {
            font-size: 24px;
            font-weight: 700;
            text-align: left;
            color: #303133;
            line-height: 31px;
            letter-spacing: 2px;
            text-align: center;
            margin: 60px 0 24px 0;
          }
          .content-list_text {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: #80879a;
            line-height: 28px;
            letter-spacing: 1px;
          }
        }
        .banner-list {
          text-align: center;
          img {
            height: 100%;
          }
        }
      }
    }
    .footer-container {
      height: 338px;
      background: #2e3033;
      .active-hover {
        &:hover {
          color: #fff;
        }
      }
      .footer-content {
        width: 1100px;
        margin: 0 auto;
        padding: 40px 0;
        box-sizing: border-box;
        .content-title {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(97, 100, 107, 0.3);
          .item {
            font-size: 16px;
            color: #61646b;
            line-height: 21px;
            width: 25%;
            padding-left: 40px;
          }
        }
        .content-item {
          display: flex;
          .item {
            font-size: 14px;
            color: #61646b;
            line-height: 19px;
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 25%;
            padding-left: 40px;
            .text {
              margin-top: 12px;
            }
            .qrcode-list {
              img {
                width: 100px;
                margin-bottom: 10px;
              }
              .mr-16 {
                margin-right: 16px;
              }
            }
          }
        }
      }
    }
    .sidebar-container {
      position: fixed;
      right: 40px;
      bottom: 120px;
      z-index: 9999;
      .sidebar-list {
        width: 44px;
        padding: 20px 0;
        text-align: center;
        min-height: 150px;
        background: #fff;
        border-radius: 22px;
        margin-top: 16px;
        box-shadow: 0 0 12px 0 rgb(139 152 166 / 24%);
        .sidebar-item {
          font-size: 12px;
          color: #000;
          margin-bottom: 20px;
          &:nth-of-type(3) {
            margin-bottom: 0;
          }
          .icon {
            margin-bottom: 5px;
          }
          &:hover {
            .icon {
              fill: #0066ff;
            }
            .qrcode-content {
              color: #0066ff;
            }
          }
          .qrcode-content {
            display: flex;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
          }
        }
      }
    }
  }
  /* 媒体查询（手机） */
  @media screen and (max-width: 768px),
    screen and (min-width: 768px) and (max-width: 996px) {
    .layout-container {
      .header-container {
        max-width: 100% !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
        display: block !important;
        box-sizing: border-box;
        .center {
          margin-top: 10px;
          .menu-list {
            width: 100% !important;
            margin-left: 0 !important;
            justify-content: space-around;
          }
        }
        .right {
          display: none;
        }
      }
      .main-container {
        max-width: 100%;
        margin: 50px auto 0 auto !important;
        .introduce-container {
          display: block;
          text-align: center;
          padding-left: 10px;
          padding-right: 10px;
          .left {
            padding: 0;
            .title {
              font-size: 40px;
              letter-spacing: normal;
            }
            .btns {
              display: block;
              text-align: center;
              .btn {
                margin: 0 auto;
                padding: 0 35px;
              }
              .btn-left {
                margin-bottom: 20px;
              }
            }
          }
          .right {
            width: 100%;
            margin: 20px auto 0 auto;
            margin-left: 0px !important;
            padding: 0 10px;
            .player {
              height: 100%;
              width: 100%;
            }
          }
        }
        .application-container {
          margin-left: 10px !important;
          margin-right: 10px !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          .application-content {
            display: block !important;
            margin-top: 30px;
            .pd-60 {
              padding: 0 10px;
            }
            .pc-img {
              display: none;
            }
            .phone-img {
              width: 70%;
              display: block;
              margin: 0 auto 20px auto;
            }
            .main-content-title {
              text-align: center;
            }
          }
        }
        .feature-container {
          .feature-content {
            display: block;
            .left,
            .right {
              text-align: center;
              padding-left: 10px !important;
              padding-right: 10px !important;
              .main-content-title {
                text-align: center;
              }
              .main-content-text {
                text-align: center;
              }
            }
            .center {
              img {
                display: none;
              }
            }
          }
        }
        .function-phone-container {
          display: block;
          padding-left: 10px !important;
          padding-right: 10px !important;
          .function-content {
            .item {
              height: auto;
              padding: 0 20px 10px 20px;
              margin: 0 auto 70px auto;
            }
          }
        }
        .function-pc-container {
          display: none;
        }
      }
      .footer-container {
        max-width: 100%;
        .footer-content {
          max-width: 100%;
          .content-title {
            .item {
              img {
                width: 200px !important;
              }
            }
          }
          .pc-item {
            display: none !important;
          }
        }
      }
    }
  }
</style>