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