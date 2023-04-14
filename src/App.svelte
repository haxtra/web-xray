<script>
	import Guide from 'Views/Guide/Guide.svelte'
	import JsonBrowser from 'Views/JsonBrowser/JsonBrowser.svelte'
	import './assets/web.css'
	import './assets/theme-xray.css'
</script>

<div class="App fc">

	<div class="Header fn">
		<h1>XRay.js</h1>
		<h2>Object browser for javascript applications</h2>
	</div>

	<div class="Viewport oxyh frg">
		<div class="fc">
			<div class="fg">
				<Guide/>
			</div>
			<div class="fn">
				<a class="SiteSourceLink" href="https://github.com/haxtra/web-xray" target="_blank" noreferrer>Get source on GitHub</a>
			</div>
		</div>
		<JsonBrowser/>
	</div>

</div>

<style>
	.Header h1 {
		font-size: 50px;
		background: -webkit-linear-gradient(#7fe, #07f);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-top: 10px;
		text-align: center;
	}

	.Header h2 {
		font-size: 14px;
		color: #ccc;
		margin: 7px 0 16px;
		text-align: center;
	}

	.SiteSourceLink {
		display: inline-block;
		font-size: 11px;
		padding: 5px 10px;
		margin: 5px;
		border-radius: 10px;
		background: #0003;
		color: #999;
	}
	.SiteSourceLink:hover {
		color: #fff;
	}

</style>
