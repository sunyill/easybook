import React , { Component } from 'react'
import { connect } from 'react-redux'
import { Headers, Logo, Nav, NavItem, SearchWrapper, Search, SearchInfo, SearchInfoTitle, SearchInfoSearch, SearchInfoList, SearchInfoItem, AddContent, Button } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class  Header extends Component {
    
     handleSearchHot = () => {
        const {focused, list} = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSearch>换一批</SearchInfoSearch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item)=>{
                                return <SearchInfoItem key={item} >{item}</SearchInfoItem>
                            }
                            )
                        }
                        
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render(){
        const {focused, onFocusHandle,onBlurHandle} = this.props;
        return (
            <Headers>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={2000}
                            in={focused}
                            classNames='slide'
                        >
                            <Search
                                className={focused ? "focused" : ''}
                                onFocus={onFocusHandle}
                                onBlur={onBlurHandle}
                            ></Search>
    
                        </CSSTransition>
                        <i className={focused ? "focused iconfont" : 'iconfont'}>&#xe681;</i>
                        {this.handleSearchHot()}
                    </SearchWrapper>
                </Nav>
                <AddContent>
                    <Button className='writting'>
                        <i className="iconfont">&#xe676;</i>
                                写文章</Button>
                    <Button className='regis'>注册</Button>
                </AddContent>
            </Headers>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list:state.getIn(['header','list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onFocusHandle() {
            dispatch(actionCreators.listDate())
            dispatch(actionCreators.typeFocus())
        },
        onBlurHandle() {
            const action = actionCreators.typeBlur()
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header) 