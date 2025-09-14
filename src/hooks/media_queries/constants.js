export const BREAKPOINTS = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1440px',
	desktopL: '2560px',
};

export const QUERIES = {
	// Max-width queries
	isMobileS: `(max-width: ${BREAKPOINTS.mobileS})`,
	isMobileM: `(max-width: ${BREAKPOINTS.mobileM})`,
	isMobileL: `(max-width: ${BREAKPOINTS.mobileL})`,
	isTablet: `(max-width: ${BREAKPOINTS.tablet})`,
	isLaptop: `(max-width: ${BREAKPOINTS.laptop})`,
	isDesktop: `(max-width: ${BREAKPOINTS.desktop})`,

	// Min-width queries
	isMinTablet: `(min-width: ${BREAKPOINTS.tablet})`,
	isMinLaptop: `(min-width: ${BREAKPOINTS.laptop})`,
	isMinDesktop: `(min-width: ${BREAKPOINTS.desktop})`,

	// Range queries
	isMobileOnly: `(max-width: ${BREAKPOINTS.tablet})`,
	isTabletOnly: `(min-width: ${BREAKPOINTS.tablet}) and (max-width: ${BREAKPOINTS.laptop})`,
	isDesktopOnly: `(min-width: ${BREAKPOINTS.laptop})`,
};
