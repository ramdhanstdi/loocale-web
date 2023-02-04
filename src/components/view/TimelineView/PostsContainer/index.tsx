import React from 'react'

interface PostsContainerProps {
	children?: React.ReactNode
}
const PostsContainer:React.FC<PostsContainerProps> = (props) => {
	return (
		<div className='w-full overflow-y-auto max-h-[calc(100vh-197px)] scrollbar-hide'>
			{props.children}
		</div>
	)
}

export default PostsContainer