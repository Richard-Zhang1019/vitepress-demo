import type { DefaultTheme } from 'vitepress'

export default {
  label: '简体中文',
  lang: 'zh',
  description: '笔记',
  themeConfig: {
    lastUpdatedText: '上次更新',
    outlineTitle: '当前页面',
    editLink: {
      pattern: 'https://github.com/richard-zhang1019/docs/edit/master/:path',
      text: '在github上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      {
        text: '关于我',
        link: '/me/index',
        activeMatch: '/me'
      },
      {
        text: '博客',
        link: '/blogs/index',
        activeMatch: '/blogs'
      },
      {
        text: '笔记',
        link: '/notes/index',
        activeMatch: '/notes'
      },
      {
        text: 'private',
        link: '/private/index',
        activeMatch: '/interview'
      },
      {
        text: 'English',
        link: '/english/index',
        activeMatch: '/english'
      },
      {
        text: 'Demo',
        link: '/demo/index',
        activeMatch: '/demo'
      }
    ] as DefaultTheme.NavItem[],
    sidebar: {
      '/me': [
        {
          text: '关于我',
          items: [
            { text: '简介', link: '/me/resume' },
            { text: '简介第一版', link: '/me/resume-old' },
            { text: '足迹', link: '/me/footprint' }
          ]
        }
      ],
      '/blogs': [
        {
          text: '博客',
          items: [
            { text: 'Hello World', link: '/blogs/b-001' },
            { text: 'github的绿格子变颜色了！', link: '/blogs/b-003' },
            { text: 'web3.0', link: '/blogs/b-004' },
            { text: '随笔', link: '/blogs/b-005' },
            { text: 'AI绘画', link: '/blogs/b-007' },
            { text: 'console.log花里胡哨版', link: '/blogs/b-008' },
            { text: '记录下横跨2631km的一天', link: '/blogs/b-009' },
            { text: '环洱海一日游', link: '/blogs/b-010' },
            { text: 'Mac环境下配置git alias', link: '/blogs/b-011' },
            { text: '配置MacOS的终端样式', link: '/blogs/b-012' },
            { text: '阳了', link: '/blogs/b-013' },
            { text: '玉龙雪山4680米海拔', link: '/blogs/b-014' },
            { text: '行程记录', link: '/blogs/b-015' },
            { text: '第一次滑雪', link: '/blogs/b-016' },
            { text: 'npm发包流程', link: '/blogs/b-017' },
            { text: '费曼学习法', link: '/blogs/b-018' },
            { text: 'Vim使用', link: '/blogs/b-019' },
            { text: 'vscode快捷键', link: '/blogs/b-020' },
            { text: 'markdown语法', link: '/blogs/b-021' },
            { text: '面试', link: '/blogs/b-022' },
            { text: '和舍友答辩前的出行', link: '/blogs/b-023' },
            { text: 'using app', link: '/blogs/b-024' },
            { text: 'Web3.0的一些概念', link: '/blogs/b-025' },
            { text: '毕业🎓', link: '/blogs/b-002' },
            { text: 'react封装HOC处理error', link: '/blogs/b-006' },
          ]
        }
      ],
      '/notes': [
        {
          text: 'HTML',
          collapsed: true,
          items: [
            { text: 'h5新特性', link: '/notes/n-001' },
            { text: '实现图片懒加载', link: '/notes/n-002' },
            { text: 'requestIdleCallback', link: '/notes/n-003' },
            { text: 'h5新标签--dialog', link: '/notes/n-060' }
          ]
        },
        {
          text: 'CSS',
          collapsed: true,
          items: [
            { text: '垂直水平居中', link: '/notes/n-004' },
            { text: 'BFC', link: '/notes/n-005' },
            { text: 'css画三角形', link: '/notes/n-031' },
            { text: 'css高亮', link: '/notes/n-038' },
            { text: '文本溢出', link: '/notes/n-058' },
            { text: '重排重绘', link: '/notes/n-070' }
          ]
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: [
            { text: '数据类型', link: '/notes/n-006' },
            { text: 'var/const/let', link: '/notes/n-007' },
            { text: '箭头函数/普通函数', link: '/notes/n-010' },
            { text: 'call apply bind', link: '/notes/n-051' },
            { text: '执行上下文', link: '/notes/n-052' },
            { text: '深拷贝', link: '/notes/n-037' },
            { text: 'Object.is()', link: '/notes/n-011' },
            { text: '防抖/节流', link: '/notes/n-021' },
            { text: '垃圾回收', link: '/notes/n-027' },
            { text: '继承', link: '/notes/n-032' },
            { text: '闭包', link: '/notes/n-036' },
            { text: '数组去重的方法', link: '/notes/n-035' },
            { text: '数组方法合集', link: '/notes/n-042' },
            { text: '事件委托', link: '/notes/n-050' },
            { text: 'Object和Map', link: '/notes/n-053' },
            { text: 'Event lop', link: '/notes/n-023' },
            { text: '异步任务并发量', link: '/notes/n-041' },
            { text: 'Promise', link: '/notes/n-055.md' },
            { text: 'async await', link: '/notes/n-056.md' },
            { text: '判断一个对象为空', link: '/notes/n-059.md' }
          ]
        },
        {
          text: 'Typescript',
          collapsed: true,
          items: [
            { text: 'type/interface区别', link: '/notes/n-025' },
            { text: '内置类型', link: '/notes/n-026' }
          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
            { text: 'v-if/v-show', link: '/notes/n-008' },
            { text: 'computed/watch', link: '/notes/n-009' },
            { text: 'React和Vue的区别', link: '/notes/n-074.md' }
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
            { text: 'setState', link: '/notes/n-012' },
            { text: 'useEffect 与 useLayoutEffect', link: '/notes/n-013' },
            { text: 'useMemo 与 React.memo', link: '/notes/n-014' },
            { text: 'fiber', link: '/notes/n-015' },
            { text: 'createRef 与 useRef', link: '/notes/n-016' },
            { text: 'CPU瓶颈', link: '/notes/n-039' },
            { text: 'React为什么选择jsx', link: '/notes/n-040' },
            { text: '渲染控制', link: '/notes/n-046' },
            { text: 'react16架构', link: '/notes/n-047' },
            {
              text: '为什么react不使用generator实现异步可中断的fiber架构',
              link: '/notes/n-048'
            },
            { text: 'Scheduler--lane模型', link: '/notes/n-049' },
            { text: 'react合成事件', link: '/notes/n-061.md' },
            { text: '高阶组件', link: '/notes/n-062.md' },
            { text: 'redux 和 mobx', link: '/notes/n-063.md' },
            { text: 'React错误边界', link: '/notes/n-073.md' },
          ]
        },
        {
          text: '前端工程化',
          collapsed: true,
          items: [
            { text: 'loader/plugin区别', link: '/notes/n-017' },
            { text: 'HMR', link: '/notes/n-018' },
            { text: 'tree shaking', link: '/notes/n-019' },
            { text: 'pnpm', link: '/notes/n-072' },
          ]
        },
        {
          text: '浏览器',
          collapsed: true,
          items: [
            { text: 'cookie session localStorage', link: '/notes/n-071' },
          ]
        },
        {
          text: 'Http',
          collapsed: true,
          items: [
            { text: 'http/https区别', link: '/notes/n-020' },
            { text: '从输入url到页面展示', link: '/notes/n-022' },
            { text: '跨域', link: '/notes/n-024' },
            { text: 'get请求和post请求的区别', link: '/notes/n-029' },
            { text: '强缓存和协商缓存', link: '/notes/n-033' },
            { text: 'http状态码', link: '/notes/n-034' },
            { text: 'tcp和udp的区别', link: '/notes/n-044' },
            { text: '三次握手四次挥手', link: '/notes/n-045' },
            { text: 'OSI网络七层模型', link: '/notes/n-054' },
            { text: 'DNS解析', link: '/notes/n-057' }
          ]
        },
        {
          text: '算法',
          collapsed: true,
          items: [
            { text: '字符串中出现次数最多的字符', link: '/notes/n-028' },
            { text: '数组对象转树结构', link: '/notes/n-064' },
            { text: 'flat', link: '/notes/n-065' },
            { text: '字符串转小驼峰', link: '/notes/n-066' },
            { text: '字符串中连续的第一组三个数字', link: '/notes/n-067' },
            { text: '快排', link: '/notes/n-068' },
            { text: 'eventBus', link: '/notes/n-069' },
          ]
        }
      ],
      '/english': [
        {
          text: 'English List',
          items: [
            { text: 'Daily Conversion', link: '/english/daily.md' },
            { text: 'reconcile with yourself', link: '/english/reconcile.md' },
            { text: 'react-starport', link: '/english/react-starport.md' }
          ]
        }
      ],
      '/demo': [
        {
          text: 'demo',
          items: [
            { text: '动态边框', link: '/demo/dynamic-border.md' },
            { text: '跟随鼠标', link: '/demo/follow-mouse.md' },
            { text: 'lucky-design', link: '/demo/lucky-design.md' },
            { text: '走马灯', link: '/demo/marquee.md' },
            { text: 'react-starport', link: '/demo/react-starport.md' },
            { text: '贪吃蛇', link: '/demo/snake.md' },
            { text: '骨架屏扫光', link: '/demo/sweep-light.md' },
            { text: '扫雷', link: '/demo/sweep-mine.md' },
            { text: '虚拟列表', link: '/demo/virtual-list.md' },
            { text: '木鱼小程序', link: '/demo/wooden-fish.md' },
            { text: '钉钉官网动画', link: '/demo/ding-animation.md' }
          ]
        }
      ],
      '/interview': [
        {
          text: '2023 Interview List',
          collapsed: false,
          items: [
            { text: '字节青训营笔试', link: '/interview/i-001.md' },
            { text: '栈略数据 实习', link: '/interview/i-002.md' },
            { text: '端点科技 实习', link: '/interview/i-003.md' },
            { text: '跨域星空 实习', link: '/interview/i-004.md' },
            { text: '整树智能 校招', link: '/interview/i-005.md' },
            { text: '营探 实习', link: '/interview/i-006.md' },
            { text: '阿里-瓴羊 校招', link: '/interview/i-007.md' },
            { text: '知乎 笔试 校招', link: '/interview/i-008.md' },
            { text: '京东 笔试 校招', link: '/interview/i-009.md' },
            { text: '雾角科技 笔试 校招', link: '/interview/i-010.md' },
            { text: '爱用科技 校招', link: '/interview/i-011.md' },
            { text: '百度 笔试 校招', link: '/interview/i-012.md' },
            { text: '卓望 笔试 校招', link: '/interview/i-013.md' },
            { text: '水滴 校招', link: '/interview/i-014.md' },
            { text: '美团 笔试 校招', link: '/interview/i-015.md' },
            { text: 'FunPlus 笔试 校招', link: '/interview/i-016.md' },
            { text: '360 笔试 校招', link: '/interview/i-017.md' },
            { text: '4399 笔试 校招', link: '/interview/i-018.md' },
            { text: '乐刻运动 校招', link: '/interview/i-019.md' },
            { text: '数字马力 笔试 校招', link: '/interview/i-020.md' },
            { text: '阿里-瓴羊 校招', link: '/interview/i-021.md' },
            { text: '快手 校招', link: '/interview/i-022.md' },
            { text: '契约锁 校招', link: '/interview/i-023.md' },
            { text: '快手-移动端技术平台', link: '/interview/i-024.md' },
            { text: '天顶星 校招', link: '/interview/i-025.md' },
            { text: '途虎 校招', link: '/interview/i-026.md' },
            { text: '北银金科 校招', link: '/interview/i-027.md' },
            { text: '阿里 飞猪', link: '/interview/i-028.md' }
          ]
        }
      ]
    } as DefaultTheme.Sidebar
  }
}
