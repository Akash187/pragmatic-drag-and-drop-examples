import { Stack, Title, Text, Anchor } from '@mantine/core'

const Home = () => {
	return (
		<Stack>
			<Title>Pragmatic Drag and Drop Example</Title>
			<Text>
				These are some of the official examples which is not released to public.{' '}
				Refer to github repo in Header to see the source code.
			</Text>
			<Anchor
				target="_blank"
				href="https://atlassian.design/components/pragmatic-drag-and-drop/"
			>
				Official Documentation (Not released)
			</Anchor>
			<Anchor
				target="_blank"
				href="https://bitbucket.org/atlassian/atlassian-frontend-mirror/src/master/pragmatic-drag-and-drop/"
			>
				Official Source Code
			</Anchor>
		</Stack>
	)
}
export default Home
