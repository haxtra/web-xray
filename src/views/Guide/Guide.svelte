<script>

	const ports = {
		react: {
			install: 'npm install @haxtra/xray-react',
			import: ['import XRay from "xray-react"'],
			use: '<XRay obj={myobj} />',
			repo: 'xray-react',
		},
		solid: {
			install: 'npm install xray-solid',
			import: ['import XRay from "xray-solid"'],
			use: '<XRay obj={myobj} />',
			repo: 'xray-solid',
		},
		svelte: {
			install: 'npm install xray-svelte',
			import: ['import XRay from "xray-svelte"'],
			use: '<XRay obj={myobj} />',
			repo: 'xray-svelte',
		},
		vue: {
			install: 'npm install xray-vue',
			import: ['import XRay from "xray-vue"'],
			use: '<XRay :obj="myobj" />',
			repo: 'xray-vue',
		},
		mithril: {
			install: 'npm install xray-mithril',
			import: [
				'<script src="xray-mithril.js"><\/script>',
				'<link rel="stylesheet" href="xray.css"/>',
			],
			// altImport: 'import XRay from "xray-mithril/src/XRay.mithril"',
			use: 'm(XRay, {obj:myobj})',
			repo: 'xray-mithril',
		},
	}

	let selected = 'react'
	let data = ports[selected]
	function selectFW(name){
		selected = name
		data = ports[name]
	}

</script>

<div class="Guide ml20">

	<div class="Selector mb10 fr evn5">
		<span class="" class:Active={selected == 'react'} on:click={e=>selectFW('react')}>React</span>
		<span class="" class:Active={selected == 'solid'} on:click={e=>selectFW('solid')}>Solid</span>
		<span class="" class:Active={selected == 'svelte'} on:click={e=>selectFW('svelte')}>Svelte</span>
		<span class="" class:Active={selected == 'vue'} on:click={e=>selectFW('vue')}>Vue</span>
		<span class="" class:Active={selected == 'mithril'} on:click={e=>selectFW('mithril')}>Mithril</span>
	</div>

	<div class="InfoPanel">

		<p class="SectionHeader mt0 mb10">install</p>

		<p class="Comment"># install</p>
		<p>{data.install}</p>

		<p class="Comment mt10">// import</p>
		{#each data.import as line}
			<p>{line}</p>
		{/each}

		<p class="Comment mt10">// use</p>
		<p>{data.use}</p>

		<p class="SectionHeader mt20">customize</p>

		{#if selected == 'react' || selected == 'solid' || selected == 'svelte'}
			<p class="Comment mt10">// set title</p>
			<p>title="My Title"</p>
			<p class="Comment mt10">// disable header</p>
			<p>{'header={false}'}</p>
			<p class="Comment mt10">// start minimized</p>
			<p>{'minimize'}</p>
			<p class="Comment mt10">// collapse some keys</p>
			<p>{'collapse={["key1","key2.sub1"]}'}</p>
			<p class="Comment mt10">// collapse top keys only</p>
			<p>{'collapse="top"'}</p>
			<p class="Comment mt10">// collapse all keys</p>
			<p>{'collapse'}</p>
			<p class="Comment mt10">// collapse all, except</p>
			<p>{'collapseExcept={["key1"]}'}</p>
		{:else if selected == 'vue'}
			<p class="Comment mt10">// set title</p>
			<p>title="My Title"</p>
			<p class="Comment mt10">// disable header</p>
			<p>{':header="false"'}</p>
			<p class="Comment mt10">// start minimized</p>
			<p>{'minimize'}</p>
			<p class="Comment mt10">// collapse some keys</p>
			<p>{`:collapse="['key1','key2.sub1']"`}</p>
			<p class="Comment mt10">// collapse top keys only</p>
			<p>{'collapse="top"'}</p>
			<p class="Comment mt10">// collapse all keys</p>
			<p>{'collapse'}</p>
			<p class="Comment mt10">// collapse all, except</p>
			<p>{`:collapseExcept="['key1']"`}</p>
		{:else if selected == 'mithril'}
			<p class="Comment mt10">// set title</p>
			<p>title:"My Title"</p>
			<p class="Comment mt10">// disable header</p>
			<p>header:false</p>
			<p class="Comment mt10">// start minimized</p>
			<p>minimize:true</p>
			<p class="Comment mt10">// collapse some keys</p>
			<p>{'collapse:["key1","key2.sub1"]'}</p>
			<p class="Comment mt10">// collapse top keys only</p>
			<p>collapse:"top"</p>
			<p class="Comment mt10">// collapse all keys</p>
			<p>collapse:true</p>
			<p class="Comment mt10">// collapse all, except</p>
			<p>{'collapseExcept:["key1"]'}</p>
		{/if}

		<p class="SectionHeader mt20">interact (click)</p>
		<div class="Help">
			<p class="mt10">
				header -- toggle entire panel <br/>
				property -- toggle node <br/>
				property [right click] -- show path <br/>
				unknown types -- dump obj to console <br/>
			</p>
		</div>

		<a class="btn btn-s mt30" href={"https://github.com/haxtra/" + data.repo} target="_blank" noreferrer>See more on GitHub</a>

	</div>

</div>

<style>
	.Guide {
		background: #0003;
		width: 350px;
		padding: 20px;
		font-family: monospace;
	}

	.Selector span {
		font-size: 12px;
		padding: 5px;
		cursor: pointer;
		color: #bcd;
		background: #334;
		text-align: center;
		transition: 0.2s;
	}
	.Selector span:hover {
		color: #fff;
	}
	.Selector span.Active {
		background: #bcd;
		color: #000;
	}

	.InfoPanel {
		color: #aef;
	}
	.InfoPanel .Comment {
		color: #aaa;
	}
	.InfoPanel .SectionHeader {
		color: #0df;
		border-bottom: 1px solid #067;
		background: linear-gradient(90deg, #0003, #2243);
		padding: 5px;
	}

	.Help {
		font-size: 11px;
	}
</style>