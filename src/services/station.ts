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
	return await API.get('/station');
};

export const getTrendingStations = async (): Promise<Station[]> => {
	const response = await API.get('/station/trending');
	return response.data.data;
};

export const getPopularStations = async (): Promise<Station[]> => {
	return await API.get('/station/popular');
};

export const getStationsByCategory = async (category: string): Promise<Station[]> => {
	return await API.get(`/station/category?category=${category}`);
};

export const getStationById = async (id: string): Promise<Station> => {
	return await API.get(`/station/${id}`);
};
