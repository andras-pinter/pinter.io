<script lang="ts">
	import profileImage from '$lib/assets/profile-image.jpg';
</script>

<section id="hero">
	<div class="hero-bg"></div>
	<div class="hero-content">
		<div class="avatar">
			<img src={profileImage} alt="András Pintér" />
		</div>
		<h1>András Pintér</h1>
		<p class="title">Principal Software Engineer & Architect</p>
		<p class="tagline">
			Building secure, high-performance distributed systems in <span class="highlight">Rust</span>
			and
			<span class="highlight">C#</span>
		</p>
		<div class="socials">
			<a
				href="https://www.linkedin.com/in/andr%C3%A1s-pint%C3%A9r-43666364"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			</a>
			<a
				href="https://github.com/andras-pinter"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/>
				</svg>
			</a>
			<a href="mailto:andras@pinter.io" aria-label="Email">
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path
						d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
					/>
				</svg>
			</a>
		</div>
		<div class="scroll-hint">
			<span>scroll</span>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				width="16"
				height="16"
			>
				<path d="M12 5v14M19 12l-7 7-7-7" />
			</svg>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse at 50% 0%, rgba(96, 165, 250, 0.08) 0%, transparent 60%),
			radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
	}

	.hero-content {
		position: relative;
		text-align: center;
		animation: fadeUp 0.8s ease-out;
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.avatar {
		width: 120px;
		height: 120px;
		margin: 0 auto 2rem;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid rgba(96, 165, 250, 0.3);
		box-shadow: 0 0 40px rgba(96, 165, 250, 0.15);
	}

	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.title {
		font-size: 1.125rem;
		color: #60a5fa;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: 1rem;
		color: #71717a;
		max-width: 500px;
		margin: 0 auto;
	}

	.highlight {
		color: #e4e4e7;
		font-weight: 600;
	}

	.socials {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #a1a1aa;
		transition: all 0.3s ease;
	}

	.socials a:hover {
		background: rgba(96, 165, 250, 0.1);
		border-color: rgba(96, 165, 250, 0.3);
		color: #60a5fa;
		transform: translateY(-2px);
	}

	.scroll-hint {
		position: absolute;
		bottom: -4rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		color: #52525b;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(5px);
		}
	}
</style>
