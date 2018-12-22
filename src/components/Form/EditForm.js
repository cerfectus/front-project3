import React from "react";
import { form, Label, Input, Button } from "reactstrap";

class EditForm extends React.Component {
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
  render() {
    let { Title, Location, date, Time, Players } = this.state.form;
    return (
      <div>
          
        <div className="boxes">
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <Label htmlFor="">Title</Label>
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
        </div>
      </div>
    );
  }
}
export default EditForm;
