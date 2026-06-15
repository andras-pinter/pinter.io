<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>András Pintér | Principal Software Engineer & Architect</title>
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
		--text-dim: #71717a;
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
		--text-dim: #71717a;
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
			'Inter',
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
</style>
