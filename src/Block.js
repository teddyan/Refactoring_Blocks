import {React,Component} from 'react';
import ReactDOM from 'react-dom';



class Block extends Component {
  constructor(props) {
        super(props);
        this.state = {
              Red:0, 
              Green: 0, 
              Blue: 0
        };
    }
  voteAdd(index){
    if(index== "Red"){
    this.setState({ Red : this.state[index]+1});
    }if(index == "Green"){
    this.setState({ Green : this.state[index]+1});
    }if(index == "Blue"){
      this.setState({Blue : this.state[index]+1});
    }
  }
  render() {
    return (
      <div className="flex">
           {
           ["Red","Green","Blue"].map((index) => (
        　<div className="flex columnflex">
            <div className="title" title={index}>{index}</div>
            <div className={"colorDiv block"+index} title="Title Text For Block 1" onClick={()=>this.voteAdd(index)} >Click To Vote!</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <div className="votes">Votes: {this.state[index]}</div>            
            </div>
          </div>
           ))
           }
          {/* <div className="flex columnflex">
            <div className="title" title="Green">Green</div>
            <div className="colorDiv blockTwo" title="Title Text For Block 2" onClick={() => { this.setState({blockTwoVotes: this.state.blockTwoVotes + 1}) }}>Click To Vote!</div>
            <div className="description">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <div className="votes">Votes: {this.state.blockTwoVotes}</div>            
            </div>
          </div>
          /* <div className="flex columnflex">
            <div className="title" title="Green">Green</div>
            <div className="colorDiv blockTwo" title="Title Text For Block 2" onClick={() => { this.setState({blockTwoVotes: this.state.blockTwoVotes + 1}) }}>Click To Vote!</div>
            <div className="description">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <div className="votes">Votes: {this.state.blockTwoVotes}</div>            
            </div>
          </div>
          <div className="flex columnflex">
            <div className="title" title="Blue">Blue</div>
            <div className="colorDiv blockThree" title="Title Text For Block 3" onClick={() => { this.setState({blockThreeVotes: this.state.blockThreeVotes + 1}) }}>Click To Vote!</div>
            <div className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <div className="votes">Votes: {this.state.blockThreeVotes}</div>               
            </div>            
          </div>   */}
        </div>
    );
  }
}
export default Block;