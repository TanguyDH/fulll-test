import "./style.css";
import { DuplicateProps } from "./props";

const Duplicate = ({ duplicateSelectedItems }: DuplicateProps) => {
  return (
    <div className="duplicateIcon" onClick={duplicateSelectedItems}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
      </svg>
    </div>
  );
};

export default Duplicate;
