

export default function IngredientsList({children}: React.ComponentPropsWithoutRef<"ul">){
    return (
        <>
            <h2 className="max-w-3/4 m-auto mt-12 text-3xl font-semibold">Ingredients on hand:</h2>
            <ul className="max-w-3/4 m-auto list-disc pl-4 text-sm text-gray-500">
                {children}
            </ul>
        </>
    )
}