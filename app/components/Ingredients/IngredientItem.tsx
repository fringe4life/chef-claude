import Button from "../Button";

interface IngredientItemProps extends React.ComponentPropsWithoutRef<"li"> {
    callback: (ingredient: string) => void;
}

export default function IngredientItem({children, callback}: IngredientItemProps){
    return (
        <li className="py-2 flex justify-between ">
            <p className="before:content-['*'] before:pr-2 before:align-middle text-lg/8 capitalize text-slate-600">{children}</p>
            <Button className="border font-extrabold hover:bg-red-600 hover:text-white" onClick={() => callback(children as string)} aria-label={`delete the ${children} from your ingredients list?`}>X</Button>
        </li>
    )
}