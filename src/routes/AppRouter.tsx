import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root'
import Chessboard from '../examples/chess'
import Tree from '../examples/tree'
import Table from '../examples/table'
import Resizing from '../examples/resizing'
import List from '../examples/list'
import Grid from '../examples/grid'
import PostDropFlashPrototype from '../examples/flash-prototype'
import File from '../examples/file'
import Drawing from '../examples/drawing'
import BoardExample from '../examples/board'
import AutoScrollExample from '../examples/board-with-autoscroll'
import CrossWindowBoardExample from '../examples/board-with-cross-window'
import NewAutoScrollExample from '../examples/board-with-new-autoscroll'
import Home from '../components/Home'

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <h1>Error occurred</h1>,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'chess', element: <Chessboard /> },
			{ path: 'list', element: <List /> },
			{ path: 'grid', element: <Grid /> },
			{ path: 'file', element: <File /> },
			{ path: 'drawing', element: <Drawing /> },
			{ path: 'board', element: <BoardExample /> },
			{ path: 'board-with-autoscroll', element: <AutoScrollExample /> },
			{ path: 'board-with-new-autoscroll', element: <NewAutoScrollExample /> },
			{
				path: 'post-drop-flash-prototype',
				element: <PostDropFlashPrototype />
			},
			{ path: 'resizing', element: <Resizing /> },
			{ path: 'table', element: <Table /> },
			{ path: 'tree', element: <Tree /> }

			// {
			// 	path: 'reset-password',
			// 	element: <ProtectedRoute component={<ResetPassword />} />
			// },
			// {
			// 	path: 'settings',
			// 	element: <ProtectedRoute component={<Settings />} />
			// },
			// {
			// 	path: 'board/:id',
			// 	element: <ProtectedRoute component={<Board />} />
			// }
		]
	}
])

export default AppRouter
