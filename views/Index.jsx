const React = require('react');

class Index extends React.Component {
    render() {
        const { blog } = this.props;
        return (
            <div>
                <h1>Antonio's Thoughts</h1>
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
                                    {/* <a href={`/blog/${blog._id}?_method=DELETE`}>Delete Post</a><br/> */}
                                    <a href={`/blog/${blog._id}/edit`}>Edit Post</a> <br/>
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