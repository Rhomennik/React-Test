import React from "react";
import App from "../Components/App";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

it("should render the homepage for the non logged in user", () => {
  const props = {
    isLoggedIn: false,
    username: null
  };
  const app = mount(<App {...props} />);
  expect(toJson(app)).toMatchSnapshot();
});

it("should render the Homepage for the logged in user (Heisenberg)", () => {
  const props = {
    isLoggedIn: true,
    username: "Rhomennik"
  };
  const app = mount(<App {...props} />);
  expect(toJson(app)).toMatchSnapshot();
});

it("should render the Homepage for the logged in user without tasks", () => {
  const props = {
    isLoggedIn: true,
    username: "Rhome"
  };
  const app = mount(<App {...props} />);
  expect(toJson(app)).toMatchSnapshot();
});
