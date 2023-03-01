export interface PostDataInterface {
	id: number;
	postText: string;
	createdAt: string;
	liked: number;
	location: string;
	userId: number;
	Comments: {
		commentText: string;
		User: UserDataInterface
	}[];
	User: UserDataInterface;
	updatedAt: string;
	medias: {
		PostMedia: PostMediaInterface;
		media_url: string;
	}[];
	location_detail: string | null;
}

export interface UserDataInterface {
	id?: number;
	email?: string;
	full_name: string;
	thumbnail: string | null;
	user_name: string;
}

export interface PostMediaInterface {
	createdAt: string;
	mediaId: number;
	postId: number;
	updatedAt: string;
}