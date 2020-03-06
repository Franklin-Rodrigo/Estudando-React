import React, { Component } from 'react';
import './style.css';
import api from '../../services/api'

class Home extends Component {
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
        <div>
          <div className="container search-box">
            <form className="flex">
              <input className="form-control form-control-lg" placeholder="Summoner Name"/>
              <button className="btn btn-secondary btn-lg" type="submit">Search</button>
            </form>
          </div>
          

          <div className="bg-light">
            <div className="container">
              <div className="results-box">
                <span>Page result</span>
              </div>
            </div>
          </div>
          </div>
    );
  }
}

export default Home;