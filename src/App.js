import React, {Component} from 'react';
import Profiles from "./Component/Profiles";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      members : [
        {name:'최수민', school:'서강', major:'컴퓨터공학', 
        age:25, emotion:'행복',animal:['사자','토끼','뱀']}, //최수민 정보

        {name:'이한길', school:'홍익', major:'법학', 
        age:29, emotion:'불행',animal:['펭귄']},  //이한길 정보

        {name:'김서영', school:'이화여자', major:'사이버보안학', 
        age:22, emotion:'불행', animal:['웜','트로이목마']}  //김서영 정보
      ]
    }
  }

  render() {

    return <div className="App">

      <Profiles data={this.state.members[0]}></Profiles>
      <Profiles data={this.state.members[1]}></Profiles>
      <Profiles data={this.state.members[2]}></Profiles>
      
    </div>;

  }
}

export default App;