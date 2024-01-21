import React from "react";
import { mount } from "@cypress/react";
import Search from "../../src/components/search";

describe("Search Component Tests", () => {
  it("renders correctly", () => {
    mount(<Search query="" setQuery={() => {}} />);
    cy.get(".container").should("exist");
    cy.get(".input").should("have.attr", "placeholder", "Search input");
  });

  it("calls setQuery with the new value on input change", () => {
    const setQuerySpy = cy.spy().as("setQuerySpy");
    mount(<Search query="" setQuery={setQuerySpy} />);

    const testValue = "test query";
    cy.get(".input").type(testValue);
    cy.get("@setQuerySpy").should("have.been.calledWith", testValue);
  });
});
