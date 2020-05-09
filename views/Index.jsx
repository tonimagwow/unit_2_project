const React = require('react');

class Index extends React.Component {
    render() {
        const { blog } = this.props;
        return (
            <div>
                <h1>Antonio's Thoughts Index</h1>
                <nav>
                    <a href="/blog/new">Create a New Post</a>
                </nav>
                <ul>
                    {
                        blog.map((blog, i) => {
                            return (
                                <li>
                                    Check out my post about <a href={`/blog/${blog._id}`}>{blog.title}</a> created on {blog.date}
                                    <br></br>
                                    <p>{blog.thoughts}</p>
                                    
                                    <form action={`/blog/${blog._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /blog/id_of_blog/edit */}
                                    <a href={`/blog/${blog._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;