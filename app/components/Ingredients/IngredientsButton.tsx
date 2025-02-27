import Button from "../Button"

interface IngredientsButtonProps extends React.ComponentPropsWithoutRef<"section"> {
    callback: () => void;
}

export default function IngredientsButton({callback}: IngredientsButtonProps){
    return (
        <section className="mt-12 max-w-9/10 xs:max-w-3/4 m-auto bg-[#f0efeb] py-7 px-10 rounded-lg flex flex-col xs:flex-row gap-2 xs:justify-between">
            <hgroup className="flex-9/10 xs:flex-3/4">
                <h3 className="text-lg/6 font-medium text-neutral-900">Ready for a recipe?</h3>
                <p className="text-gray-500 text-sm mt-2">Generate a recipe from your list of ingredients.</p>
            </hgroup>
            <Button type="button" onClick={callback} className="bg-orange-600 py-2 px-4 xs:justify-self-end flex-1 xs:width-[16ch] xs:self-center">Get a recipe</Button>
        </section>
    )
}