type RecipeProps = {
    html: string | TrustedHTML
}

export default function Recipe({html}: RecipeProps){
    return (
        <section dangerouslySetInnerHTML={{__html: html}} className="max-w-3/4 m-auto mt-12 text-lg markdown">
            
        </section>
    )
}