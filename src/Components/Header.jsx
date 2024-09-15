import React from 'react'
import '../Styles/header.css'

const Header = ({styleTop, styleBottom}) => {
	return (
		<header className='App-header'>
			<div style={styleTop} className="header-top-box">
				<div className='header-top'>Шахри Умаханова</div>
				<div className='avatar'>
					<img src='./avatar.jpg' className='App-logo' alt='logo' />
				</div>
			</div>
			<div className='header-bottom'>
				<a style={styleBottom} href="https://wa.me/79296961514" className='header-btn'>
					<p>ЗАПИСАТЬСЯ НА ПРИЕМ</p>
				</a>
				<div className='header-text'>
					По всем интересующим вас вопросам, а также по поводу записи на прием
					вы можете обращаться по номеру
					<br />
					<a href="https://wa.me/79296961514" target="_blank" rel="noreferrer" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontWeight: '700' }}>
						<strong>+7 (929) 696-15-14</strong>
					</a>
				</div>
			</div>
			</header>
	)
}

export default Header