interface RevealOptions {
	threshold?: number;
	delay?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { threshold = 0.1, delay = 0 } = options;

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
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('revealed');
					observer.disconnect();
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
