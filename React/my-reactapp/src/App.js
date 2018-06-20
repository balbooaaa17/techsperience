import React, { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);

      // init state
      this.state = {
         title: ''
      }

      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.setState({
         title: e.target.value
      });
   }

   render() {
      return (
         <div className="App">
            <h1>{ this.state.title }</h1>
            <form>
               <input value={this.state.title} onChange={this.onChange} type="text" />
            </form>
         </div>
      );
   }
}

export default App;