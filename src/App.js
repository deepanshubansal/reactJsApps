import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComp'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    comment : { content: '', clength: 0}
  }

  commentLength = (event) => {
    let xcontent = event.target.value;
    let xclength = xcontent.length;
    this.setState({
      comment:{content: xcontent, clength: xclength}
    })
  }

  removeChar = (charIndex) => {
    console.log("delete char :" + this.state.comment.content[charIndex]);
    let xcontent = this.state.comment.content;
    console.log("temp: " + xcontent + " type: " + typeof(xcontent));
    xcontent = xcontent.split('');
    console.log("content: " + xcontent + " and type: " + typeof(xcontent));
    xcontent.splice(charIndex,1,'');
    xcontent= xcontent.join('');
    console.log("new content: " + xcontent + " and type: " + typeof(xcontent));
    const xclength = xcontent.length;
    
    this.setState({
      comment:{content: xcontent, clength: xclength}
      //comment:{content: xcontent} // undefined length
    });
    console.log("comment length: " + this.state.comment.content.clength);
  }

  render() {
    let displayCharComponents = null;
    //let charCount = this.state.comment.clength;
    let charArr = this.state.comment.content;
    charArr = charArr.split('');
    console.log(charArr);
    
    displayCharComponents = (
      <div>
        {
          charArr.map( (individualChar,index) => {
            return (
              <CharComponent
              xchar={individualChar}
              delChar = {this.removeChar.bind(this,index)} >
              </CharComponent>
            );
          }
          )
        }
      </div>
    )

    return (
      <div className="App">
        <input type='text' onChange = {(event) => this.commentLength(event)} 
          placeholder="Type your comment here!!" size="50"  value={this.state.comment.content}/>
        <br/>chars used: {this.state.comment.clength}
        <ValidationComponent clength={this.state.comment.clength} />
        {displayCharComponents}
      </div>
    );
  }
}

export default App;
