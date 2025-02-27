

export default function IngredientItem({children}: React.ComponentPropsWithRef<"li">){
    return (
        <li className="py-2">
            <p className="text-lg/8 capitalize text-slate-600">{children}</p>
        </li>
    )
}