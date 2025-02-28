import type{ FormEventHandler } from "react";
import Button from "../Button";

interface IngredientsFormProps extends React.ComponentPropsWithRef<"form"> {
  handleSubmit: FormEventHandler<HTMLFormElement>;

}

export default function IngredientsForm({ref, handleSubmit}: IngredientsFormProps) {
  return (
    <form ref={ref} className="flex flex-wrap flex-col xs:flex-row gap-3 max-w-9/10 xs:max-w-3/4 m-auto" onSubmit={handleSubmit}>
        <p className="basis-full">
          Enter a list of ingredients you would like the Chef to turn into a potential recipe.
          When you have 4 ingredients, you will get the option to get a recipe.
        </p>
        <input required placeholder="e.g. oregano" className="border-gray-300 focus:outline-green-600 focus:outline-2 rounded-md border  placeholder-gray-500 text-gray-500 p-2 text-sm flex-1 xs:flex-3/5"aria-label="enter the ingredients here you want Chef Claude to include in the potential recipe" type="text" id="ingredients" name="ingredients" />
        <Button className="flex-1 xs:basis-[16ch] p-2 text-center font-medium bg-neutral-950 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 rounded-md hover:bg-green-600 "type="submit">+ Add Ingredient</Button>
    </form>
  );
}