<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Education from '$lib/components/Education.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Hero />
<div use:reveal>
	<About />
</div>
<div use:reveal={{ delay: 100 }}>
	<Projects />
</div>
<div use:reveal={{ delay: 200 }}>
	<Skills />
</div>
<div use:reveal={{ delay: 300 }}>
	<Experience />
</div>
<div use:reveal={{ delay: 400 }}>
	<Education />
</div>
<div use:reveal={{ delay: 500 }}>
	<Footer />
</div>
