var React = require('react');
var ReactDOM = require('react-dom');

/*
  App
*/

var App = React.createClass({
  render : function(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          {/* <Fish />
          <Fish />
          <Fish />
          <Fish /> */} 
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
  Header
  <Header />
*/
var Header = React.createClass({
  render : function(){
    return(
      <div>
        <p>Header</p>
      </div>
    )
  }
});

/*
  Order
  <Order />
*/
var Order = React.createClass({
  render : function(){
    return(
      <div>
        <p>Order</p>
      </div>
    )
  }
});

/*
  Inventory
  <Inventory />
*/
var Inventory = React.createClass({
  render : function(){
    return(
      <div>
        <p>Inventory</p>
      </div>
    )
  }
});


/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
  render : function(){
    var name = "Tory";
    return(
      <form className="store-selector">
        {/* Comments go in here!*/}
        <h2>Please enter a store {name}</h2>
        <input type="text" ref="storeId" required/>
        <input type="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
