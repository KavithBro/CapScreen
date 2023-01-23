import { GitHub, Telegram } from '@/assets/icons/Social'
import style from '@/styles/modal.module.scss'

const InfoFooter = () => {
	return (
		<div className={style.modalFooter}>
			<a href="htpps://CapScreen.cf" target="_blank" rel="noreferrer">
				<GitHub />
			</a>
			<a href="htpps://CapScreen.cf" target="_blank" rel="noreferrer">
				<Telegram />
			</a>
			<span>
				Copyright © 2022{' '}
				<a href="htpps://CapScreen.cf" target="_blank" rel="noreferrer">
					Kavith Gunawardena
				</a>
				. All rights reserved.
			</span>
		</div>
	)
}

export default InfoFooter
