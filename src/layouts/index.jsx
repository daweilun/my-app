import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from '../pages/Dashboard/Home';
import Jsx from '../pages/Dashboard/Jsx';

class Layout extends Component{
  // renderMenuList(routes) {
  //   const menuList = routes.filter(_ => _.id)
  //   console.log('menuList: ', menuList);
  //   return (
  //     <React.Fragment>
  //       {menuList.map(item => {
  //       const { path, component, name } = item;
  //       return <Route path={path} component={component} key={path} />
  //       })}
  //     </React.Fragment>
  //   )
  // }
  render () {
    // const routes = router[1].routes || [];
    return (
      <div style={{background: 'rgba(0, 0, 0, .1)', height: '100%'}}>
        <ul>
          <li><NavLink to="/dashboard/home">home</NavLink></li>
          <li><NavLink to="/dashboard/jsx">jsx</NavLink></li>
        </ul>
        <Switch>
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/jsx" component={Jsx} />
          {/* {this.renderMenuList(routes)} */}
        </Switch>
      </div>
    )
  }
}
export default Layout;