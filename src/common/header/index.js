import React, { Component } from 'react'
import { Headers, Logo,Nav,NavItem,SearchWrapper,Search,AddContent,Button} from './style'
import { CSSTransition } from 'react-transition-group'
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused:false
        }
        this.onFocusHandle = this.onFocusHandle.bind(this)
        this.onBlurHandle = this.onBlurHandle.bind(this)
    }
    render (){
        return (
            <Headers>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout ={ 2000 }
                            in= {this.state.focused}
                            classNames = 'slide'
                        >
                            <Search 
                            className= {this.state.focused? "focused":''}
                            onFocus = {this.onFocusHandle}
                            onBlur = {this.onBlurHandle}
                            ></Search>
                        </CSSTransition>
                            <i className= {this.state.focused? "focused iconfont":'iconfont'}>&#xe681;</i>
                    </SearchWrapper>
                </Nav>
                <AddContent>
                    <Button className='writting'>
                        <i className="iconfont">&#xe676;</i>
                        写文章</Button>
                    <Button className= 'regis'>注册</Button>
                </AddContent>
            </Headers>
            
        )
    }
    onFocusHandle(){
        this.setState({
            focused:true
        })
    }
    onBlurHandle(){
        this.setState({
            focused:false
        })
    }
}

export default Header