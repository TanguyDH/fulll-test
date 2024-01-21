import { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import UserList from "./components/user-list";
import Settings from "./components/settings";
import { UserProps } from "./components/user-list/props";

function App() {
  // Attributes
  const [users, setUsers] = useState<UserProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // Functions
  const removeSelectedItems = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedItems.includes(user.id))
    );
    setSelectedItems([]); // Clear the selection after removing
  };

  const duplicateSelectedItems = () => {
    const duplicatedUsers = users.flatMap((user) =>
      selectedItems.includes(user.id)
        ? [user, { ...user, id: generateNewId() }]
        : [user]
    );
    setUsers(duplicatedUsers);
    setSelectedItems([]);
  };

  const generateNewId = (): number => {
    // Use current timestamp for uniqueness
    const timestamp = new Date().getTime();
    // Generate a random number for added complexity
    const randomPart = Math.floor(Math.random() * 1000);
    // Convert the combined string to a number
    const id = parseInt(`${timestamp}${randomPart}`);

    return id;
  };

  return (
    <div>
      <Header setIsEditMode={setIsEditMode} isEditMode={isEditMode} />
      <Search setQuery={setQuery} query={query} />
      <Settings
        removeSelectedItems={removeSelectedItems}
        duplicateSelectedItems={duplicateSelectedItems}
        selectedItemsCount={selectedItems?.length}
        isEditMode={isEditMode}
      />
      <UserList
        query={query}
        users={users}
        setUsers={setUsers}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default App;
