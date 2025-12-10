<script lang="ts">
	import construction from '$lib/assets/construction.svg';

	let title = 'Under construction';
</script>

<div class="content" role="main">
	<img src={construction} width="50%" height="50%" alt="Under construction" />
	<h1>
		<span>{title}</span>
	</h1>
</div>

<style>
	:host {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		font-size: 14px;
		color: #333;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.content {
		display: flex;
		margin: 82px auto 32px;
		padding: 0 16px;
		max-width: 960px;
		flex-direction: column;
		align-items: center;
	}
</style>
