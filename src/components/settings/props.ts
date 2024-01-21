export interface SettingsProps {
  removeSelectedItems: () => void;
  duplicateSelectedItems: () => void;
  selectedItemsCount: number;
  isEditMode: boolean;
}
