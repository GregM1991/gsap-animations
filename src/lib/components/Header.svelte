<script lang="ts">
	import { PrismicLink } from '@prismicio/svelte'
	import { asLink, type LinkField } from '@prismicio/client'
	import type { SettingsDocument } from '../../prismicio-types'
	import { WordMark, ButtonLink } from '$lib/components'
	import clsx from 'clsx'
	import IconClose from '~icons/ph/x-bold'
	import IconMenu from '~icons/ph/list-bold'
	import { page } from '$app/stores'

	let { settings }: { settings: SettingsDocument<string> } = $props()
	let isOpen = $state(false)

	const toggleOpen = () => (isOpen = !isOpen)
	const close = () => (isOpen = false)
	const isActive = (link: LinkField) => {
		const path = asLink(link)
		return path && $page.url.pathname.includes(path)
	}
</script>

<header class="p-4 md:p-6">
	<nav
		class="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"
		aria-label="Main"
	>
		<div class="flex items-center justify-between">
			<a href="/" onclick={close} class="z-50">
				<WordMark></WordMark>
				<span class="sr-only">{settings.data.site_title}</span>
			</a>

			<button
				aria-expanded={isOpen}
				type="button"
				class="block p-2 text-3xl text-white md:hidden"
				onclick={toggleOpen}
			>
				<IconMenu />
			</button>
		</div>
		<!-- Mobile Nav -->
		<div
			class={clsx(
				'fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden',
				isOpen ? 'translate-x-0' : 'translate-x-[100%]',
			)}
		>
			<button
				aria-expanded={isOpen}
				type="button"
				class="block p-2 text-3xl text-white md:hidden"
				onclick={toggleOpen}
			>
				<IconClose />
			</button>
			<ul class="grid justify-items-end gap-8">
				{#each settings.data.navigation as item (item.label)}
					<li>
						{#if item.cta_button}
							<ButtonLink
								onclick={close}
								field={item.link}
								aria-current={isActive(item.link) ? 'page' : undefined}
								>{item.label}</ButtonLink
							>
						{:else}
							<PrismicLink
								onclick={close}
								class="block min-h-11 px-3 text-3xl	first:mt-8"
								aria-current={isActive(item.link) ? 'page' : undefined}
								field={item.link}>{item.label}</PrismicLink
							>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Desktop Nav -->
		<ul class="hidden gap-6 md:flex">
			{#each settings.data.navigation as item (item.label)}
				<li>
					{#if item.cta_button}
						<ButtonLink
							onclick={close}
							field={item.link}
							aria-current={isActive(item.link) ? 'page' : undefined}
							>{item.label}</ButtonLink
						>
					{:else}
						<PrismicLink
							aria-current={isActive(item.link) ? 'page' : undefined}
							onclick={close}
							class="inline-flex min-h-11 items-center"
							field={item.link}>{item.label}</PrismicLink
						>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>
