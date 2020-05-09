const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { _id, title, date, thoughts } = this.props.blog;
        return (
            <Default>
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="mb-4 ml-4 text-light bg-dark text-center">Make that post even better!</h1>
                        <div class="card mt-4">
                            <div class="card-body bg-light text-dark">
                                <form action={`/blog/${_id}?_method=PUT`} method="POST">
                                    Blog Title: <input class="form-control" type="text" name="title" defaultValue={title}/><br/>
                                    Thoughts: <textarea class="form-control" type="text" name="thoughts" rows="4" cols="50" defaultValue={thoughts}></textarea><br/>
                                    <input class="btn btn-primary" type="submit" value="Submit Changes"/>
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

module.exports = Edit;