export interface PostDataInterface {
	id: number;
	postText: string;
	createdAt: string;
	liked: number;
	location: string;
	userId: number;
	Comments: string[];
	User: UserDataInterface;
	updatedAt: string;
	medias: {
		PostMedia: PostMediaInterface;
		media_url: string;
	};
}

export interface UserDataInterface {
	email: string;
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