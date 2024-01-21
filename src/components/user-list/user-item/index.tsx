import React from "react";
import "./style.css";
import { UserItemProps } from "./props";

const UserItem: React.FC<UserItemProps> = ({
  user,
  onCheck,
  selectedItems,
  isEditMode,
}) => {
  // Check if user.id is in selectedItems
  const isChecked = selectedItems.includes(user?.id);

  // Handle item click
  const handleItemClick = () => {
    // Toggle check status
    if (user?.id && isEditMode) {
      onCheck(user.id, !isChecked);
    }
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  // Render
  return (
    <div className="userItemContainer" onClick={handleItemClick}>
      {isEditMode && (
        <input
          className="userItemCheckbox"
          type="checkbox"
          onChange={(e) => onCheck(user?.id, e.target.checked)}
          checked={isChecked}
          onClick={handleCheckboxClick}
        />
      )}
      <img className="userItemAvatar" src={user?.avatar_url} alt="Avatar" />
      <h4 className="userItemText">Id: {user?.id}</h4>
      <h4 className="userItemText">Login: {user?.login}</h4>
      {user?.url && (
        <a
          className="userItemButton"
          href={user?.url}
          target="_blank"
          rel="noreferrer"
        >
          View profile
        </a>
      )}
    </div>
  );
};

export default UserItem;
