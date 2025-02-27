import type{ FormEventHandler } from "react";

interface IngredientsFormProps extends React.ComponentPropsWithRef<"form"> {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export default function IngredientsForm({ref, handleSubmit}: IngredientsFormProps) {
  return (
    <form ref={ref} className="flex gap-3 max-w-3/4 m-auto" onSubmit={handleSubmit}>
        <input required placeholder="e.g. oregano" className="border-gray-300 focus:outline-green-600 focus:outline-2 rounded-md border  placeholder-gray-500 text-gray-500 p-2 text-sm flex-3/5"aria-label="enter the ingredients here you want Chef Claude to include in the potential recipe" type="text" id="ingredients" name="ingredients" />
        <button className="flex-1/5 px-2 text-center font-medium bg-neutral-950 text-neutral-50 rounded-md" type="submit">+ Add Ingredient</button>
    </form>
  );
}