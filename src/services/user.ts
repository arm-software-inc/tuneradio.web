import API from "./api";

// TODO: find a better place to put types
export interface User {
	name: string;
	email: string;
	password: string;
}

export interface Login extends Omit<User, 'name'> {}

export const createUser = async (data: User) => {
	return await API.post('/user', data);
};

export const signin = async (data: Login) => {
	return await API.post('/auth', data);
};

export const signinWithGoogle = async (token: string) => {
	return await API.postForm('/auth/signin-google', { code: token });
}