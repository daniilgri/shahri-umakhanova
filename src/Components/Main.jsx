import React from 'react'
import ReviewsCarousel from './ReviewsCarousel'
import { IconBrandTelegram, IconBrandWhatsapp, IconMapSearch } from '@tabler/icons-react'


const Main = () => {
	return (
		<main className='App-main'>
			<article className='main-price'>
				<section className='price-title'>
					<h2>Прайс на услуги:</h2>
				</section>
				<section className='price-places'>
					<div className='price-places-frame'>Москва</div>
				</section>
				<section className='price-assortment'>
					<div className='assortment-count'>
						<div className='assortment-service'>Биоревитализация</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								REVI Silk (2ml) - 13000р
							</div>
							<div className='assortment-price-few-item'>
								REVI Strong (2ml) - 14000P
							</div>
							<div className='assortment-price-few-item'>
								Meso-Wharton - 13000Р
							</div>
							<div className='assortment-price-few-item'>Profhilo - 15000P</div>
							<div className='assortment-price-few-item'>
								Jalupro (3ml) - 10000P
							</div>
							<div className='assortment-price-few-item'>
								Jalupro Hydro - 13000р
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Биоревитализация вокруг глаз
							<span>
								*для устранения темных кругов под глазами и увлажнения зоны
								вокруг глаз
							</span>
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Mesoeye C71 - 10000p
							</div>
							<div className='assortment-price-few-item'>Revi - 8000P</div>
							<div className='assortment-price-few-item'>Blumgel - 6000P</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>Коллагенотерапия</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Collost micro (5ml) - 14000р
							</div>
							<div className='assortment-price-few-item'>
								Collost 7% - 8000p
							</div>
							<div className='assortment-price-few-item'>
								Collost 15% - 9000p
							</div>
							<div className='assortment-price-few-item'>
								Сферогель medium - 13000P
							</div>
							<div className='assortment-price-few-item'>
								Сферогель long - 14000р
								<br />
								<span>(устранение рубцов)</span>
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Ботулинотерапия
							<br />
							<span>Ботокс/ксеомин подбирается индивидуально</span>
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>Лоб - 4000р</div>
							<div className='assortment-price-few-item'>Межбровье - 3000р</div>
							<div className='assortment-price-few-item'>
								Лоб+Межбровье - 6000p
							</div>
							<div className='assortment-price-few-item'>
								Глаза (гусиные лапки) - 3000р
							</div>
							<div className='assortment-price-few-item'>
								Лифтинг бровей - 2000р
							</div>
							<div className='assortment-price-few-item'>
								Лечение гипергидроза подмышек - 9000р
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Мезотерапия (лицо)
							<br />
							<span>Курс: 3-4 процедуры</span>
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Healrepair 06 (против акне) - 6000р
							</div>
							<div className='assortment-price-few-item'>
								Mesoline acne - 6000р
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Мезотерапия (волосистой части головы)
							<br />
							<span>Курс: 4 процедуры</span>
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Hair XDNA Peptide - 6000р
							</div>
							<div className='assortment-price-few-item'>
								Dr Cyi Hair Filler - 12000р
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Коррекция лица филлерами на основе гиалуроновой кислоты
							(подбородок)
							<br />
							<span>Стоимость указана за 1 мл</span>
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Dermalax implant - 9000р
							</div>
							<div className='assortment-price-few-item'>
								Stylage XLr - 13000р
							</div>
							<div className='assortment-price-few-item'>Hyamax - 9000р</div>
							<div className='assortment-price-few-item'>
								Juvederm Ultra 4 - 14000р
							</div>
						</div>
					</div>

					<div className='assortment-count'>
						<div className='assortment-service'>
							Контурная пластика губ/ носогубных складок
						</div>
						<div className='assortment-price-few'>
							<div className='assortment-price-few-item'>
								Stylage M 1мл - 13000р
							</div>
							<div className='assortment-price-few-item'>
								Stylage M 0.5мл - 10000р
							</div>
							<div className='assortment-price-few-item'>
								Dermalax Deep 1мл - 10000р
							</div>
							<div className='assortment-price-few-item'>
								Dermalax Deep 0.5мл - 8000р
							</div>
							<div className='assortment-price-few-item'>
								E.p.t.q. S300 1мл - 11000р
							</div>
							<div className='assortment-price-few-item'>
								E.p.t.q. S300 0.5мл - 9000р
							</div>
							<div className='assortment-price-few-item'>
								Juvederm Ultra 3 1мл - 16000р
							</div>
							<div className='assortment-price-few-item'>Выведение - 3000р</div>
						</div>
					</div>
				</section>
			</article>

			<article className='main-feedback'>
				<section className='feedback-title'>
					<h2>Отзывы</h2>
				</section>
				<section className='feedback-box'>
					<ReviewsCarousel></ReviewsCarousel>
				</section>
			</article>

			<article className="main-contacts">
				<section className="contacts-title">
					<h2>
						Контакты
					</h2>
				</section>
				<section className="contacts-box">
					<div className="contacts-box-item">
						<span>
							<IconMapSearch width={25} height={25} />
						</span>
						<div className="contacts-box-title">
							<h3>Пятницкая 62с7, <br /> м. Добрынинская</h3>
						</div>
					</div>
					<a href="https://wa.me/79296961514" target="_blank" rel="noreferrer" className="contacts-box-item">
						<span>
							<IconBrandWhatsapp width={25} height={25} />
						</span>
						<div className="contacts-box-title">
							<h3>Whatsapp</h3>
						</div>
					</a>
					<a href="https://t.me/79296961514" target="_blank" rel="noreferrer" className="contacts-box-item">
						<span>
							<IconBrandTelegram width={25} height={25} />
						</span>
						<div className="contacts-box-title">
							<h3>Telegram</h3>
						</div>
					</a>
				</section>
			</article>
		</main>
	)
}

export default Main
