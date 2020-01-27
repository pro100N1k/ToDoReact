import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Slider from 'react-slick';
import './App.scss';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {

  const scaleTable = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

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
        time: new Date(1)
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

      let time = new Date().toLocaleDateString();

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

      let updateItems = this.state.items.filter( item => {
        return item.id !== itemId;
        // let message = window.prompt('Message','');
        // item.text = message;
        // this.setState({text: item.text});
        // console.log(1);
        // console.log(message);

        console.log(updateItems);
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
                  <button className="btn input__btn" onClick={this.handleAddItem} disabled={!this.state.text}>{"Add #" + (this.state.items.length + 1)}</button>
                </div>
              </form>
            </div>
            <div className="todo-body">
              <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} onUpdateItem={this.handleUpdateItem}/>
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
      console.log(this.props.id);
    }

    message(e) {
      let message = window.prompt('Age');
      console.log(message);
    }

    render() {
      let itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
      let value = "todo__time" + (this.props.time);
      // let time = new Date().toLocaleTimeString();
      return (
          <li className={itemClass} >
            <label className="form-check-label">
              <span className={value}></span>
              <span className="checkbox-wrapper">
                <input type="checkbox" className="form-check-input" onChange={this.markCompleted} />
              </span>
              <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
              <button type="button" className="btn btn-danger btn-sm" onClick={this.message}>1</button>
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

  class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
          <div className="slider">
            <h2 className="slider__title"> Single Item</h2>
            <Slider {...settings}>
              <div className="slider-item-wrapper">
                <div className="slider-item">
                  <div className="slider__info">
                    <h3>1</h3>
                  </div>
                  <div className="slider__img"></div>
                </div>
              </div>
              <div className="slider-item-wrapper">
                <div className="slider-item">
                  <div className="slider__info">
                    <h3>2</h3>
                  </div>
                  <div className="slider__img"></div>
                </div>
              </div>
              <div className="slider-item-wrapper">
                <div className="slider-item">
                  <div className="slider__info">
                    <h3>3</h3>
                  </div>
                  <div className="slider__img"></div>
                </div>
              </div>
              <div className="slider-item-wrapper">
                <div className="slider-item">
                  <div className="slider__info">
                    <h3>4</h3>
                  </div>
                  <div className="slider__img"></div>
                </div>
              </div>
            </Slider>
          </div>
      );
    }
  }

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

  class Input extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value:''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    render () {
      return (
          <div>
            <input type="text" onChange={this.handleChange}/>
            <div className="text">{this.state.value}</div>
          </div>
      )
    }
  }

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    console.log(output);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p className="conclusion">The water would boil.</p>;
    }
    return <p className="conclusion">The water would not boil.</p>;
  }

  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }

    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
          <fieldset>
            <legend align="left">Enter temperature in {scaleTable[scale]}:</legend>
            <div className="input-wrapper">
              <input value={temperature} onChange={this.handleChange} />
              <span className="inputBorder"></span>
            </div>
          </fieldset>
      );
    }
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }

    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

      return (
          <div className="calculate">
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
          </div>
      );
    }
  }


  // View Main App

  return (
      <div className="App">

        <Header />
        {/*<header className="App-header header">*/}
        {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://reactjs.org"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*  <Timer />*/}

        {/*  /!*<Toggle/>*!/*/}
        {/*</header>*/}

        <main className="main">
          <div className="banner">
          </div>

          <div className="slider-wrapper">
            <SimpleSlider/>
          </div>

          <Sidebar />
          <div className="todo-wrapper">
          <TodoApp />
          </div>

          <div className="calculate-wrapper">
            <Input/>
            <Calculator />
          </div>

        </main>



        <Footer className="App-footer" />
      </div>
  );

}


export default App;
