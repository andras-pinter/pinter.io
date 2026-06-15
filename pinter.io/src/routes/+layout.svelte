<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import favicon from '$lib/assets/favicon.ico';
	import Nav from '$lib/components/Nav.svelte';

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'András Pintér',
		jobTitle: 'Principal Software Engineer & Architect',
		url: 'https://pinter.io',
		email: 'andras@pinter.io',
		sameAs: [
			'https://www.linkedin.com/in/andr%C3%A1s-pint%C3%A9r-43666364',
			'https://github.com/andras-pinter'
		],
		knowsAbout: ['Rust', 'C#', 'Distributed Systems', 'Cloud Architecture', 'PAM', 'Cybersecurity']
	};

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD requires @html injection -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}${'<'}/script>`}
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}

	:global(:root),
	:global([data-theme='light']) {
		--bg: #fafafa;
		--surface: rgba(0, 0, 0, 0.02);
		--surface-hover: rgba(0, 0, 0, 0.04);
		--border: rgba(0, 0, 0, 0.08);
		--text: #18181b;
		--text-muted: #52525b;
		--text-dim: #525252;
		--accent: #2563eb;
		--accent-light: #3b82f6;
		--accent-bg: rgba(37, 99, 235, 0.08);
		--accent-border: rgba(37, 99, 235, 0.2);
		--purple: rgba(124, 58, 237, 0.08);
		--purple-border: rgba(124, 58, 237, 0.2);
		--purple-text: #6d28d9;
		--nav-bg: rgba(250, 250, 250, 0.85);
		--card-hover-bg: rgba(37, 99, 235, 0.03);
		--card-hover-border: rgba(37, 99, 235, 0.15);
		--shadow: rgba(0, 0, 0, 0.08);
		--gradient-heading: linear-gradient(135deg, #18181b 0%, #52525b 100%);
		--hero-glow-1: rgba(37, 99, 235, 0.06);
		--hero-glow-2: rgba(124, 58, 237, 0.04);
	}

	:global([data-theme='dark']) {
		--bg: #0a0a0f;
		--surface: rgba(255, 255, 255, 0.03);
		--surface-hover: rgba(255, 255, 255, 0.06);
		--border: rgba(255, 255, 255, 0.08);
		--text: #e4e4e7;
		--text-muted: #a1a1aa;
		--text-dim: #8b8b94;
		--accent: #60a5fa;
		--accent-light: #93c5fd;
		--accent-bg: rgba(96, 165, 250, 0.1);
		--accent-border: rgba(96, 165, 250, 0.2);
		--purple: rgba(139, 92, 246, 0.1);
		--purple-border: rgba(139, 92, 246, 0.2);
		--purple-text: #c4b5fd;
		--nav-bg: rgba(10, 10, 15, 0.85);
		--card-hover-bg: rgba(96, 165, 250, 0.03);
		--card-hover-border: rgba(96, 165, 250, 0.15);
		--shadow: rgba(0, 0, 0, 0.3);
		--gradient-heading: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
		--hero-glow-1: rgba(96, 165, 250, 0.08);
		--hero-glow-2: rgba(139, 92, 246, 0.05);
	}

	:global(body) {
		font-family:
			'Inter Variable',
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
		background: var(--bg);
		color: var(--text);
		line-height: 1.6;
		overflow-x: hidden;
		transition:
			background 0.3s ease,
			color 0.3s ease;
	}

	:global(a) {
		color: var(--accent);
		text-decoration: none;
		transition: color 0.2s;
	}

	:global(a:hover) {
		color: var(--accent-light);
	}

	main {
		width: 100%;
	}

	:global(.reveal) {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	:global(.reveal.revealed) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.reveal) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	@media print {
		:global(nav),
		:global(.scroll-hint),
		:global(.cv-download),
		:global(.socials),
		:global(footer),
		:global(.hero-bg),
		:global(.theme-toggle) {
			display: none !important;
		}

		:global(*) {
			animation: none !important;
			transition: none !important;
			box-shadow: none !important;
			text-shadow: none !important;
		}

		:global(html) {
			scroll-behavior: auto !important;
			scroll-padding-top: 0 !important;
		}

		:global(body) {
			background: white !important;
			color: black !important;
			font-size: 12pt;
		}

		:global(main),
		:global(section),
		:global(.container) {
			max-width: 100% !important;
			width: 100% !important;
		}

		:global(main),
		:global(section) {
			padding: 1rem 0 !important;
		}

		:global(.timeline-content),
		:global(.project-card),
		:global(.edu-item) {
			break-inside: avoid;
			border: 1px solid #ddd !important;
			background: white !important;
			border-radius: 0 !important;
		}

		:global(a[href^='http'])::after {
			content: ' (' attr(href) ')';
			font-size: 0.8em;
			color: #666;
		}

		:global(a[href^='#'])::after {
			content: none;
		}

		:global(.reveal) {
			opacity: 1 !important;
			transform: none !important;
		}
	}
</style>
