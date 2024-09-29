<script lang="ts">
	import { PrismicLink } from '@prismicio/svelte';
	import type { SettingsDocument } from '../../prismicio-types';
	import WordMark from './WordMark.svelte';

	let { settings }: { settings: SettingsDocument<string> } = $props();
</script>

<header>
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-gray-600 px-8 py-7 md:flex-row"
		aria-label="Main"
	>
		<a href="/">
			<WordMark></WordMark>
			<span class="sr-only">{settings.data.site_title}</span>
		</a>
		<ul class="flex gap-6">
			{#each settings.data.navigation as item (item.label)}
				<li>
					<PrismicLink class="inline-flex min-h-11 items-center" field={item.link}
						>{item.label}</PrismicLink
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
