import Taro, {Component, useState, useEffect, Config} from '@tarojs/taro'
import { View, Text,CoverImage, CoverView,   } from '@tarojs/components'
import { AtTabs ,AtTabsPane,AtCard ,AtButton,AtIcon } from 'taro-ui'
import './tools.scss'
// async function loadResult() {

//   // console.log(data)
//   return data;
// }

export default class Index extends Component {
    
    constructor () {
      super(...arguments)
      this.state = {
        current: 0,
      }
    }
    // config: Config = {
    //         navigationBarTitleText: '首页'
    //       }
    handleClick (value) {
      this.setState({
        current: value
      })
      console.log(value)
    }
    render () {
      const tabList = [{ title: '进行中' }, { title: '已完成' }, { title: '行吧' }]
      const lerArr = [
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
          {name:'箱号',item:'3213213'},
        ]
      return (
        <View className="tools_cont">
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={this.state.current} index={0} >
                    <View className="view-cont">
                        <AtCard title='出口' extra='2019.8.15' >
                            <View className="at-row">
                                <View className="at-col at-col-4">
                                    321321321321
                                </View>
                                <View className="at-col at-col-4">
                                    <AtIcon prefixClass='fa' value='clock' size='30' color='F000'></AtIcon>
                                </View>
                                <View className="at-col at-col-4"></View>
                            </View>
                            <View className='at-row at-row--wrap' > 
                                { lerArr.map( result => {
                                    return <View className="at-col at-col-6">
                                                <View className="at-row row_mar_10">
                                                    <View className='at-col at-col-3'>{result.name}:</View>
                                                    <View className='at-col at-col-9'>{result.item}</View>
                                                </View>
                                            </View>
                                })}
                            </View>  
                            <View className="at-row">
                                <View className="at-col at-col-3"></View>
                                <View className="at-col at-col-2"></View>
                                <View className="at-col at-col-3">
                                    <AtButton type='primary' size='small'>按钮文案</AtButton>
                                </View>
                                <View className="at-col at-col-1"></View>
                                <View className="at-col at-col-3">
                                    <AtButton type='primary' size='small'>按钮文案</AtButton>
                                </View>
                            </View>
                        </AtCard>   
                    </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                    <View  className="view-cont">标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={2}>
                    <View  className="view-cont">标签页三的内容</View>
                </AtTabsPane>
            </AtTabs>
        </View>
      )
    }
  }

// export default class Index extends Component {

//   /**
//    * 指定config的类型声明为: Taro.Config
//    *
//    * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
//    * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
//    * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
//    */
//   config: Config = {
//     navigationBarTitleText: '首页'
//   }

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//         <AtButton type='primary'>按钮文案</AtButton>
//       </View>
//     )
//   }
// }
