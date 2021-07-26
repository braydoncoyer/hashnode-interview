const PostContent = ({content}) => {
    return (
        <div dangerouslySetInnerHTML={{__html: content}} className="prose-lg mx-auto"></div>
    )
}

export { PostContent }