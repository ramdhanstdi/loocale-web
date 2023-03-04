import { CommunityListInterface } from "./Home";

export interface PostDataInterface {
	id: number;
	postText: string;
	createdAt: string;
	liked: number;
	location: string;
	userId: number;
	Comments: {
		commentText: string;
		User: UserDataInterface;
		createdAt: string;
		id: number;
		idUserComment: number;
	}[];
	User: UserDataInterface;
	updatedAt: string;
	medias: {
		PostMedia: PostMediaInterface;
		media_url: string;
	}[];
	location_detail: string | null;
	Categories: PostCategory[];
	Likes: PostLikes[]
}

export interface PostLikes {
	id: number;
	likedById: number;
	postId: number;
}

export interface PostCategory extends CommunityListInterface {
	PostCategories: {
		connectId: number;
		createdAt: string;
		postId: number;
		updatedAt: string;
	}
}

export interface UserDataInterface {
	users: {
		id?: number;
		email?: string;
		full_name: string;
		thumbnail: string | null;
		user_name: string;
		isFirstSignIn: boolean;
		Profiles: {
			id: number;
			avatar: string;
			city: string;
			province: string;
			userId: string;
		}[]
	}
}

export interface PostMediaInterface {
	createdAt: string;
	mediaId: number;
	postId: number;
	updatedAt: string;
}