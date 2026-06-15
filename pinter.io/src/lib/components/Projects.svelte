<script lang="ts">
	const projects = [
		{
			name: 'SecureGateway',
			description:
				"A VPN alternative that eliminates the VPN requirement for Cloud services to make TCP/UDP calls to customers' sealed networks. Server-client architecture running in multi-tenant or single-tenant SaaS environments.",
			tech: ['Rust', 'gRPC', 'eBPF', 'async', 'L4 networking'],
			highlight:
				'Low-level (L4) network shaper & router, built in fully asynchronous Rust, using gRPC tunnels. Extended by eBPF kernel modules for packet reshaping before Userspace.'
		},
		{
			name: 'WebClients',
			description:
				"Cloud-based SSH & RDP clients. Partially running in Cloud infrastructure, with rendering in the user's web browser.",
			tech: ['Rust', 'WebAssembly', 'TypeScript', 'SSH', 'RDP'],
			highlight:
				'SSH terminal buffer updates rendered by JavaScript. RDP Graphical PDUs rendered by a WebAssembly module compiled from Rust.'
		}
	];
</script>

<section id="projects">
	<div class="container">
		<h2>Key Projects</h2>
		<div class="projects-grid">
			{#each projects as project (project.name)}
				<div class="project-card">
					<div class="card-header">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							width="24"
							height="24"
						>
							<path
								d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"
							/>
						</svg>
						<h3>{project.name}</h3>
					</div>
					<p class="description">{project.description}</p>
					<p class="highlight">{project.highlight}</p>
					<div class="tech-tags">
						{#each project.tech as t (t)}
							<span class="tech">{t}</span>
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

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.project-card:hover {
		background: rgba(96, 165, 250, 0.03);
		border-color: rgba(96, 165, 250, 0.15);
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
		color: #60a5fa;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: #ffffff;
	}

	.description {
		font-size: 0.9375rem;
		color: #a1a1aa;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.highlight {
		font-size: 0.875rem;
		color: #71717a;
		line-height: 1.6;
		padding: 0.75rem 1rem;
		background: rgba(96, 165, 250, 0.05);
		border-radius: 0.5rem;
		margin-bottom: 1.25rem;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.tech {
		padding: 0.25rem 0.625rem;
		background: rgba(139, 92, 246, 0.1);
		border: 1px solid rgba(139, 92, 246, 0.2);
		border-radius: 0.375rem;
		font-size: 0.75rem;
		color: #c4b5fd;
		font-family: 'JetBrains Mono', monospace;
	}

	@media (max-width: 640px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
