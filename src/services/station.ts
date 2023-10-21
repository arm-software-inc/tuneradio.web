import API from "./api";

export interface Station {
	changeUuid: string;
	stationUuid: string;
	name: string;
	url: string;
	urlResolved: string;
	homepage: string;
	favicon: string;
	tags: string;
	countryCode: string;
	votes: number;
	clickCount: number;
	clicktrend: number;
}

export const getAllStations = async (): Promise<Station[]> => {
	const response = await API.get('/station');
	return response.data.data;
};

export const getTrendingStations = async (): Promise<Station[]> => {
	const response = await API.get('/station/trending');
	return response.data.data;
};

export const getPopularStations = async (): Promise<Station[]> => {
	return await API.get('/station/popular');
};

// TODO: change `category` by `tag`
export const getStationsByCategory = async (category: string): Promise<Station[]> => {
	const response = await API.get(`/station/category?c=${category}`);
	return response.data.data;
};

export const getStationById = async (id: string): Promise<Station> => {
	return await API.get(`/station/${id}`);
};
