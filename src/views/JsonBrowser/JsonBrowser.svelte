<script>
	import XRay from 'xray-svelte'
	import 'xray-svelte/src/xray.css'

	import exampleObj from './example.js'

	let inputJson = null
	let obj = exampleObj()

	function xrayJson(){

		try{
			obj = JSON.parse(inputJson)
		} catch(e) {
			obj = e
		}
	}

	function onPaste(e){
		e.preventDefault() // fix double paste on chrome
		inputJson = e.clipboardData.getData('text')
		xrayJson()
	}

</script>

<div class="frg evn2">
	<div class="PasteBox ml20 mr20 fc">
		<textarea bind:value={inputJson} spellcheck="false" placeholder="Paste JSON..." on:paste={onPaste} tabindex="1"></textarea>
		<p>
			<button class="btn btn-s mono" on:click={xrayJson} tabindex="2">Expose</button>
		</p>
	</div>
	<div class="mr20 mb20 fr">
		<span class="scrolly scrollbar">
			<XRay obj={obj} />
		</span>
	</div>
</div>


<style>
	.PasteBox {
		background: #0003;
		padding: 10px;
		margin-bottom: 20px;
	}
	.PasteBox textarea {
		flex: auto;
		background: transparent;
		border: none;
		color: #ddf;
		width: 100%;
		font-family: monospace;
		font-size: 11px;
		tab-size: 2;
	}
	.PasteBox textarea:focus {
		outline: none;
	}
</style>