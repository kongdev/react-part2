import React, {Component} from 'react';


class FiltersTest extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleFilterChange = this.handleFilterChange.bind(this)

  }
  
  
  handleFilterChange(e){
   
    var value = e.target.value;
   console.log(value);
    this.props.updateFilter(value);
  }
  render() {
    return (
    
        <input type="text" ref="filterInput" onChange={this.handleFilterChange} placeholder="Filter" />
     
    );
  }
}


class ListTest extends React.Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong'],
      nameFilter: ''
    };

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
  }

  handleFilterUpdate(val) {
    console.log(val)
    this.setState({
      nameFilter: val
    });
  }
  
  render() {

    var displayedItems = this.state.listItems.filter(function (item) {
      var match = item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      return (match !== -1);
    }.bind(this));



    var content;
    if (displayedItems.length > 0) {
      var items = displayedItems.map(function (item, index) {
        return <li key={index}>{item}</li>;
      });
      content = <ul>{items}</ul>
    } else {
      content = <p>No items matching this filter</p>;
    }

    return (
      <div>
        <FiltersTest updateFilter={this.handleFilterUpdate} />
        <h4>Results</h4>
        {content}
      </div>
    );
  }
}


export default ListTest;