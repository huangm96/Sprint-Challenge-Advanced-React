import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PlayersList from "./components/PlayersList";





test("should have text [player name]", async () => {
  const { findByText } = await render(<app />);
  findByText(/alex morgan/i);
});