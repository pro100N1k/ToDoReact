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



  // class TodoApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {items: [], text: ''};
  //
  //     this.handleAddItem = this.handleAddItem.bind(this);
  //     this.handleClearAll = this.handleClearAll.bind(this);
  //     this.handleDeleteItem = this.handleDeleteItem.bind(this);
  //     this.handleTextChange = this.handleTextChange.bind(this);
  //   }
  //
  //   handleTextChange = (e) => {
  //     this.setState({
  //       text: e.target.value
  //     });
  //   }
  //
  //   handleAddItem = (e) => {
  //     let newItem = {
  //       id: Date.now(),
  //       text: this.state.text,
  //       done: false
  //     };
  //     this.setState((prevState) => ({
  //       items: prevState.items.concat(newItem),
  //       text: ""
  //     }));
  //   }
  //
  //   handleDeleteItem(itemId) {
  //     let updatedItems = this.state.items.filter(item => {
  //       return item.id !== itemId;
  //     });
  //
  //     this.setState({
  //       items: [].concat(updatedItems)
  //     });
  //   }
  //
  //   handleClearAll =()=> {
  //
  //   }
  //
  //   markItemCompleted(itemId) {
  //     let updatedItems = this.state.items.map(item => {
  //       if (itemId === item.id)
  //         item.done = !item.done;
  //
  //       return item;
  //     });
  //
  //     // State Updates are Merged
  //     this.setState({
  //       items: [].concat(updatedItems)
  //     });
  //   }
  //
  //   render() {
  //
  //     return (
  //         <div className="todo">
  //           <div className="todo__header">
  //             <div className="todo__title">Todo</div>
  //             <div className="input-wrapper todo__input-wrapper">
  //               <input type="text" onChange={this.handleTextChange}  className="todo__input"/>
  //             </div>
  //             <div className="todo__btn-wrapper">
  //               <button className="todo__btn" onClick={this.handleAddItem} disabled={!this.state.text}>Add Task</button>
  //             </div>
  //             <div className="todo__clear">
  //               <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png"
  //                    alt="Clear"/>
  //             </div>
  //           </div>
  //           <p>{this.state.value}</p>
  //           <div className="todo__body">
  //             <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
  //           </div>
  //         </div>
  //     )
  //   }
  // }
  //
  // class TodoList extends React.Component {
  //   render() {
  //     return (
  //         <div>
  //           <ul>
  //             {this.props.items.map(item => (
  //                 <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
  //             ))}
  //           </ul>
  //         </div>
  //     )
  //   }
  // }
  //
  // class TodoItem extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //
  //   markCompleted = () => {
  //     this.props.onItemCompleted(this.props.id);
  //   }
  //
  //   deleteItem = () => {
  //     this.props.onDeleteItem(this.props.id);
  //   }
  //
  //
  //   render() {
  //     let itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
  //
  //     return (
  //         <li className={itemClass}>
  //           <label className="form-check-label">
  //             <input type="checkbox" className="form-check-input" onChange={this.markCompleted} />
  //             {this.props.text}
  //           </label>
  //           <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
  //         </li>
  //     );
  //   }
  // }

  class TodoApp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        items: [],
        text: "",
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
      console.log(message);

      let updateItems = this.state.items.filter( item => {
        return item.id !== itemId;
        console.log('update' + updateItems);
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

      console.log('Console in TodoItem constructor' + this.props);
    }

    markCompleted(event) {
      this.props.onItemCompleted(this.props.id);
    }


    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
    }

    updateItem(event) {
      this.props.onUpdateItem(this.props.id);
      console.log(this.props.id);
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
              <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
              <button type="button" className="btn btn-danger btn-sm" onClick={this.updateItem}>1</button>
            </label>
            <label htmlFor="">
              <span className="todo__text">{this.props.text}</span>
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


  // class Input extends React.Component{
  //   constructor(props) {
  //     super(props);
  //     this.state = {value:''};
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //
  //   handleChange(e) {
  //     this.setState({ value: e.target.value });
  //   }
  //
  //   render () {
  //     return (
  //         <div>
  //           <input type="text" onChange={this.handleChange}/>
  //           <div className="text">{this.state.value}</div>
  //         </div>
  //     )
  //   }
  // }

  // class SimpleSlider extends React.Component {
  //   render() {
  //     const settings = {
  //       dots: true,
  //       infinite: true,
  //       speed: 500,
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     };
  //     return (
  //         <div className="slider">
  //           <h2 className="slider__title"> Single Item</h2>
  //           <Slider {...settings}>
  //             <div className="slider-item-wrapper">
  //               <div className="slider-item">
  //                 <div className="slider__info">
  //                   <h3>1</h3>
  //                 </div>
  //                 <div className="slider__img"></div>
  //               </div>
  //             </div>
  //             <div className="slider-item-wrapper">
  //               <div className="slider-item">
  //                 <div className="slider__info">
  //                   <h3>2</h3>
  //                 </div>
  //                 <div className="slider__img"></div>
  //               </div>
  //             </div>
  //             <div className="slider-item-wrapper">
  //               <div className="slider-item">
  //                 <div className="slider__info">
  //                   <h3>3</h3>
  //                 </div>
  //                 <div className="slider__img"></div>
  //               </div>
  //             </div>
  //             <div className="slider-item-wrapper">
  //               <div className="slider-item">
  //                 <div className="slider__info">
  //                   <h3>4</h3>
  //                 </div>
  //                 <div className="slider__img"></div>
  //               </div>
  //             </div>
  //           </Slider>
  //         </div>
  //     );
  //   }
  // }

  // class Toggle extends React.Component{
  //   constructor(props) {
  //     super(props);
  //     this.state = { isActive: true }
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //
  //   handleClick() {
  //     this.setState(state => ({
  //       isActive: !state.isActive
  //     }));
  //   }
  //
  //   render() {
  //     return (
  //         <button onClick={this.handleClick}>
  //           {this.state.isActive ? "YES" : "NO"}
  //         </button>
  //     )
  //   }
  // }
  // A little enhanced of Facebook's React TODO example.
// Want to be looked Reminder alike.


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
