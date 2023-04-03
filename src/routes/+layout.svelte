<script>
	import '../app.css';
	import '@fontsource/press-start-2p';
	import 'nes.css/css/nes.min.css';
</script>

<div class="bg-indigo-700 min-h-screen">
	<div class="max-w-5xl mx-auto px-2 lg:px-4 py-2 lg:py-4 ">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Press Start 2P', cursive;
	}
</style>
