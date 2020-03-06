import React, { Component } from 'react';
import './style.css';

class QuemSomos extends Component {
  state = {
    feed: [],
  };

//   async componentDidMount() {
//     this.registerToSocket();
//     const response = await api.get('posts');
//     this.setState({ feed: response.data });
//   }

//   registerToSocket = () => {
//     const socket = io('http://localhost:3000');
//     socket.on('post', newPost => {
//       this.setState({ feed: [newPost, ...this.state.feed] });
//     });

//     socket.on('like', likedPost => {
//       this.setState({
//         feed: this.state.feed.map(post => (post._id === likedPost._id ? likedPost : post)),
//       });
//     });
//   };

//   handleLike = id => {
//     api.post(`posts/${id}/like`);
//   };

  render() {
    return (
        
            <div className="container sobre">
                
            <div className="card mb-3 cardSobre"> 
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Sobre</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        
    );
  }
}

export default QuemSomos;