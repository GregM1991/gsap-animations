<script lang="ts">
	import clsx from 'clsx'
	import type { Snippet } from 'svelte'

	type BoundedProps = {
		tag?: string
		children: Snippet
		class?: string
		[key: string]: any
	}

	let {
		tag = 'section',
		children,
		class: className,
		...restProps
	}: BoundedProps = $props()
</script>

<svelte:element
	this={tag}
	{...restProps}
	class={clsx('px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24', className)}
>
	<div class="mx-auto flex w-full max-w-6xl flex-col items-center">
		{@render children()}
	</div>
</svelte:element>
