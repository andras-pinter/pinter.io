<script lang="ts">
	const skillGroups = [
		{
			name: 'Programming',
			skills: ['Rust', 'Python', 'TypeScript', 'C#']
		},
		{
			name: 'Cloud & DevOps',
			skills: ['Helm', 'Bicep', 'Docker', 'Kubernetes', 'Azure Cloud']
		},
		{
			name: 'Networking & Protocols',
			skills: ['REST', 'gRPC', 'Protobuf', 'TCP/UDP']
		},
		{
			name: 'Data Storage',
			skills: ['CosmosDB', 'PostgreSQL', 'Azure Search', 'ElasticSearch']
		},
		{
			name: 'Other',
			skills: ['git', 'eBPF', 'Bash', 'Linux', 'macOS']
		},
		{
			name: 'Languages',
			skills: ['Hungarian (native)', 'English (fluent)']
		}
	];
</script>

<section id="skills">
	<div class="container">
		<h2>Skills</h2>
		<div class="skills-grid">
			{#each skillGroups as group (group.name)}
				<div class="skill-group">
					<h3>{group.name}</h3>
					<div class="skill-tags">
						{#each group.skills as skill (skill)}
							<span class="tag">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding: 6rem 2rem;
		max-width: 1000px;
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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
	}

	.skill-group {
		padding: 1.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.skill-group:hover {
		background: var(--card-hover-bg);
		border-color: var(--card-hover-border);
		transform: translateY(-2px);
	}

	h3 {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 0.375rem 0.75rem;
		background: var(--surface-hover);
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		font-size: 0.8125rem;
		color: var(--text);
		font-family: 'JetBrains Mono', monospace;
		transition: all 0.2s ease;
	}

	.tag:hover {
		background: var(--accent-bg);
		border-color: var(--accent-border);
		color: var(--accent);
	}
</style>
