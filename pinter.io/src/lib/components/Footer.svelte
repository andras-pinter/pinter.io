<footer>
	<div class="container">
		<p>&copy; {new Date().getFullYear()} András Pintér</p>
		<p class="sub">Built with SvelteKit • Deployed on Vercel</p>
	</div>
</footer>

<style>
	footer {
		padding: 3rem 2rem;
		text-align: center;
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-dim);
		font-size: 0.875rem;
	}

	.sub {
		font-size: 0.75rem;
		margin-top: 0.25rem;
		color: var(--text-dim);
	}
</style>
