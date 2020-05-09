const React = require('react');
const Default = require('./Default');

class New extends React.Component {
  render() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();
    let newDateString = month + "/" + date + "/" + year
      
      return (
        <Default>
          <div class="jumbotron">
            <div class="container">
              <h1 class="mb-4 ml-4 text-light bg-dark text-center">What's on your mind?</h1>
              <div class="card mt-4">
                <div class="card-body bg-light text-dark">
                  <form action="/blog" method="POST">
                    Blog Title: <input class="form-control" type="text" name="title" /><br/>
                    <input type="text" name="date" style={{display:"none"}} value={newDateString} />
                    Thoughts: <textarea class="form-control" name="thoughts" value="Write down those deep thoughts!"></textarea><br/>
                    <input class="btn btn-primary" type="submit" value="Submit Post"/>
                    <a href="/blog/" class="ml-2 btn btn-secondary">Cancel</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Default>
        )
      }
    }
  
  module.exports = New;