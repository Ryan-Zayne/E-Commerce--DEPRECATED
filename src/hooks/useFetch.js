import { useQueries, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../utils/axiosInstance';

const useFetch = ({ key, url, staleTime }) => {
	const fetcher = () => axiosInstance.get(url).then((response) => response.data);
	const queryResult = useQuery({ queryKey: key, queryFn: fetcher, staleTime });

	return queryResult;
};

const useFetchMultiple = (queryList = []) => {
	const queryResults = useQueries({
		queries: queryList,
	});

	return queryResults;
};

export { useFetch, useFetchMultiple };
