import React, { Component } from 'react'
import {Headers, Logo,Nav,NavItem,SearchWrapper,Search,AddContent,Button} from './style'

class Header extends Component {
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
                        <Search></Search>
                        <i className="iconfont">&#xe681;</i>
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
}

export default Header