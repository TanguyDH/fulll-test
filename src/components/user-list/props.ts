export interface UserProps {
  id: number;
  login: string;
}

export interface UserListProps {
  query: string;
  users: UserProps[];
  setUsers: (users: UserProps[]) => void;
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedItems: number[];
  isEditMode: boolean;
}
