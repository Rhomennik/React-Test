import React from "react";
import App from "../Components/App";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "../Components/Home";

// Testes de forma manual :)

it("should render the homepage for the non logged in user", () => {
  const props = {
    isLoggedIn: false,
    username: null
  };
  const app = mount(<App {...props} />);

  // Checking output
  expect(app.find(Home)).toHaveLength(0);
  expect(
    app
      .find("p")
      .at(0)
      .text()
  ).toEqual("Hello, visitor. Sign in to continue.");
});

it("should render the Homepage for the logged in user (Rhomennik)", () => {
  const props = {
    isLoggedIn: true,
    username: "Rhomennik"
  };
  const app = mount(<App {...props} />);

  // Checking output
  expect(app.find(Home)).toHaveLength(1);
  expect(
    app
      .find("p")
      .at(0)
      .text()
  ).toEqual("Welcome, Rhomennik!");

  expect(app.find("li")).toHaveLength(4);
  expect(
    app
      .find("li")
      .at(0)
      .text()
  ).toEqual("8am - Adonisjs");
  expect(
    app
      .find("li")
      .at(1)
      .text()
  ).toEqual("12:30pm - Reactjs");
  expect(
    app
      .find("li")
      .at(2)
      .text()
  ).toEqual("15pm - Graphql");
  expect(
    app
      .find("li")
      .at(3)
      .text()
  ).toEqual("20pm - Apollo client & Server");
});

it("should render the Homepage for the logged in user without tasks", () => {
  const props = {
    isLoggedIn: true,
    username: "Rhome"
  };
  const app = mount(<App {...props} />);

  // Checking output
  expect(app.find(Home)).toHaveLength(1);
  expect(
    app
      .find("p")
      .at(0)
      .text()
  ).toEqual("Welcome, Rhome!");

  // No objeto(Task) esperamo que o length seja 2 ;)
  expect(app.find("li")).toHaveLength(2);
});
