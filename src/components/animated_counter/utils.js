import { COUNTER_ITEMS } from '../../constants';

export const getandShowCounterData = (refs, ref, gsap) => {
	refs.current.forEach((counter, index) => {
		const numberElement = counter.querySelector('.counter-number');
		const item = COUNTER_ITEMS[index];

		// Set initial value to 0
		gsap.set(numberElement, { innerText: '0' });

		// Create the counting animation
		gsap.to(numberElement, {
			innerText: item.value,
			duration: 2.5,
			ease: 'power2.out',
			snap: { innerText: 1 }, // Ensures whole numbers
			scrollTrigger: {
				trigger: '#counter',
				start: 'top center',
			},
			// Add the suffix after counting is complete
			onComplete: () => {
				numberElement.textContent = `${item.value}${item.suffix}`;
			},
		});
	}, ref);
};
