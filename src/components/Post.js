import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>Details</h2>
                <h3>Id: {this.props.post.id}</h3>
                <h3>Title: {this.props.post.title}</h3>
                <h3>UserId: {this.props.post.userId}</h3>
                <h3>Body: {this.props.post.body}</h3>
            </div>
        );
    }
}

export default Post;