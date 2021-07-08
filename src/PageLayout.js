import {React,Component} from 'react';
import ReactDOM from 'react-dom';
import Block from './Block.js';

class PageLayout extends Component {
  constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
           <div className="heading">Heading</div>
       
<Block></Block>   
    </div>
    );
  }
}

export default PageLayout;