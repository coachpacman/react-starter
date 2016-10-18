var React = require('react')

var MyList = React.createClass({
  getDefaultProps: function() {
    return {
      names:[]
    }
  },
  getInitialState: function() {
    return {
      phone:'asdf',
      background:'blue'
    }
  },
  componentWillMount: function(){

  },
  updatePhone: function(e) {
    var value = e.target.value
    this.setState({
      phone:value
    })
    console.log(this.state.phone)
  },
  changeBG: function() {
    this.setState({
      background:'red'
    })
  },
  render: function() {
    return (
      <ul style={{background:this.state.background}}>
        <input type="text" onChange={this.updatePhone} value={this.state.phone} />
        <button onClick={this.changeBG}>Change Background</button>
      </ul>
    )
  }
})

module.exports = MyList