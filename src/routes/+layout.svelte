<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/dm-sans'
	import { PrismicPreview } from '@prismicio/svelte/kit'
	import { page } from '$app/stores'
	import { repositoryName } from '$lib/prismicio'
	import type { Snippet } from 'svelte'
	import type { SettingsDocument } from '../prismicio-types'
	import { Header, Footer } from '$lib/components'

	let {
		children,
		settings,
	}: {
		children: Snippet
		settings: SettingsDocument<string>
	} = $props()
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Header settings={$page.data.settings} />
<main>
	{@render children()}
</main>
<Footer settings={$page.data.settings} />
<PrismicPreview {repositoryName} />
