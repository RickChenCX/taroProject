import Taro, {Component, useState, useEffect} from "@tarojs/taro"
import { View, Text } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

/**
 * 页面加载请求数据，返回loading, success, fail 状态
 */
export let PageSpinerContext = Taro.createContext({result: null})

interface SpinerProps {
    load: () => Promise<any>;
}
interface State {
    status: "loading" | "success" | "fail"
}

export default class PageSpiner extends Component<SpinerProps, State> {
    loadResult: any
    constructor(props) {
        super(props)
        this.state = { status: 'loading' }
    }
    componentDidMount() {
        this.load()
    }
    load() {
        this.setState({ status: "loading"})
        this.props.load().then( result => {
            this.setState({ status: "success"})
            this.loadResult = result
        }).catch(e => {
            console.log(e)
            this.setState({ status: "fail"})
        })
    } 
    render() {
        let status = this.state.status
        return {
            "loading": <AtActivityIndicator mode='center'></AtActivityIndicator>,
            "success": <PageSpinerContext.Provider value={{result: this.loadResult}}>
                        {this.props.children}
                    </PageSpinerContext.Provider>,
            "fail":<View>
                    <Text>网络错误！！</Text>
                </View>
        }[status]
        // switch (status) {
        //     case "loading":
        //         return 
        //     case "success":
        //         console.log("结果：", this.loadResult)
        //         return <PageSpinerContext.Provider value={{result: this.loadResult}}>
        //             {this.props.children}
        //         </PageSpinerContext.Provider>
        //     case "fail":
        //         return <View>
        //             <Text>网络错误！！</Text>
        //         </View>;
                
        // }
    }
}