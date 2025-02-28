import Button from "../Button"

interface IngredientsButtonProps extends React.ComponentPropsWithoutRef<"section"> {
    callback: () => void;
    isLoading: boolean;
}

export default function IngredientsButton({callback, isLoading}: IngredientsButtonProps){
    return (
        <section className="mt-12 max-w-9/10 xs:max-w-3/4 m-auto bg-[#f0efeb] py-7 px-10 rounded-lg flex flex-col xs:flex-row gap-2 xs:justify-between">
            <hgroup className="flex-9/10 xs:flex-3/4">
                <h3 className="text-lg/6 font-medium text-neutral-900">Ready for a recipe?</h3>
                <p className="text-gray-500 text-sm mt-2">Generate a recipe from your list of ingredients.</p>
            </hgroup>
            <Button disabled={isLoading} type="button" onClick={callback} className='py-2 px-2 xs:justify-self-end flex-1 xs:basis-[14ch] xs:self-center w-full  bg-orange-600 disabled:bg-fuchsia-700 disabled:cursor-progress'>
                {isLoading ? <div className="flex w-full"><p className="animate-side ">👩‍🍳</p><p className=" after:content-end after:inline-block after:absolute   after:text-white after:animate-dots">Processing</p></div> : "Get a recipe"}</Button>
        </section>
    )
}