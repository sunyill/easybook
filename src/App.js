import React , {Component, Fragment} from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

import { GlobalStyled } from './style' 
import { IconFontStyled } from './statics/iconfont/iconfont'
class App extends Component {
  render(){
    return (
      <Fragment>
        <Provider store = { store }>
          <GlobalStyled/>
          <IconFontStyled/>
          <Header></Header>
        </Provider>
      </Fragment>
    )
  }
}
export default App;
