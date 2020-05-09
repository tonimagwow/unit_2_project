const React = require('react');

class Show extends React.Component {
    render() {
        const { _id, title, date, thoughts } = this.props.blog;
        return (
            <div>
                <h1>Antonio's Thoughts</h1>
                <p>{title}</p>
                <p>{date}</p>
                <p>{thoughts}</p>
                <form action={`/blog/`} method="POST">
                    <input type="submit" name="" value="Back"/>
                </form>
                
            </div>
        )
    }
}

module.exports = Show;