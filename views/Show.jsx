const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { _id, title, date, thoughts } = this.props.blog;
        return (
            <Default>
                <div class="jumbotron">
                <h1 class="mb-4 ml-4 text-light bg-dark text-center">{title}</h1>
                    <div class="container">
                        <div class="card mt-4">
                            <div class="card-body bg-light text-dark">
                                <div class="card-subtitle text-muted mb-2">
                                    {date}
                                </div>
                                <div class="card-text">
                                    {thoughts}
                                </div>
                                <form action={`/blog/`} method="POST">
                                    <input class="mt-4 btn btn-dark" type="submit" value="Back"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>             
            </Default>
        )
    }
}

module.exports = Show;