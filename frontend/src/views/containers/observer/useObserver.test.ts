/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { useObserver } from "./useObserver";
import { renderHook } from "@testing-library/react-hooks";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";
import { mock } from "jest-mock-extended";
import { act } from "react-dom/test-utils";
import { of, throwError } from "rxjs";
import * as Snackbar from "notistack";

describe("Use Observer tests", () => {
  let callback: (response: ViewGuessResponse) => void;
  let guessResponse: ViewGuessResponse;

  beforeEach(() => {
    callback = jest.fn();
    guessResponse = new ViewGuessResponse(
      true,
      "in-progress",
      "______",
      ["a"],
      0
    );
  });
  test("Calls function passed as param", (done) => {
    const { result } = renderHook(() =>
      useObserver<ViewGuessResponse>((guessResponse) => {
        callback(guessResponse);
        done();
      })
    );

    act(() => {
      of(guessResponse).subscribe(result.current);
    });

    expect(callback).toBeCalledWith(guessResponse);
  });

  test("Handles error case", (done) => {
    const { result } = renderHook(() =>
      useObserver<ViewGuessResponse>((guessResponse) => {
        callback(guessResponse);
      })
    );

    jest.spyOn(result.current, "error");
    const error = new Error("Internal server error");

    act(() => {
      throwError(() => error).subscribe(result.current);
      done();
    });

    expect(result.current.error).toBeCalledWith(error);
  });
});

jest
  .spyOn(Snackbar, "useSnackbar")
  .mockReturnValue(mock<Snackbar.ProviderContext>());
