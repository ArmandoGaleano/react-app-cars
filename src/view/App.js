import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import About from './pages/About';
import Cars from './pages/Cars';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Fragment>
        <nav className="topMenu">
          <div>
            <ul>
              <li><Link to='/'>Cars</Link></li>
              <span>_</span>
              <li><Link to='/About'>About</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <Route render={(value) => (
            <TransitionGroup>
              <CSSTransition key={value.location.key} timeout={450} classNames='slideRight'>
                <Switch>
                  <Route exact path='/'>
                    <Cars bodyBackground/>
                  </Route>

                  <Route path='/About' component={About}  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </main>
      </Fragment>
    )
  }
}
export default App;
