import React, { Component } from "react";
import axios from "axios";
import { games } from "../../service";
import Home from "../Home/Home";
import { form, Label, Input, Button } from "reactstrap";

class Games extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        Title: "Soccer",
        Location: "Viveros",
        date: "",
        Time: "",
        Players: ""
      }
    };
  }

  componentWillMount() {
    if (!this.props.match.params.id) return;
    const base_url = "http://localhost:3000/api";
    axios.get(`${base_url}/posts/${this.props.match.params.id}`).then(res => {
      const { post } = res.data;
      this.setState({ form: post });
    });
  }

  handleChange = e => {
    const { form } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    this.setState({ form });
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form)
   games(this.state.form, this.props.history);
  };
  render() {
    let {
      Title,
      Location,
      date,
      Time,
      Players,
      
    } = this.state.form;
    return (
      <div className="boxes">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Label htmlFor="">Sport</Label>
              <Input
                type="select"
                name="Title"
                value={Title}
                onChange={this.handleChange}
              >
                <option value={"Soccer"}>Soccer</option>
                <option value={"Basketball"}>Basquetbol</option>
                <option value={"Volleyball"}>Volleybol</option>
              </Input>
            </div>
            <div>
              <Label htmlFor="">Location</Label>
              <Input
                type="select"
                name="Location"
                value={Location}
                onChange={this.handleChange}
              >
                <option value={"Viveros"}>Viveros</option>
                <option value={"Alberca"}>Alberca Olimpica</option>
                <option value={"Parque"}>Parque De Los Venados</option>
              </Input>
            </div>
            <div>
              <Label htmlFor="">
                Players:
                <Input
                  value={Players}
                  type="number"
                  name="Players"
                  onChange={this.handleChange}
                />
              </Label>
            </div>
            <div>
              <label htmlFor="">
                Date:
                <Input
                  value={date}
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <Label htmlFor="">
                Time:
                <Input
                  value={Time}
                  type="time"
                  name="Time"
                  onChange={this.handleChange}
                />
              </Label>
            </div>

            <Button type="submit" color="success">
              Crear
            </Button>
          </form>
        </div>
        <div className="home-row">
          <Home />
        </div>
      </div>
    );
  }
}

export default Games;
