'use strict';

import React, {Component}       from 'react';
// import {connect}                           from 'react-redux';
import HeaderSiteNav                       from './headerSiteNavComponent';
// import HeaderUserProfile                   from './headerUserProfileComponent';
// import HeaderUserAuthNav                   from './headerUserAuthNavComponent';
// import {bindActionCreators}                from 'redux';
// import * as authActions                    from '../../../actions/authenticationActions';
// import _                                   from 'underscore';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: props.user
  //   };

  //   this.logout = this.logout.bind(this);
  // }

  // logout(){
  //   const {authActions} = this.props;
  //   event.preventDefault();
  //   authActions.logout();
  // }

  render() {
    // const {user} = this.props;

    return (
      <nav className='navbar nav-menu fixed-top navbar-expand-md navbar-light bg-light justify-content-between header-nav-container'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
          <HeaderSiteNav />
        </div>
      </nav>
    );
  }
}


// const mapStateToProps = (state) => {
//   const {userDataState} = state;
//   return {user: userDataState.user};
// };

// function mapDispatchToProps(dispatch){
//   return {
//     authActions: bindActionCreators(authActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps,null, {pure:false})(Header);
export default (Header);

// <HeaderSiteNav user={user}/>
//           {!_.isEmpty(user) && <HeaderUserProfile user={user} logout={this.logout}/> || <HeaderUserAuthNav /> }