<script lang="ts">
	interface Job {
		title: string;
		company: string;
		from: string;
		to: string;
		description: string;
		objectives?: string[];
	}

	const jobs: Job[] = [
		{
			title: 'Software Architect',
			company: 'One Identity',
			from: 'February 2025',
			to: 'present',
			description:
				'Part of the company-wide Architecture Team, designing the next-generation Cloud solution and Platform for PAM, Identity, and Governance use-cases. Working with multiple Development Teams to help them understand requirements, designs, and guide implementation.'
		},
		{
			title: 'Principal Software Engineer',
			company: 'One Identity',
			from: 'April 2023',
			to: 'present',
			description:
				'Lead developer and architect for a secure-gateway (VPN-alternative) technology, web-browser-based RDP and SSH client, and PAM monitoring/auditor services. Member of the Cloud Software Architect team.',
			objectives: [
				'REST, gRPC',
				'TypeScript, Angular',
				'C#, ASP.Net, MassTransit',
				'Azure DevOps, Helm, Bicep',
				'Azure Cloud technologies and managed services',
				'Rust, Tokio-runtime, Actix actor-system, WebAssembly',
				'Fast, secure, and reliable multi-threaded, asynchronous services'
			]
		},
		{
			title: 'Senior Software Engineer',
			company: 'One Identity',
			from: 'April 2022',
			to: 'April 2023',
			description:
				'Technical product owner of a Remote Access Cloud product. Member of the Cloud Software Architect team to design a new Cloud-based, single-tenant, managed SaaS security product.',
			objectives: [
				'C#, ASP.Net',
				'Rust, Tokio-runtime',
				'Azure Cloud technologies',
				'Raw SSH protocol and Web Technologies',
				'Fast, secure, and reliable multi-threaded, asynchronous services'
			]
		},
		{
			title: 'Staff Software Engineer',
			company: 'One Identity',
			from: 'August 2020',
			to: 'April 2022',
			description: 'Lead developer for a next-generation, HTTP monitoring proxy.',
			objectives: [
				'Rust, Tokio-runtime, Hyper',
				'Fast, secure, and reliable multi-threaded, asynchronous application'
			]
		},
		{
			title: 'Software Engineer',
			company: 'Balabit / One Identity',
			from: 'April 2017',
			to: 'August 2020',
			description:
				'First-class developer for an Auditor Portal and Search backend, a Reporting generation tool, and a configuration management backend. Maintainer of an in-house REST API Framework (Python).',
			objectives: [
				'Python, PHP, Scala, Bash',
				'Networking technologies and security',
				'Linux systems and service management',
				'ElasticSearch, PostgreSQL, AMQP/RabbitMQ'
			]
		},
		{
			title: 'Software Test Development Engineer',
			company: 'Continental Engineering Services',
			from: 'October 2014',
			to: 'April 2017',
			description:
				'Created an automation test framework for automotive ECUs Hardware-in-the-loop (HIL) testing in Python to ease and speed up creating and executing Test Scenarios.',
			objectives: [
				'dSpace HIL Testing',
				'CAN & Flexray networking',
				'Python, Numpy, MatLab Simulink'
			]
		}
	];
</script>

<section id="experience">
	<div class="container">
		<h2>Experience</h2>
		<div class="timeline">
			{#each jobs as job, i (job.title + job.from)}
				<div class="timeline-item" style="animation-delay: {i * 0.1}s">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<div class="timeline-header">
							<div>
								<h3>{job.title}</h3>
								<p class="company">{job.company}</p>
							</div>
							<span class="period">{job.from} — {job.to}</span>
						</div>
						<p class="description">{job.description}</p>
						{#if job.objectives}
							<div class="objectives">
								{#each job.objectives as obj (obj)}
									<span class="obj-tag">{obj}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding: 6rem 2rem;
		max-width: 900px;
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

	.timeline {
		position: relative;
		padding-left: 2rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		bottom: 0.5rem;
		width: 2px;
		background: linear-gradient(to bottom, var(--accent), var(--accent-bg));
	}

	.timeline-item {
		position: relative;
		margin-bottom: 2.5rem;
		animation: fadeIn 0.5s ease-out forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	.timeline-marker {
		position: absolute;
		left: -1.625rem;
		top: 0.5rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--bg);
		border: 2px solid var(--accent);
		box-shadow: 0 0 8px var(--accent-bg);
	}

	.timeline-content {
		padding: 1.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.timeline-content:hover {
		background: var(--card-hover-bg);
		border-color: var(--card-hover-border);
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text);
	}

	.company {
		font-size: 0.875rem;
		color: var(--accent);
		font-weight: 500;
	}

	.period {
		font-size: 0.75rem;
		color: var(--text-dim);
		font-family: 'JetBrains Mono', monospace;
		white-space: nowrap;
	}

	.description {
		font-size: 0.9375rem;
		color: var(--text-muted);
		line-height: 1.7;
	}

	.objectives {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-top: 1rem;
	}

	.obj-tag {
		padding: 0.25rem 0.625rem;
		background: var(--accent-bg);
		border: 1px solid var(--accent-border);
		border-radius: 0.375rem;
		font-size: 0.75rem;
		color: var(--accent-light);
		font-family: 'JetBrains Mono', monospace;
	}

	@media (max-width: 640px) {
		.timeline-header {
			flex-direction: column;
			gap: 0.25rem;
		}
	}
</style>
