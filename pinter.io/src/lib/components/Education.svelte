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
		color: #ffffff;
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
		background: #60a5fa;
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
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.edu-item:hover {
		background: rgba(96, 165, 250, 0.03);
		border-color: rgba(96, 165, 250, 0.15);
	}

	.edu-year {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.875rem;
		color: #60a5fa;
		font-weight: 500;
		white-space: nowrap;
		padding-top: 0.125rem;
	}

	h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #ffffff;
		margin-bottom: 0.25rem;
	}

	.edu-details p {
		font-size: 0.875rem;
		color: #71717a;
	}

	@media (max-width: 640px) {
		.edu-item {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
