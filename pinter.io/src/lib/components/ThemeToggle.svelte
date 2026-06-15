<script lang="ts">
	type Theme = 'dark' | 'light' | 'system';

	let theme = $state<Theme>('system');
	let open = $state(false);

	const options: { value: Theme; label: string; icon: string }[] = [
		{ value: 'dark', label: 'Dark', icon: '🌙' },
		{ value: 'light', label: 'Light', icon: '☀️' },
		{ value: 'system', label: 'System', icon: '💻' }
	];

	function applyTheme(t: Theme) {
		const root = document.documentElement;
		if (t === 'system') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
		} else {
			root.setAttribute('data-theme', t);
		}
	}

	function selectTheme(t: Theme) {
		theme = t;
		localStorage.setItem('theme', t);
		applyTheme(t);
		open = false;
	}

	$effect(() => {
		const saved = localStorage.getItem('theme') as Theme | null;
		if (saved && ['dark', 'light', 'system'].includes(saved)) {
			theme = saved;
		}
		applyTheme(theme);

		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = () => {
			if (theme === 'system') applyTheme('system');
		};
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	});
</script>

<div class="theme-toggle">
	<button class="toggle-btn" onclick={() => (open = !open)} aria-label="Toggle theme">
		{options.find((o) => o.value === theme)?.icon}
	</button>
	{#if open}
		<div class="dropdown">
			{#each options as opt (opt.value)}
				<button class:active={theme === opt.value} onclick={() => selectTheme(opt.value)}>
					<span class="icon">{opt.icon}</span>
					{opt.label}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.theme-toggle {
		position: relative;
	}

	.toggle-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: var(--surface);
		cursor: pointer;
		font-size: 1rem;
		transition: all 0.2s;
	}

	.toggle-btn:hover {
		border-color: var(--accent);
		background: var(--surface-hover);
	}

	.dropdown {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		padding: 0.375rem;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		min-width: 120px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		z-index: 200;
	}

	.dropdown button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border: none;
		background: transparent;
		color: var(--text-muted);
		font-size: 0.8125rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.15s;
	}

	.dropdown button:hover {
		background: var(--surface-hover);
		color: var(--text);
	}

	.dropdown button.active {
		color: var(--accent);
		background: var(--accent-bg);
	}

	.icon {
		font-size: 0.875rem;
	}
</style>
