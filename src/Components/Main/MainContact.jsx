import React from 'react'
import { IconBrandTelegram, IconBrandWhatsapp, IconMapSearch } from '@tabler/icons-react'

const MainContact = () => {
	return (
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
	)
}

export default MainContact