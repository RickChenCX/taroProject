import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
/* icon.scss */

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/tools/tools',
      'pages/order/order',
    ],
    window: {
      "backgroundTextStyle": "dark",
      "backgroundColor": "#1abc9c",
      "navigationBarBackgroundColor": "#13BF6C",
      "navigationBarTitleText": "礼邦物流",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": false
    },
    tabBar: {
      color: "#333",
      selectedColor: "#666",
      backgroundColor: "#fff",
      list: [
        {pagePath: "pages/tools/tools", text: "主页",iconPath: "assets/images/tools_home.png",selectedIconPath:'assets/images/tools_home_sel.png'},
        {pagePath: "pages/order/order", text: "已完成订单",iconPath: "assets/images/ic_home_wddd.png",selectedIconPath:'assets/images/ic_home_wddd_select.png'},

      ]
    }
      
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
