<script lang="ts">
	const education = [
		{
			degree: 'BSc in Computer Science and Engineering',
			school: 'University of Pannonia, Veszprém, Hungary',
			year: '2014'
		},
		{
			degree: 'Certificated Software Developer',
			school: 'Energetikai Szakközépiskola és Kollégium, Paks, Hungary',
			year: '2009'
		},
		{
			degree: 'Specialization in Computer Science',
			school: 'Energetikai Szakközépiskola és Kollégium, Paks, Hungary',
			year: '2008'
		}
	];
</script>

<section id="education">
	<div class="container">
		<h2>Education</h2>
		<div class="education-list">
			{#each education as edu (edu.degree)}
				<div class="edu-item">
					<div class="edu-year">{edu.year}</div>
					<div class="edu-details">
						<h3>{edu.degree}</h3>
						<p>{edu.school}</p>
					</div>
				</div>
			{/each}
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
		margin-bottom: 3rem;
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

	.education-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.edu-item {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
		padding: 1.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.edu-item:hover {
		background: var(--card-hover-bg);
		border-color: var(--card-hover-border);
	}

	.edu-year {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.875rem;
		color: var(--accent);
		font-weight: 500;
		white-space: nowrap;
		padding-top: 0.125rem;
	}

	h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 0.25rem;
	}

	.edu-details p {
		font-size: 0.875rem;
		color: var(--text-dim);
	}

	@media (max-width: 640px) {
		.edu-item {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
