export interface UserItemProps {
  user: any;
  onCheck: (id: number, isChecked: boolean) => void;
  selectedItems: number[];
  isEditMode: boolean;
}
