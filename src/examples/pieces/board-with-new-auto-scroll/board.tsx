import { Fragment, memo, ReactNode, useEffect, useRef } from 'react'

import { css } from '@emotion/react'
import invariant from 'tiny-invariant'

import { standard } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/behavior/standard'
import { unsafeOverflow } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/behavior/unsafe-overflow'
import { autoScrollForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/element'
import { autoScrollForFiles } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/file'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/util/combine'
import { token } from '@atlaskit/tokens'

import { columnGap, gridSize } from '../../util/constants'
import { GlobalStyles } from '../../util/global-styles'

const boardStyles = css({
	'--grid': `${gridSize}px`,
	display: 'flex',
	gap: columnGap,
	flexDirection: 'row',
	height: '100%',
	padding: columnGap,
	boxSizing: 'border-box',
	width: 'min-content' // doing this so that we get the correct padding around the element
})

const scrollContainerStyles = css({
	border: `${token('border.width', '2px')} solid ${token(
		'color.chart.purple.bold',
		'purple'
	)}`,
	// maxWidth: 600,
	maxWidth: '80vw',
	overflowY: 'auto',
	// TODO: remove margin before shipping
	margin: 'calc(var(--grid) * 4) auto 0 auto',
	// height: '150vh',
	height: 600
})

function Board({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		invariant(ref.current)
		return combine(
			autoScrollForElements({
				element: ref.current,
				behavior: [
					// standard(),
					unsafeOverflow({
						getHitboxSpacing: () => ({
							top: {
								top: 6000,
								right: 6000,
								bottom: 220,
								left: 6000
							},
							right: {
								top: 6000,
								right: 6000,
								bottom: 6000,
								left: 220
							},
							bottom: {
								top: 220,
								right: 6000,
								bottom: 6000,
								left: 6000
							},
							left: {
								top: 6000,
								right: 220,
								left: 6000,
								bottom: 6000
							}
						})
					})
				]
			}),
			autoScrollForFiles({
				element: ref.current,
				behavior: [standard()]
			})
		)
	}, [])
	return (
		<Fragment>
			<div ref={ref} css={scrollContainerStyles}>
				<div css={boardStyles}>{children}</div>
			</div>
			<GlobalStyles />
		</Fragment>
	)
}

export default memo(Board)
