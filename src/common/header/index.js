import React from 'react'
import { connect } from 'react-redux'
import { Headers, Logo,Nav,NavItem,SearchWrapper,Search,AddContent,Button} from './style'
import { CSSTransition } from 'react-transition-group'

const Header = (props)=>{
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
                                in= {props.focused}
                                classNames = 'slide'
                            >
                                <Search 
                                className= {props.focused? "focused":''}
                                onFocus = {props.onFocusHandle}
                                onBlur = {props.onBlurHandle}
                                ></Search>
                            </CSSTransition>
                                <i className= {props.focused? "focused iconfont":'iconfont'}>&#xe681;</i>
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

const mapStateToProps = (state)=>{
    return {
        focused:state.focused
    }
}

const mapDispathToProps = (dispath)=>{
    return {
        onFocusHandle(){
            const action = {
                type:'type_focus'
            }
            dispath(action)
        },
        onBlurHandle(){
            const action = {
                type:"type_blur"
            }
            dispath(action)
        }
    }
}


export default  connect(mapStateToProps,mapDispathToProps)(Header) 