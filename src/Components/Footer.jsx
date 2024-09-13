import React from 'react'
// import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footerc'>
					<h3>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://zhilyasov.vercel.app/'
						>
							Made by <strong>Zhilyasov</strong>
						</a>
					</h3>
					<div className='footerc__socials'>
						<a
							aria-label='telegram'
							target='_blank'
							rel='noreferrer'
							href='https://t.me/Zhilyasov'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='25'
								height='25'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='tabler-icon tabler-icon-brand-telegram'
							>
								<path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'></path>
							</svg>
						</a>
						<a
							aria-label='github'
							target='_blank'
							rel='noreferrer'
							href='https://github.com/Zhilyasov'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='25'
								height='25'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='tabler-icon tabler-icon-brand-github'
							>
								<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
