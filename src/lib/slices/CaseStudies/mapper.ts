import * as prismic from '@prismicio/client'

export default async function mapper({
	slice,
	context,
}: {
	slice: prismic.Content.CaseStudiesSlice
	context: { client: prismic.Client<prismic.Content.AllDocumentTypes> }
}) {
	const caseStudies = (
		await Promise.all(
			slice.primary.case_study.map(async item => {
				if (prismic.isFilled.contentRelationship(item.case_study)) {
					return await context.client.getByID<prismic.Content.CaseStudyDocument>(
						item.case_study.id,
					)
				}
			}),
		)
	).filter(Boolean)

	return {
		slice,
		caseStudies,
	}
}
