import React from "react";
import { mount } from "@cypress/react";
import Header from "../../src/components/header";

describe("Header Component Tests", () => {
  it("renders correctly", () => {
    mount(<Header setIsEditMode={() => {}} isEditMode={false} />);
    cy.get(".header").should("exist");
    cy.contains("Github Search").should("be.visible");
    cy.contains("Enter Edit Mode").should("be.visible");
  });

  it("toggles edit mode text on button click", () => {
    const setIsEditModeSpy = cy.spy().as("setIsEditModeSpy");
    mount(<Header setIsEditMode={setIsEditModeSpy} isEditMode={false} />);

    // Initial state check
    cy.contains("Enter Edit Mode").should("be.visible");

    // Click the button to toggle edit mode
    cy.get(".header button").click();
    cy.get("@setIsEditModeSpy").should("have.been.calledWith", true);

    // Rerender with the updated 'isEditMode' prop to simulate state change
    mount(<Header setIsEditMode={setIsEditModeSpy} isEditMode={true} />);
    cy.contains("Exit Edit Mode").should("be.visible");
  });
});
