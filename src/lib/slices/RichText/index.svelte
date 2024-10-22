<script lang="ts">
	import { Bounded } from '$lib/components'
	import type { Content } from '@prismicio/client'
	import { PrismicRichText } from '@prismicio/svelte'

	export let slice: Content.RichTextSlice
</script>

<Bounded>
	<div class="prose prose-lg prose-slate prose-invert w-full">
		<PrismicRichText
			field={slice.primary.content}
			components={{
	
			}}
		/>
	</div>
</Bounded>
