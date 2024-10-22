<script>
	import { SliceZone, PrismicText, PrismicImage } from '@prismicio/svelte'
	import { components } from '$lib/slices'
	import { TriangleGrid, Bounded } from '$lib/components/index'

	export let data
</script>

<Bounded>
	<div class="relative grid w-full place-items-center text-center">
		<TriangleGrid />
		<h1 class="text-5xl md:text-7xl	font-medium ">
			<PrismicText field={data.page.data.company} />
			<span class="block text-lg text-yellow-500">
				Case Study
			</span>
		</h1>
		<p class="mb-4 mt-8 max-w-xl text-lg text-slate-300">
			<PrismicText field={data.page.data.description} />
		</p>
		<PrismicImage field={data.page.data.image} class="logo-image rounded-lg" />
	</div>
	<div class="mx-auto md:mt-16 mt-12">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
