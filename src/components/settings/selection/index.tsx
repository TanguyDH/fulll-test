import "./style.css";
import { SelectionProps } from "./props";

const Selection = ({ selectedItemsCount }: SelectionProps) => {
  return (
    <div>
      <strong>{selectedItemsCount}</strong> elements selected
    </div>
  );
};

export default Selection;
