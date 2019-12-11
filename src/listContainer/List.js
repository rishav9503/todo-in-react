import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import {
  Row,
  //   Col,
  //   ButtonToolbar,
  InputGroup,
  InputGroupAddon,
  Input,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { MdRadioButtonUnchecked, MdInfo } from "react-icons/md";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: "morning walk",
          id: 0
        }
      ],
      todoName: "",
      add: false
    };
  }

  addTodo() {
    // Assemble data
    const todo = { text: this.state.todoName, id: this.state.list.length };
    if (this.state.todoName === "") {
      alert("To do name cannot be empty string.");
    } else {
      // Update data
      this.state.list.push(todo);
      // Update state
      this.setState({ list: this.state.list, todoName: "" });
    }
  }
  render() {
    // const classes = useStyles();
    return (
      <div style={{ backgroundColor: "#000", flex: 1 }}>
        <Row
          style={{
            backgroundColor: "black",
            justifyContent: "space-between",
            padding: 30
          }}
        >
          <span style={{ color: "yellow" }}>Todo</span>

          <MdAdd
            color="#fff"
            size={35}
            style={{ borderWidth: 1, backgroundColor: "#2c2c2c" }}
            onClick={() => this.setState({ add: true })}
          />
        </Row>
        <ListGroup>
          {this.state.list.map(item => (
            <ListGroupItem
              style={{
                backgroundColor: "#000000",
                justifyContent: "flex-start",
                alignItems: "flex-start",

                paddingLeft: 50
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <MdRadioButtonUnchecked color="#fff" />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#fff" }}
                  primary={item.text}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        style={{ display: "inline" }}
                        color="textPrimary"
                      >
                        {item.text}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />

                <ListItemSecondaryAction></ListItemSecondaryAction>
              </ListItem>
              <Divider
                style={{ backgroundColor: "#fff" }}
                variant="inset"
                component="li"
              />
            </ListGroupItem>
          ))}
        </ListGroup>

        {this.state.add && (
          <div style={{ background: "black" }}>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                style={{
                  width: 100,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: 20
                }}
              >
                <MdRadioButtonUnchecked color="#fff" />
              </InputGroupAddon>
              <Input
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderColor: "#fff",
                  borderBottomWidth: 1,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0
                }}
                onChange={e => {
                  this.setState({ todoName: e.target.value });
                }}
                value={this.state.todoName}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    this.addTodo();
                  }
                }}
              />
            </InputGroup>
          </div>
        )}
      </div>
    );
  }
}
