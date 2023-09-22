import { useDisclosure } from '@mantine/hooks'
import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Container,
	Group,
	NavLink,
	Title
} from '@mantine/core'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconBrandGithub, IconChevronRight } from '@tabler/icons-react'

const links: { title: string; link: string }[] = [
	{ title: 'Chess', link: '/chess' },
	{ title: 'List', link: '/list' },
	{ title: 'Grid', link: '/grid' },
	{ title: 'Board', link: '/board' },
	{ title: 'Board With Auto Scroll', link: '/board-with-autoscroll' },
	{ title: 'Board With New Auto Scroll', link: '/board-with-new-autoscroll' },
	{ title: 'Drop File', link: '/file' },
	{ title: 'Drawing', link: '/drawing' },
	{ title: 'Post Drop Flash Prototype', link: '/post-drop-flash-prototype' },
	{ title: 'Resizing', link: '/resizing' },
	{ title: 'Table', link: '/table' },
	{ title: 'Tree', link: '/tree' }
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
						<ActionIcon radius="xl">
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
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}

export default Root
