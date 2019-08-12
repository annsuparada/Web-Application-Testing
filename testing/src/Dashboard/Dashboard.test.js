import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/react/cleanup-after-each'
import Dashboard from "./dashboard";


describe("<Dashboard/>", () => {
    it("renders dashboard", () => {
      const testState = {
        ball: 0,
        strike: 0,
        foul: 0,
        hit: 0
      };
      const { getByTestId } = render(
        <Dashboard
          ball={testState.ball}
          strike={testState.strike}
          foul={testState.foul}
          hit={testState.hit}
        />
      );
      const ballBtn = getByTestId("ball");
      const strikeBtn = getByTestId("strike");
      const foulBtn = getByTestId("foul");
      const hitBtn = getByTestId("hit");
      fireEvent.click(ballBtn);
      fireEvent.click(strikeBtn);
      fireEvent.click(foulBtn);
      fireEvent.click(hitBtn);
  
      expect(ballBtn).toHaveTextContent(/ball/i);
      expect(strikeBtn).toHaveTextContent(/strike/i);
      expect(foulBtn).toHaveTextContent(/foul/i);
      expect(hitBtn).toHaveTextContent(/hit/i);
    });
  });