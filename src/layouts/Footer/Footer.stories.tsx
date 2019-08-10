import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Footer from "./Footer";

const stories = storiesOf("layouts/Footer", module);

stories.add("default", () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
));
