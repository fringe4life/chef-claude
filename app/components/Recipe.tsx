

export default function Recipe({children}: React.ComponentPropsWithoutRef<"section">){
    return (
        <section dangerouslySetInnerHTML={{__html: children}} className="max-w-3/4 m-auto mt-12 text-lg markdown">
            
        </section>
    )
}