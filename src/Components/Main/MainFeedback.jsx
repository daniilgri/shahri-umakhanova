import React from 'react'
import ReviewsCarousel from '../ReviewsCarousel'

const MainFeedback = () => {
	return (
		<article className='main-feedback'>
				<section className='feedback-title'>
					<h2>Отзывы</h2>
				</section>
				<section className='feedback-box'>
					<ReviewsCarousel />
				</section>
			</article>
	)
}

export default MainFeedback