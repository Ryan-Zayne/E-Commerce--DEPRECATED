import { useEffect, useRef } from 'react';

const useRequestAnimation = (callback, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		let animationFrameId;
		let start;

		function playAnimation(timestamp) {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;

			if (elapsed > delay) {
				savedCallback.current();
				start = timestamp;
			}

			animationFrameId = requestAnimationFrame(playAnimation);
		}

		if (delay !== null) {
			animationFrameId = requestAnimationFrame(playAnimation);
			return () => cancelAnimationFrame(animationFrameId);
		}
	}, [delay]);
};

export default useRequestAnimation;
