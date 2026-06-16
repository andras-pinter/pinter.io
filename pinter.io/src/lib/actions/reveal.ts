import type { Action } from 'svelte/action';

interface RevealOptions {
	threshold?: number;
	delay?: number;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	const { threshold = 0.1, delay = 0 } = options;
	const previousDelay = node.style.transitionDelay;

	node.classList.add('reveal');

	if (!('IntersectionObserver' in window)) {
		node.classList.add('revealed');
		return {};
	}

	if (delay) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('revealed');
					observer.disconnect();
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
			node.style.transitionDelay = previousDelay;
		}
	};
};
