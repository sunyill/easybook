import React, { Component } from 'react'
import {Headers, Logo} from './style'

class Header extends Component {
    render (){
        return (
            <Headers>
                <Logo href="/"/>
            </Headers>
        )
    }
}

export default Header