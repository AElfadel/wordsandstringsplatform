import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/Alert";
import { Input } from "../ui/Input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";

type DropdownHandler = {
  value?: string;
  onChangeHandler?: () => void;
  userEmail: string;
};

function Dropdown({ value, userEmail, onChangeHandler }: DropdownHandler) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [newCategory, setNewCategory] = useState("");

  function handleAddCategory() {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  }

  useEffect(() => {
    async function getCategories() {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    }
    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field ">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          {userEmail === process.env.Admin ? (
            <div>
              <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
                + New category
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>New category</AlertDialogTitle>
                  <Input
                    className="input-field mt-3"
                    type="text"
                    placeholder="category name"
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => startTransition(handleAddCategory)}
                  >
                    Create
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </div>
          ) : null}
        </AlertDialog>
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
