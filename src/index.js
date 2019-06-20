import React from 'react';
import ReactDOM from 'react-dom';
import index from "./js/index"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);