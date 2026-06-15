<section id="about">
	<div class="container">
		<h2>About Me</h2>
		<div class="about-content">
			<p>
				Building secure, high-performance distributed systems in
				<strong>Rust</strong> and <strong>C#</strong>. Strong focus on clean architecture,
				scalability, and developer productivity. Not afraid to dive into the unknown and build
				innovative systems from scratch.
			</p>
			<div class="focus-areas">
				<h3>Current Focus</h3>
				<div class="areas">
					<span class="area">PAM</span>
					<span class="area">IGA</span>
					<span class="area">Cloud Architecture</span>
					<span class="area">Distributed Systems</span>
					<span class="area">Platform Engineering</span>
				</div>
			</div>
			<blockquote>
				<span class="quote-mark">"</span>Nothing is impossible<span class="quote-mark">"</span>
			</blockquote>
		</div>
	</div>
</section>

<style>
	section {
		padding: 6rem 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 2rem;
		color: var(--text);
		position: relative;
		display: inline-block;
	}

	h2::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		width: 3rem;
		height: 3px;
		background: var(--accent);
		border-radius: 2px;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	p {
		font-size: 1.0625rem;
		color: var(--text-muted);
		line-height: 1.8;
	}

	p strong {
		color: var(--text);
	}

	.focus-areas h3 {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.75rem;
	}

	.areas {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.area {
		padding: 0.375rem 0.875rem;
		background: var(--accent-bg);
		border: 1px solid var(--accent-border);
		border-radius: 2rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--accent);
	}

	blockquote {
		margin-top: 1rem;
		padding: 1.5rem 2rem;
		background: var(--accent-bg);
		border-left: 3px solid var(--accent);
		border-radius: 0 0.5rem 0.5rem 0;
		font-style: italic;
		font-size: 1.25rem;
		color: var(--text);
		font-weight: 500;
	}

	.quote-mark {
		color: var(--accent);
		font-size: 1.5rem;
	}
</style>
