import React from "react";
import { mount } from "@cypress/react";
import UserItem from "../../src/components/user-list/user-item";

describe("UserItem Component Tests", () => {
  const mockUser = {
    id: 123,
    login: "testuser",
    avatar_url: "https://example.com/avatar.jpg",
    url: "https://example.com/profile",
  };

  it("renders correctly", () => {
    mount(
      <UserItem
        user={mockUser}
        onCheck={() => {}}
        selectedItems={[]}
        isEditMode={false}
      />
    );
    cy.get(".userItemContainer").should("exist");
    cy.get(".userItemText").contains(mockUser.login);
  });

  it("checkbox appears in edit mode", () => {
    mount(
      <UserItem
        user={mockUser}
        onCheck={() => {}}
        selectedItems={[123]}
        isEditMode={true}
      />
    );
    cy.get(".userItemCheckbox").should("exist");
  });

  it("checkbox should be checked if user is selected", () => {
    mount(
      <UserItem
        user={mockUser}
        onCheck={() => {}}
        selectedItems={[123]}
        isEditMode={true}
      />
    );
    cy.get(".userItemCheckbox").should("be.checked");
  });

  it("clicking the item should call onCheck callback", () => {
    const onCheckSpy = cy.spy().as("onCheckSpy");
    mount(
      <UserItem
        user={mockUser}
        onCheck={onCheckSpy}
        selectedItems={[]}
        isEditMode={true}
      />
    );
    cy.get(".userItemContainer").click();
    cy.get("@onCheckSpy").should("have.been.called");
  });
});
