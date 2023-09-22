import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './routes/AppRouter'

function App() {
	return (
		<MantineProvider>
			<RouterProvider router={AppRouter} />
			{/* <Chessboard /> */}
		</MantineProvider>
	)
}

export default App
