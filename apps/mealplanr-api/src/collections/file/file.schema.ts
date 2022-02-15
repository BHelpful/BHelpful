import { object, string, array } from 'yup';

// schema for file
const payload = {
	body: object({
		name: string(),
		type: array().of(string()),
	}),
};

const query = {
	query: object({
		fileId: string().required('fileId is required'),
	}),
};

export const createFileSchema = object({
	...payload,
});

export const getFileSchema = object({});

export const deleteFileSchema = object({});