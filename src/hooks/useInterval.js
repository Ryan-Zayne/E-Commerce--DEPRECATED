import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		const callbackReference = () => savedCallback.current();

		if (delay !== null) {
			const id = setInterval(callbackReference, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export default useInterval;
