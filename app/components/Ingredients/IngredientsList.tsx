

export default function IngredientsList({children}: React.ComponentPropsWithoutRef<"ul">){
    return (
        <>
            <h2 className="dark:text-gray-50 max-w-3/4 m-auto mt-12 text-2xl xs:text-3xl font-semibold">Ingredients on hand:</h2>
            <ul className="max-w-3/4 m-auto marker:bg-amber-900 pl-4 text-sm text-gray-500">
                {children}
            </ul>
        </>
    )
}