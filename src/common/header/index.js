import React, { Component } from 'react'
import {Headers, Logo,Nav,NavItem,Search,AddContent,Button} from './style'

class Header extends Component {
    render (){
        return (
            <Headers>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <Search></Search>
                </Nav>
                <AddContent>
                    <Button className='writting'>写文章</Button>
                    <Button className= 'regis'>注册</Button>
                </AddContent>
            </Headers>
            
        )
    }
}

export default Header