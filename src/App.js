import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

import React, { useState, useEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ValueContext } from './Components/Main'

function App() {

	const [showValue, setShowValue] = useState('false')
	const [yPos, setYPos] = useState(0)
	const [headerStyleTop, setHeaderStyleTop] = useState({
		transition: 'all 300ms ease-in',
		transform: 'translate(0, -20%)',
		opacity: '0'
	})
	const [headerStyleBottom, setHeaderStyleBottom] = useState({
		transition: 'all 300ms ease-in',
		transform: 'translate(0, 400%)',
		opacity: '0'
	})
	const [assortment, setAssortment] = useState({
		transition: 'all 600ms ease-in',
		opacity: '0',
	})

	const windowInnerHeight = window.innerHeight
	useScrollPosition(
		({ currPos }) => {

			if (Math.round((-(currPos.y+(-windowInnerHeight))) > Math.round(yPos)) && (showValue === 'false')) {
				
				setShowValue('true')
				setAssortment({
					transition: 'all 600ms ease-in',
					opacity: '1',
				})
			}
		},
		[showValue]
	)
	
	useEffect(() => {
		setHeaderStyleTop({
			transition: `all 300ms ease-in'`,
			transform: 'translate(0, 0)',
			opacity: '1',
		})
		
		setHeaderStyleBottom({
			transition: `all 300ms ease-in'`,
			transform: 'translate(0, 0)',
			opacity: '0.9',
		})
	}, [])

	return (
		<ValueContext.Provider value={{ yPos, setYPos }}>
			<div className='App'>
				<Header styleTop={{ ...headerStyleTop }} styleBottom={{ ...headerStyleBottom }}></Header>
				<Main style={{ ...assortment }}></Main>
				<Footer></Footer>
			</div>
		</ValueContext.Provider>
	)
}

export default App
