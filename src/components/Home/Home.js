import React, { Component } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import { getPosts } from "../../service";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      clicks: 0
    };
    this.base_url = "http://localhost:3000/api";
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (!token) return this.props.history.push("/login");
    getPosts(token)
      .then(res => {
        let posts = res.data.posts;
        this.setState({ posts });
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  editItem = post => {
    console.log("hola", post);
  };

  deleteItem = id => {
    axios.delete(`${this.base_url}/posts/${id}`).then(() => {
      let { posts } = this.state;
      posts = posts.filter(post => {
        return post._id !== id;
      });
      this.setState({ posts });
    });
  };

  sumar = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  showsumar = () => {
    this.setState({clicks: this.state.clicks})
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="box">
        {posts.length > 0 ? (
          <div>
            {posts.map(post => (
              <ListItem
                deleteItem={this.deleteItem}
                key={post._id}
                {...post}
                post={post}
                editItem={this.editItem}
                sumar={this.sumar}
              />
            ))}
          </div>
        ) : (
          <strong>No hay nada</strong>
        )}
      </div>
    );
  }
}

export default Home;
