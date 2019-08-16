import { storiesOf } from "@storybook/react";
import React from "react";
import SendContentItemModal from "./SendContentItemModal";

const stories = storiesOf("modals/SendContentItemModal", module);

stories.add("default", () => <SendContentItemModal />);
