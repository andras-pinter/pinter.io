<script lang="ts">
	let scrolled = $state(false);

	const sections = ['about', 'skills', 'experience', 'projects', 'education'] as const;

	function onScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:window onscroll={onScroll} />

<nav class:scrolled>
	<div class="nav-inner">
		<a href="#hero" class="logo">AP</a>
		<ul>
			{#each sections as section (section)}
				<li><a href="#{section}">{section}</a></li>
			{/each}
		</ul>
	</div>
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
		background: rgba(10, 10, 15, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(96, 165, 250, 0.1);
		padding: 0.75rem 2rem;
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 900;
		color: #60a5fa;
		letter-spacing: -0.02em;
	}

	.logo:hover {
		color: #93c5fd;
	}

	ul {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	ul a {
		color: #a1a1aa;
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: capitalize;
		transition: color 0.2s;
	}

	ul a:hover {
		color: #60a5fa;
	}

	@media (max-width: 640px) {
		ul {
			gap: 1rem;
		}

		ul a {
			font-size: 0.75rem;
		}
	}
</style>
