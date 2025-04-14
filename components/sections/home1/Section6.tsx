'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section6() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-videos">
				<div className="container" data-aos="fade-up">
					<div className="box-video">
						<a onClick={() => setOpen(true)} className="popup-video"><img src="/assets/imgs/pages/home1/play.svg" alt="Vatech" /></a>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
