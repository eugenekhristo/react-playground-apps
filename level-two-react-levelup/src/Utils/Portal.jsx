import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

class Portal extends Component {
  constructor() {
    super();
    this.elContainer = document.createElement('div');
  }

  render() { 
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.elContainer);
  }

  componentDidMount() {
    portalRoot.append(this.elContainer);
  }

  componentWillUnmount() {
    portalRoot.remove(this.elContainer);
  }
}
 
export default Portal;