import styled from 'styled-components'
import logoImage from '../../assets/image/logo.png'

export const Headers = styled.div`
    width:100%;
    height:56px;
    position:relative;
    border-bottom:1px solid #ccc;    
`

export const Logo = styled.a.attrs({
    herf:"/"
})`
    width:100px;
    height:56px;
    display:block;
    position:absolute;
    top:0;
    left:0;
    background:url(${logoImage});
    background-size:contain;  
`

export const Nav =styled.div`
    width:960px;
    height:56px;
    padding-right:70px;
    line-height:56px;
    margin: 0 auto;
`

export const NavItem = styled.div`
    font-size:17px;
    color:#333;
    margin-right:30px;
    &.active {
        color:#ea6f5a;
    }
    &.left{
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
`

// 热搜
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:250px;
    padding:0 20px;
    box-sizing:border-box;
    box-shadow:0 0 8px rgba(0,0,0,.2)   
`
export const SearchInfoTitle = styled.div`
    font-size:14px;
    color:#969696;
`
export const SearchInfoSearch = styled.span`
    float:right;
    font-size:13px;
    color:#969696;
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    float:left;
    display:block;
    color:#787878;
    font-size:12px;
    line-height:20px;
    margin-right:10px;
    margin-bottom:10px;
    border:1px solid #ddd;
    padding:2px 4px;
    border-radius:3px;
`

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .iconfont {
        position:absolute;
        right:5px;
        bottom:8px;
        width:36px;
        line-height:36px;
        border-radius:18px;
        text-align:center;
        &.focused {
            background:#777;
            color:#fff;
        }
    }
`

export const Search = styled.input.attrs({
    placeholder:"搜索"
})`
    .slide-enter{
        transition:all 2s ease-out; 
    }
    .slide-enter-active {
        width:240px;
    }
    .slide-exit {
        transition:all 2s ease-out; 
    }
    .slide-exit-active {
        width:160px;
    }
    width:160px;
    height:38px;
    padding: 0 40px 0 20px;
    border:none;
    outline:none;
    box-sizing:border-box;
    border-radius:19px;
    font-size:14px;
    background:#eee;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused {
        width:240px;
    }
    
`

export const AddContent = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
    
`

export const Button = styled.button`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    height:38px;
    border-radius:19px;
    border:1px solid #ea6f5a;
    &.writting{
        color:#fff;
        background:#ea6f5a;
        .iconfont {
            margin-right:10px;
        }
    }
    &.regis {
        clolr:#ea6f5a;
        background:#fff;
    }
`