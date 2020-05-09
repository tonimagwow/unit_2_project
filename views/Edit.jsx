const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, title, date, thoughts } = this.props.blog;
        return (
            <div>
                <h1>Edit Page</h1>
                {/* url - /blog/id_of_blog? parameter to indicate the request */}
                <form action={`/blog/${_id}?_method=PUT`} method="POST">
                    Blog Title: <input type="text" name="title" defaultValue={title}/> <br/>
                    Date: <input type="text" name="date" defaultValue={date}/> <br/>
                    thoughts: <textarea type="text" name="thoughts" defaultValue={thoughts}></textarea>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;