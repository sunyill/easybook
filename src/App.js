import React , {Component, Fragment} from 'react';
import Header from './common/header'
import { GlobalStyled } from './style' 
import { IconFontStyled } from './statics/iconfont/iconfont'
class App extends Component {
  render(){
    return (
      <Fragment>
        <GlobalStyled/>
        <IconFontStyled/>
        <Header></Header>
      </Fragment>
    )
  }
}
export default App;
