import React, {Component} from 'react';

class ModalPost extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h2>Details</h2>
                                <h3>Id: {this.props.post.id}</h3>
                                <h3>Title: {this.props.post.title}</h3>
                                <h3>UserId: {this.props.post.userId}</h3>
                                <h3>Body: {this.props.post.body}</h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPost;