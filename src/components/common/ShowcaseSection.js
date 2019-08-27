import React from "react"

export const ShowcaseSection = (props) => {
    const {title, children} = props
    return (
        <section>
            <h2>{title}</h2>
            {children}
            <hr/>
        </section>
    )
}

export default ShowcaseSection
