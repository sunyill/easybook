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

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .iconfont {
        position:absolute;
        right:0;
        top:0;
        height:38px;
        width:38px;
        border-radius:19px;
    }
`

export const Search = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:38px;
    padding: 0 20px;
    border:none;
    outline:none;
    box-sizing:border-box;
    border-radius:19px;
    font-size:14px;
    background:#eee;
    &::placeholder{
        color:#999;
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