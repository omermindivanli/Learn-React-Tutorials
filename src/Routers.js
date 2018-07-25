import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventHandlers from './components/EventHandlers';
import RenderingList from './components/RenderingList';
import SetState from './components/SetState';
import EventExample from './components/EventExample';
import LifeCycleMethods from './components/LifeCycleMethods';

class Routers extends React.Component {
  render() {
    const {
      titleLesson1,
      titleLesson2,
      titleLesson3,
      titleLesson4,
      titleLesson5
    } = this.props;

    const styles = {
      backgroundColor: 'yellow',
      marginTop: 30,
      marginLeft: 80,
      marginRight: 80,
      padding: 10
    };
    return (
      <Router>
        <div>
          <ul style={{ marginLeft: -40 }}>
            <li>
              <Link to="/renderingList">{titleLesson1}</Link>
            </li>
            <li>
              <Link to="/eventHandlers">{titleLesson2}</Link>
            </li>
            <li>
              <Link to="/setState">{titleLesson3}</Link>
            </li>
            <li>
              <Link to="/eventExample">{titleLesson4}</Link>
            </li>
            <li>
              <Link to="/lifeCycleMethods">{titleLesson5}</Link>
            </li>
          </ul>
          <div style={styles}>
            <Route path="/renderingList" component={RenderingList} />
            <Route path="/eventHandlers" component={EventHandlers} />
            <Route path="/setState" component={SetState} />
            <Route path="/eventExample" component={EventExample} />
            <Route path="/lifeCycleMethods" component={LifeCycleMethods} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
