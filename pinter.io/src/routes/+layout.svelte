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

	:global(body) {
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
		background: #0a0a0f;
		color: #e4e4e7;
		line-height: 1.6;
		overflow-x: hidden;
	}

	:global(a) {
		color: #60a5fa;
		text-decoration: none;
		transition: color 0.2s;
	}

	:global(a:hover) {
		color: #93c5fd;
	}

	main {
		width: 100%;
	}
</style>
