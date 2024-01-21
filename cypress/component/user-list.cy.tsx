import React from "react";
import { mount } from "@cypress/react";
import UserList from "../../src/components/user-list";

describe("UserList Component Tests", () => {
  const mockUsers = [
    {
      id: 1,
      login: "user1",
      avatar_url: "https://example.com/avatar1.jpg",
      url: "https://example.com/profile1",
    },
  ];

  it("renders loading state", () => {
    mount(
      <UserList
        query="test"
        users={[]}
        setUsers={() => {}}
        setSelectedItems={() => {}}
        selectedItems={[]}
        isEditMode={false}
      />
    );
    cy.contains("Loading...").should("be.visible");
  });

  it("renders error state", () => {
    mount(
      <UserList
        query="test"
        users={[]}
        setUsers={() => {}}
        setSelectedItems={() => {}}
        selectedItems={[]}
        isEditMode={false}
      />
    );
    // Trigger an error state in your component, then check for error rendering
  });

  it("renders users correctly", () => {
    mount(
      <UserList
        query="test"
        users={mockUsers}
        setUsers={() => {}}
        setSelectedItems={() => {}}
        selectedItems={[]}
        isEditMode={false}
      />
    );
    cy.get(".userListContainer")
      .children()
      .should("have.length", mockUsers.length);
  });
});
