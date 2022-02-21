/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { InitialWindow } from "./InitialWindow";
import * as useInitialWindow from "./useInitialWindow";

describe("Initial window tests", () => {
  test("Button click calls the hook", () => {
    const setStateMock = jest.fn();
    jest.spyOn(useInitialWindow, "default").mockReturnValue(setStateMock);
    render(<InitialWindow setGame={setStateMock} />);
    fireEvent.click(screen.getByTestId("start-btn"));

    expect(setStateMock).toHaveBeenCalled();
  });
});
