import { useQueries, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../utils/axiosInstance';

const useFetch = ({ key, url, staleTime, cacheTime }) => {
	const fetcher = () => axiosInstance.get(url).then((response) => response.data);
	const queryResult = useQuery(key, fetcher, { staleTime, cacheTime });

	return queryResult;
};

const useFetchMultiple = (queryList = []) => {
	const queryResults = useQueries({
		queries: queryList,
	});

	return queryResults;
};

export { useFetch, useFetchMultiple };
