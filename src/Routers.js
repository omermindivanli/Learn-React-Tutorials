import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventHandlers from './components/EventHandlers';
import RenderingList from './components/RenderingList';
import SetState from './components/SetState';
import EventExample from './components/EventExample';

class Routers extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Router>
        <div>
          <ul style={{ marginLeft: -40 }}>
            <li>
              <Link to="/renderingList">{title}</Link>
            </li>
            <li>
              <Link to="/eventHandlers">Event Handlers</Link>
            </li>
            <li>
              <Link to="/setState">What is setState ?</Link>
            </li>
            <li>
              <Link to="/eventExample">eventExample</Link>
            </li>
          </ul>
          <Route path="/renderingList" component={RenderingList} />
          <Route path="/eventHandlers" component={EventHandlers} />
          <Route path="/setState" component={SetState} />
          <Route path="/eventExample" component={EventExample} />
        </div>
      </Router>
    );
  }
}

export default Routers;
