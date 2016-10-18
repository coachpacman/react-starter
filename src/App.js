var React = require('react')
var MyList = require('./MyList')
var MyTable = require('./MyTable')

var names = [
  "Michael",
  "Jason",
  "Dustin",
  "Tim",
  "Ryan",
  "Carrie",
  "Jeff",
  "Jai Marie"
]

var App = React.createClass({
  render:function() {
    return (
      <div>
        <MyList names={names} />
        <MyTable />
      </div>
    )
  }
})

module.exports = App