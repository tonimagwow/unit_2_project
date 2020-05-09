const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>What's on your mind?</h1>

              <form action="/blog" method="POST">
                  Blog Title: <input type="text" name="title" /><br/>
                  Date: <input type="text" name="date" /><br/>
                  Thoughts: <textarea name="thoughts" value="Write your thoughts!"></textarea><br/>
                  <input type="submit" name="" value="Submit Post"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;