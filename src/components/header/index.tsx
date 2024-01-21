import "./style.css";
import { HeaderProps } from "./props";

const Header = ({ setIsEditMode, isEditMode }: HeaderProps) => {
  // Functions
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  // Render
  return (
    <div className="header">
      <h2> Github Search</h2>
      <button onClick={toggleEditMode}>
        {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
      </button>
    </div>
  );
};

export default Header;
