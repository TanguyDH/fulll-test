import React from "react";
import { mount } from "@cypress/react";
import Settings from "../../src/components/settings";

describe("Settings Component Tests", () => {
  it("renders correctly", () => {
    mount(
      <Settings
        removeSelectedItems={() => {}}
        duplicateSelectedItems={() => {}}
        selectedItemsCount={0}
        isEditMode={false}
      />
    );
    cy.get(".settingsContainer").should("exist");
    cy.get(".settingsContainerLeft").should("exist");
    // Checking if Selection component is rendered
    cy.get(".selectionComponentClass").should("exist"); // Replace with actual class or identifier of Selection component
  });

  it("renders edit mode options when isEditMode is true", () => {
    mount(
      <Settings
        removeSelectedItems={() => {}}
        duplicateSelectedItems={() => {}}
        selectedItemsCount={0}
        isEditMode={true}
      />
    );
    // Checking if Duplicate and Delete components are rendered in edit mode
    cy.get(".duplicateComponentClass").should("exist"); // Replace with actual class or identifier of Duplicate component
    cy.get(".deleteComponentClass").should("exist"); // Replace with actual class or identifier of Delete component
  });
});
