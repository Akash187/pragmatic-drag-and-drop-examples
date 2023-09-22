import { useDisclosure } from '@mantine/hooks'
import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Container,
	Group,
	NavLink,
	Stack,
	Title
} from '@mantine/core'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconBrandGithub, IconChevronRight } from '@tabler/icons-react'

const links: { title: string; link: string; source: string }[] = [
	{
		title: 'Chess',
		link: '/chess',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/chess.tsx'
	},
	{
		title: 'List',
		link: '/list',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/list.tsx'
	},
	{
		title: 'Grid',
		link: '/grid',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/grid.tsx'
	},
	{
		title: 'Board',
		link: '/board',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/board.tsx'
	},
	{
		title: 'Board With Auto Scroll',
		link: '/board-with-autoscroll',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/board-with-autoscroll.tsx'
	},
	{
		title: 'Board With New Auto Scroll',
		link: '/board-with-new-autoscroll',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/board-with-new-autoscroll.tsx'
	},
	{
		title: 'Drop File',
		link: '/file',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/file.tsx'
	},
	{
		title: 'Drawing',
		link: '/drawing',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/drawing.tsx'
	},
	{
		title: 'Post Drop Flash Prototype',
		link: '/post-drop-flash-prototype',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/flash-prototype.tsx'
	},
	{
		title: 'Resizing',
		link: '/resizing',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/resizing.tsx'
	},
	{
		title: 'Table',
		link: '/table',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/table.tsx'
	},
	{
		title: 'Tree',
		link: '/tree',
		source:
			'https://github.com/Akash187/pragmatic-drag-and-drop-examples/blob/main/src/examples/tree.tsx'
	}
]

const Root = () => {
	const [opened, { toggle }] = useDisclosure()
	const location = useLocation()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Container
					style={{
						alignItems: 'center',
						display: 'flex',
						width: '100%',
						height: '100%'
					}}
					size="lg"
				>
					<Group w="100%" h="100%" px="md" justify="space-between">
						<Group>
							<Burger
								opened={opened}
								onClick={toggle}
								hiddenFrom="sm"
								size="sm"
							/>
							<Title order={5}>Pragmatic Drag and Drop Example</Title>
							<Anchor component={Link} to="/">
								Home
							</Anchor>
						</Group>
						<ActionIcon
							component="a"
							href="https://github.com/Akash187/pragmatic-drag-and-drop-examples"
							target="_blank"
							radius="xl"
						>
							<IconBrandGithub
								style={{ width: '70%', height: '70%' }}
								stroke={1.5}
							/>
						</ActionIcon>
					</Group>
				</Container>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				{links.map((link) => (
					<NavLink
						key={link.title}
						label={link.title}
						rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
						variant="filled"
						component={Link}
						to={link.link}
						active={location.pathname === link.link}
					/>
				))}
			</AppShell.Navbar>
			<AppShell.Main>
				<Stack>
					{links.map((link) => {
						if (link.link === location.pathname) {
							return <Anchor href={link.source}>Source Code</Anchor>
						}
					})}
					<Outlet />
				</Stack>
			</AppShell.Main>
		</AppShell>
	)
}

export default Root
