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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
	}

	.skill-group {
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.skill-group:hover {
		background: rgba(96, 165, 250, 0.03);
		border-color: rgba(96, 165, 250, 0.15);
		transform: translateY(-2px);
	}

	h3 {
		font-size: 0.875rem;
		font-weight: 600;
		color: #60a5fa;
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
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 0.5rem;
		font-size: 0.8125rem;
		color: #d4d4d8;
		font-family: 'JetBrains Mono', monospace;
		transition: all 0.2s ease;
	}

	.tag:hover {
		background: rgba(96, 165, 250, 0.1);
		border-color: rgba(96, 165, 250, 0.2);
		color: #60a5fa;
	}
</style>
