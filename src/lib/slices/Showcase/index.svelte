<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte'
	import ButtonLink from '$lib/components/ButtonLink.svelte'
	import type { Content } from '@prismicio/client'
	import {
		PrismicImage,
		PrismicText,
		PrismicLink,
		PrismicRichText,
	} from '@prismicio/svelte'
	import clsx from 'clsx'

	export let slice: Content.ShowcaseSlice
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative"
>
	<div
		class="absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-violet-500/40 mix-blend-screen blur-[120px] filter"
	></div>
	{#if slice.primary.heading}
		<h2 class="text-balance text-center text-5xl font-medium md:text-7xl">
			<PrismicText field={slice.primary.heading} />
		</h2>
	{/if}
	<div
		class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
	>
		<div>
			{#if slice.primary.icon}
				<div class="w-fit rounded-lg bg-violet-800 p-4 text-3xl">
					{slice.primary.icon}
				</div>
			{/if}
			{#if slice.primary.subheading}
				<h3 class="mt-6 text-2xl font-normal">
					<PrismicText field={slice.primary.subheading} />
				</h3>
			{/if}
			{#if slice.primary.body}
				<div class="prose prose-invert mt-4 max-w-xl">
					<PrismicRichText field={slice.primary.body} />
				</div>
			{/if}
			{#if slice.primary.button_link}
				<ButtonLink class="mt-6" field={slice.primary.button_link}
					>{slice.primary.button_text || 'Learn more'}</ButtonLink
				>
			{/if}
		</div>

		<PrismicImage class={clsx("opacity-90 shadow-2xl lg:col-span-2 lg:pt-0", slice.variation === "reverse" ? :)} field={slice.primary.image} />
	</div>
</Bounded>
