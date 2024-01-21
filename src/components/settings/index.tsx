import "./style.css";
import Delete from "./delete-button";
import Duplicate from "./duplicate-button";
import Selection from "./selection";
import { SettingsProps } from "./props";

const Settings = ({
  removeSelectedItems,
  duplicateSelectedItems,
  selectedItemsCount,
  isEditMode,
}: SettingsProps) => {
  // Render
  return (
    <div className="settingsContainer">
      <div className="settingsContainerLeft">
        <Selection selectedItemsCount={selectedItemsCount} />
      </div>
      {isEditMode && (
        <div className="settingsContainerRight">
          <Duplicate duplicateSelectedItems={duplicateSelectedItems} />
          <Delete removeSelectedItems={removeSelectedItems} />
        </div>
      )}
    </div>
  );
};

export default Settings;
