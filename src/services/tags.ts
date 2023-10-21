import API from "./api";

export interface Tag {
	id: string;
	name: string;
}

export const getAllTags = async (): Promise<Tag[]> => {
	const response = await API.get('/tag');
	return response.data.data;
};
