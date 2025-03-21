interface RecipeProps extends React.ComponentPropsWithRef<"section"> {
    html: string | TrustedHTML
}

export default function Recipe({html, ref}: RecipeProps){
    return (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        // biome-ignore lint/security/noDangerouslySetInnerHtmlWithChildren: it is not actually dangerous this html has been sanitised by remark
        <section ref={ref} dangerouslySetInnerHTML={{__html: html}} className="max-w-3/4 m-auto mt-12 text-lg markdown">
            
        </section>
    )
}