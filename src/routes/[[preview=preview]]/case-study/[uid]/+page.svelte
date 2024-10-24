<script>
	import { SliceZone, PrismicText, PrismicImage } from '@prismicio/svelte'
	import { components } from '$lib/slices'
	import { TriangleGrid, Bounded } from '$lib/components/index'
	import gsap from 'gsap'

	$effect(() => {
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce',
		).matches

		if (prefersReducedMotion) {
			return
		}

		gsap.fromTo('.logo-image', { opacity: 0, y: 90 }, { opacity: 1, y: 0, duration: 1, ease: 'power1.inOut' })
	})

	let { data } = $props()
</script>

<Bounded>
	<div class="relative grid w-full place-items-center text-center">
		<TriangleGrid />
		<h1 class="text-5xl font-medium md:text-7xl">
			<PrismicText field={data.page.data.company} />
			<span class="block text-lg text-yellow-500">Case Study</span>
		</h1>
		<p class="mb-4 mt-8 max-w-xl text-lg text-slate-300">
			<PrismicText field={data.page.data.description} />
		</p>
		<PrismicImage field={data.page.data.image} class="logo-image rounded-lg" />
	</div>
	<div class="mx-auto mt-12 md:mt-16">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
