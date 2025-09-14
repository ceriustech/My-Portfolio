import { useState, useEffect } from 'react';

/**
 * Custom hook for media query matching
 * @param {Object} options - Options object
 * @param {string} options.query - Media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = ({ query }) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQuery = window.matchMedia(query);
		setMatches(mediaQuery.matches);

		const handleChange = (event) => {
			setMatches(event.matches);
		};

		// Just use the modern API - no fallback needed
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
};
