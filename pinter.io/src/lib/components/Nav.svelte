<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let activeSection = $state<(typeof sections)[number] | ''>('');

	const sections = ['about', 'projects', 'skills', 'experience', 'education'] as const;
	const reversedSections = [...sections].reverse();

	function onScroll() {
		scrolled = window.scrollY > 50;

		for (const section of reversedSections) {
			const el = document.getElementById(section);
			if (el && el.getBoundingClientRect().top <= 100) {
				activeSection = section;
				return;
			}
		}

		activeSection = '';
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	onMount(() => {
		onScroll();
	});
</script>

<svelte:window onscroll={onScroll} />

<nav class:scrolled>
	<div class="nav-inner">
		<a href="#hero" class="logo" onclick={closeMenu}>AP</a>
		<div class="nav-right">
			<ul class="desktop-links">
				{#each sections as section (section)}
					<li>
						<a
							href="#{section}"
							aria-current={activeSection === section ? 'true' : undefined}
							class:active={activeSection === section}
						>
							{section}
						</a>
					</li>
				{/each}
			</ul>
			<ThemeToggle />
			<button
				class:open={menuOpen}
				class="menu-toggle"
				type="button"
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav-menu"
				onclick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div id="mobile-nav-menu" class="mobile-menu" transition:slide={{ duration: 180 }}>
			<ul>
				{#each sections as section (section)}
					<li>
						<a
							href="#{section}"
							aria-current={activeSection === section ? 'true' : undefined}
							class:active={activeSection === section}
							onclick={closeMenu}
						>
							{section}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1.25rem 2rem;
		transition: all 0.3s ease;
	}

	nav.scrolled {
		background: var(--nav-bg);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--accent-border);
		padding: 0.75rem 2rem;
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.desktop-links {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--accent);
		letter-spacing: -0.02em;
	}

	.logo:hover {
		color: var(--accent-light);
	}

	ul a {
		color: var(--text-muted);
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: capitalize;
		transition: color 0.2s;
	}

	ul a:hover {
		color: var(--accent);
	}

	ul a.active {
		color: var(--accent);
	}

	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.28rem;
		width: 2.75rem;
		height: 2.75rem;
		padding: 0;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background: color-mix(in srgb, var(--surface) 88%, transparent);
		color: var(--text);
		cursor: pointer;
		transition:
			border-color 0.2s ease,
			background-color 0.2s ease;
	}

	.menu-toggle:hover {
		border-color: var(--accent);
		background: color-mix(in srgb, var(--surface) 94%, transparent);
	}

	.menu-toggle span {
		width: 1.1rem;
		height: 2px;
		border-radius: 999px;
		background: currentColor;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		transform-origin: center;
	}

	.menu-toggle.open span:nth-child(1) {
		transform: translateY(0.39rem) rotate(45deg);
	}

	.menu-toggle.open span:nth-child(2) {
		opacity: 0;
	}

	.menu-toggle.open span:nth-child(3) {
		transform: translateY(-0.39rem) rotate(-45deg);
	}

	.mobile-menu {
		display: none;
	}

	@media (max-width: 640px) {
		nav {
			padding: 1rem;
		}

		nav.scrolled {
			padding: 0.75rem 1rem;
		}

		.nav-inner {
			align-items: center;
		}

		.nav-right {
			gap: 0.75rem;
		}

		.desktop-links {
			display: none;
		}

		.menu-toggle {
			display: inline-flex;
		}

		.mobile-menu {
			display: block;
			margin: 0.75rem auto 0;
			max-width: 1200px;
			padding: 0 0.25rem;
		}

		.mobile-menu ul {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			list-style: none;
			padding: 0.75rem;
			border: 1px solid var(--border);
			border-radius: 1rem;
			background: var(--nav-bg);
			backdrop-filter: blur(12px);
			box-shadow: 0 12px 30px color-mix(in srgb, var(--bg) 78%, transparent);
		}

		.mobile-menu a {
			display: block;
			padding: 0.7rem 0.85rem;
			border-radius: 0.75rem;
			font-size: 0.875rem;
		}

		.mobile-menu a:hover {
			background: color-mix(in srgb, var(--surface) 78%, transparent);
		}
	}

	@media (min-width: 641px) {
		.mobile-menu {
			display: none !important;
		}
	}
</style>
