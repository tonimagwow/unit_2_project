const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { blog } = this.props;
        return (
            <Default>
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="mb-4 text-light bg-dark text-center">Antonio's Super Cool Blog</h1>
                        <nav>
                            <a href="/blog/new" class="btn btn-success">Create a New Post</a>
                        </nav>
                        <div>
                            {
                            blog.map((blog, i) => {
                                return (
                                <div class="card mt-4">
                                    <div class="card-body bg-light text-dark">
                                        <div class="card-title">
                                            Check out my post about <a href={`/blog/${blog._id}`}>{blog.title}</a>
                                        </div>
                                        <div class="card-subtitle text-muted mb-2">
                                            {blog.date}
                                        </div>
                                        <div class="card-text">
                                            {blog.thoughts}
                                        </div>
                                        <form action={`/blog/${blog._id}?_method=DELETE`} method="POST">
                                            <a class="mr-2 mt-3 btn btn-info"href={`/blog/${blog._id}/edit`}>Edit Post</a>
                                            <input class="mt-3 btn btn-danger" type="submit" value="Delete"/>
                                        </form>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Index;