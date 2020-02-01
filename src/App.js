import React from 'react';
import './App.scss';

// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import Slider from 'react-slick';
// import Calculator from "./Calculator/Calculator";

// import Header from "./Header/Header";
// import Sidebar from "./Sidebar/Sidebar";
// import Footer from "./Footer/Footer";

function App() {

  class TodoApp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        items: [],
        text: "",
        updateText: "",
        time: new Date(1),

      };

      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
      this.markItemCompleted = this.markItemCompleted.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
      this.handleUpdateItem = this.handleUpdateItem.bind(this);
    }

    handleTextChange = (e) => {
      this.setState({text: e.target.value});
    }

    handleAddItem = (e) => {
      e.preventDefault();

      let newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false
      };

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ""
      }));
    }

    markItemCompleted(itemId) {
      var updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.done = !item.done;

        return item;
      });

      this.setState({
        items: [].concat(updatedItems)
      });
    }

    handleDeleteItem(itemId) {
      let updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });


      this.setState({
        items: [].concat(updatedItems)
      });
    }

    handleUpdateItem(itemId) {

      let message = window.prompt('Message','');

      this.state.items.filter( item => {

        if(item.id === itemId) {

            this.setState({
                updateText : message,
            });
        }

      });


    }

    render() {
      return (
          <div className="todo">
            <div className="todo-head">
              <h3 className="todo__title">MY TO DO LIST</h3>
              <form className="actions">
                <div className="input-wrapper">
                  <input type="text" className="input__text" onChange={this.handleTextChange} value={this.state.text} />
                </div>
                <div className="btn-wrapper">
                  <button className="btn input__btn" onClick={this.handleAddItem} disabled={!this.state.text}>Add</button>
                </div>
              </form>
              <div className="todo-counter-wrapper">Cont tasks: <span className="todo-counter">{(this.state.items.length <= 0 ? 0 : this.state.items.length)}</span></div>
            </div>
            <div className="todo-body">
              <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} onUpdateItem={this.handleUpdateItem} />
            </div>
          </div>
      );
    }
  }

  class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.markCompleted = this.markCompleted.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.updateItem = this.updateItem.bind(this);
    }

    markCompleted(event) {
      this.props.onItemCompleted(this.props.id);
    }


    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
    }

    updateItem(event) {
      this.props.onUpdateItem(this.props.id);
    }

    render() {
      let itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
      let value = "todo__time" + (this.props.time);

      return (
          <li className={itemClass} >
            <label className="form-check-label">
              <span className={value}></span>
              <span className="checkbox-wrapper">
                <input type="checkbox" className="form-check-input" onChange={this.markCompleted} />
              </span>
              <button type="button" className="btn todo__btn" onClick={this.deleteItem}>x</button>
              <button type="button" className="btn todo__btn" onClick={this.updateItem}>1</button>
            </label>
            <label htmlFor="">
              <span className="todo__text">{this.props.text}{this.props.updateText}</span>
            </label>
          </li>
      );
    }
  }

  class TodoList extends React.Component {
    render() {
      let listClass="todolist list "+ ( typeof this.props.items !== 'undefined' && this.props.items.length > 0? "fill" : "empty");
      return (
          <ul className={listClass}>
            {this.props.items.map(item => (
                <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} onUpdateItem={this.props.onUpdateItem}/>
            ))}
          </ul>
      );
    }
  }

  // View Main App

  return (
      <div className="App">

        {/*<Header />*/}

        <main className="main">
          <div className="banner">
          </div>

          {/*<div className="slider-wrapper">*/}
          {/*  <SimpleSlider/>*/}
          {/*</div>*/}

          {/*<Sidebar />*/}
          <div className="todo-wrapper">
          <TodoApp />
          </div>

          <div className="calculate-wrapper">
            {/*<Input/>*/}
            {/*<Calculator />*/}
          </div>

        </main>

        {/*<Footer className="App-footer" />*/}
      </div>
  );

}


export default App;
