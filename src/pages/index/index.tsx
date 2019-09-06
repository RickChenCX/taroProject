import Taro, { useState, useEffect, Config} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { test } from '../../api/index'
import PageSpiner, {PageSpinerContext} from "../../components/pageSpiner"
import './index.scss'

async function loadResult() {
  let data = await test();
  // console.log(data)
  return data;
}
export default function Index() {
  const value = this.context
  const [name , setName] = useState("xixi");
  useEffect( () => {
    // loadResult()
  }) 
  return (
        <PageSpiner load={() =>  loadResult()}>
          <View className='index'>
              <Text>Hello world! {value.result} </Text>
              <AtButton type='primary'>按钮文案</AtButton>
          </View>
        </PageSpiner>

        )
}

Index.config  = {
  navigationBarTitleText: '首页'
} as Config;
Index.contextType = PageSpinerContext;

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
