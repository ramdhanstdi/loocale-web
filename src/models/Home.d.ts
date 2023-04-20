export interface ShareCardInterface {
	displayName: string
	username: string
	story: string
	location: string
	image: string
	profilepic: string
}

export interface DiscoverListInterface {
	id: number
	image: string
	location: string
	href: string
}

export interface CommunityListInterface {
	id: number
	background: string
	title: string
	count?: number
}