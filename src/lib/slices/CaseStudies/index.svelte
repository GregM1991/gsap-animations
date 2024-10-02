<script lang="ts">
	import { Bounded } from '$lib/components'
	import type { Content } from '@prismicio/client'
	import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte'

	export let slice: Content.CaseStudiesSlice
	export let caseStudies: Content.CaseStudiesDocument[] = []
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<h2
		class="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl"
	>
		<PrismicText field={slice.primary.heading} />
	</h2>
	<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
		<PrismicRichText field={slice.primary.body} />
	</div>
	<div class="mt-20 grid gap-16">
		{#each slice.primary.study as item}
			<PrismicLink field={item.case_study}>Link</PrismicLink>
			<!-- Company -->
			<!-- description -->
			<!-- image -->
			<!-- link to CS -->
		{/each}
	</div>
</Bounded>
