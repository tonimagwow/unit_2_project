const React = require('react');

class New extends React.Component {
    render() {
      let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();
    console.log(newDate)
    console.log(date)
    console.log(month)
    console.log(year)

let newDateString = month + "/" + date + "/" + year
console.log(newDateString)
      return (
          <div>
              <h1>What's on your mind?</h1>

              <form action="/blog" method="POST">
                  Blog Title: <input type="text" name="title" /><br/>
                  <input type="text" name="date" style={{display:"none"}} value={newDateString} />
                  Thoughts: <textarea name="thoughts" value="Write your thoughts!"></textarea><br/>
                  <input type="submit" name="" value="Submit Post"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;