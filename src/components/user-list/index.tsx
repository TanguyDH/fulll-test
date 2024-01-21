import { useState, useEffect, useCallback } from "react";
import UserItem from "./user-item";
import "./style.css";
import { UserListProps } from "./props";

const UserList = ({
  query,
  users,
  setUsers,
  setSelectedItems,
  selectedItems,
  isEditMode,
}: UserListProps) => {
  // Attributes
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Functions
  const handleCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems((prevItems) => [...prevItems, id]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((item) => item !== id));
    }
  };

  // Custom debounce function
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const searchUsers = useCallback(async (searchQuery: string) => {
    if (!searchQuery) {
      setUsers([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("API limit reached or network error");
      }
      const data = await response.json();
      setUsers(data.items || []);
    } catch (err) {
      setError("API limit reached or network error");
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(searchUsers, 300), []);

  // Hooks
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // Render
  return (
    <div>
      <div className="userListContainer">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && users.length === 0 && <p>No results found</p>}
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onCheck={handleCheck}
            selectedItems={selectedItems}
            isEditMode={isEditMode}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
