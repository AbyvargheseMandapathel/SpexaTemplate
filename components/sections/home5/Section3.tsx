
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-services-5">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<p className="title-line-both neutral-1200">our Service</p>
						<h3 className="heading-3xl neutral-1200">
							Inspiring Confidence corporate<br className="d-none d-lg-block" />
							Delivering Solutions
						</h3>
					</div>
					<div className="row align-items-center mt-60">
						<div className="col-lg-4 col-md-6">
							<div className="card-service-2">
								<div className="card-icon">
									<div className="card-icon-left">
										<svg width={40} height={50} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.1113 8.93772C19.8991 8.93772 19.6957 8.85343 19.5456 8.7034C19.3956 8.55338 19.3113 8.34989 19.3113 8.13772V6.18222C19.3113 6.08073 19.271 5.98339 19.1993 5.91157C19.1276 5.83976 19.0303 5.79935 18.9288 5.79922H11.5518C11.4505 5.79948 11.3533 5.83997 11.2818 5.91178C11.2103 5.98359 11.1702 6.08086 11.1703 6.18222V8.13772C11.1703 8.34989 11.086 8.55338 10.936 8.7034C10.786 8.85343 10.5825 8.93772 10.3703 8.93772C10.1581 8.93772 9.95466 8.85343 9.80463 8.7034C9.6546 8.55338 9.57031 8.34989 9.57031 8.13772V6.18222C9.57071 5.65668 9.77955 5.15275 10.151 4.78099C10.5225 4.40924 11.0263 4.20001 11.5518 4.19922H18.9288C19.4545 4.19988 19.9584 4.40903 20.3301 4.78079C20.7018 5.15254 20.9108 5.65654 20.9113 6.18222V8.13772C20.9113 8.34989 20.827 8.55338 20.677 8.7034C20.527 8.85343 20.3235 8.93772 20.1113 8.93772Z" fill="white" />
											<path d="M27.5058 45.7985H2.97581C2.33804 45.7978 1.72657 45.5442 1.2756 45.0932C0.824623 44.6422 0.570974 44.0307 0.570312 43.393V12.6985C0.570974 12.0607 0.824623 11.4492 1.2756 10.9983C1.72657 10.5473 2.33804 10.2936 2.97581 10.293H7.13481C7.34699 10.293 7.55047 10.3773 7.7005 10.5273C7.85053 10.6773 7.93481 10.8808 7.93481 11.093C7.93481 11.3051 7.85053 11.5086 7.7005 11.6587C7.55047 11.8087 7.34699 11.893 7.13481 11.893H2.97581C2.76226 11.8932 2.55753 11.9782 2.40653 12.1292C2.25553 12.2802 2.17058 12.4849 2.17031 12.6985V43.393C2.17058 43.6065 2.25553 43.8112 2.40653 43.9622C2.55753 44.1133 2.76226 44.1982 2.97581 44.1985H27.5058C27.7194 44.1982 27.9241 44.1133 28.0751 43.9622C28.2261 43.8112 28.311 43.6065 28.3113 43.393V38.3955C28.3113 38.1833 28.3956 37.9798 28.5456 37.8298C28.6957 37.6798 28.8991 37.5955 29.1113 37.5955C29.3235 37.5955 29.527 37.6798 29.677 37.8298C29.827 37.9798 29.9113 38.1833 29.9113 38.3955V43.393C29.9106 44.0307 29.657 44.6422 29.206 45.0932C28.755 45.5442 28.1436 45.7978 27.5058 45.7985Z" fill="white" />
											<path d="M29.1109 21.6955C28.8987 21.6955 28.6952 21.6112 28.5452 21.4612C28.3952 21.3111 28.3109 21.1076 28.3109 20.8955V12.6985C28.3106 12.4849 28.2257 12.2802 28.0747 12.1292C27.9237 11.9782 27.7189 11.8932 27.5054 11.893H23.3469C23.1347 11.893 22.9312 11.8087 22.7812 11.6587C22.6312 11.5086 22.5469 11.3051 22.5469 11.093C22.5469 10.8808 22.6312 10.6773 22.7812 10.5273C22.9312 10.3773 23.1347 10.293 23.3469 10.293H27.5054C28.1431 10.2936 28.7546 10.5473 29.2056 10.9983C29.6566 11.4492 29.9102 12.0607 29.9109 12.6985V20.8955C29.9109 21.1076 29.8266 21.3111 29.6766 21.4612C29.5265 21.6112 29.323 21.6955 29.1109 21.6955Z" fill="white" />
											<path d="M22.2589 15.0569H8.21344C7.71442 15.0479 7.2387 14.8442 6.88789 14.4892C6.53708 14.1341 6.33899 13.656 6.33594 13.1569V9.22444C6.3366 8.72361 6.53592 8.24349 6.89015 7.88944C7.24439 7.5354 7.72461 7.33633 8.22544 7.33594H10.3864C10.5986 7.33594 10.8021 7.42022 10.9521 7.57025C11.1022 7.72028 11.1864 7.92376 11.1864 8.13594C11.1864 8.34811 11.1022 8.55159 10.9521 8.70162C10.8021 8.85165 10.5986 8.93594 10.3864 8.93594H8.22594C8.14933 8.93594 8.07585 8.9663 8.02158 9.02038C7.96732 9.07445 7.9367 9.14783 7.93644 9.22444V13.1579C7.9376 13.2371 7.96958 13.3128 8.02559 13.3688C8.0816 13.4248 8.15724 13.4568 8.23644 13.4579H22.2504C22.3296 13.4568 22.4053 13.4248 22.4613 13.3688C22.5173 13.3128 22.5493 13.2371 22.5504 13.1579V9.22444C22.5502 9.14783 22.5196 9.07445 22.4653 9.02038C22.411 8.9663 22.3375 8.93594 22.2609 8.93594H20.0979C19.8858 8.93594 19.6823 8.85165 19.5323 8.70162C19.3822 8.55159 19.2979 8.34811 19.2979 8.13594C19.2979 7.92376 19.3822 7.72028 19.5323 7.57025C19.6823 7.42022 19.8858 7.33594 20.0979 7.33594H22.2589C22.7598 7.33633 23.24 7.5354 23.5942 7.88944C23.9485 8.24349 24.1478 8.72361 24.1484 9.22444V13.1579C24.1454 13.6569 23.9474 14.135 23.5967 14.49C23.246 14.845 22.7704 15.0488 22.2714 15.0579L22.2589 15.0569Z" fill="white" />
											<path d="M17.8467 25.307H11.7922C11.58 25.307 11.3765 25.2227 11.2265 25.0727C11.0765 24.9227 10.9922 24.7192 10.9922 24.507C10.9922 24.2949 11.0765 24.0914 11.2265 23.9413C11.3765 23.7913 11.58 23.707 11.7922 23.707H17.8467C18.0589 23.707 18.2623 23.7913 18.4124 23.9413C18.5624 24.0914 18.6467 24.2949 18.6467 24.507C18.6467 24.7192 18.5624 24.9227 18.4124 25.0727C18.2623 25.2227 18.0589 25.307 17.8467 25.307Z" fill="white" />
											<path d="M17.8467 30.4477H11.7922C11.58 30.4477 11.3765 30.3634 11.2265 30.2133C11.0765 30.0633 10.9922 29.8598 10.9922 29.6477C10.9922 29.4355 11.0765 29.232 11.2265 29.082C11.3765 28.9319 11.58 28.8477 11.7922 28.8477H17.8467C18.0589 28.8477 18.2623 28.9319 18.4124 29.082C18.5624 29.232 18.6467 29.4355 18.6467 29.6477C18.6467 29.8598 18.5624 30.0633 18.4124 30.2133C18.2623 30.3634 18.0589 30.4477 17.8467 30.4477Z" fill="white" />
											<path d="M17.8467 35.5883H11.7922C11.58 35.5883 11.3765 35.504 11.2265 35.354C11.0765 35.2039 10.9922 35.0005 10.9922 34.7883C10.9922 34.5761 11.0765 34.3726 11.2265 34.2226C11.3765 34.0726 11.58 33.9883 11.7922 33.9883H17.8467C18.0589 33.9883 18.2623 34.0726 18.4124 34.2226C18.5624 34.3726 18.6467 34.5761 18.6467 34.7883C18.6467 35.0005 18.5624 35.2039 18.4124 35.354C18.2623 35.504 18.0589 35.5883 17.8467 35.5883Z" fill="white" />
											<path d="M23.3467 20.182H11.7922C11.58 20.182 11.3765 20.0977 11.2265 19.9477C11.0765 19.7977 10.9922 19.5942 10.9922 19.382C10.9922 19.1699 11.0765 18.9664 11.2265 18.8163C11.3765 18.6663 11.58 18.582 11.7922 18.582H23.3467C23.5589 18.582 23.7623 18.6663 23.9124 18.8163C24.0624 18.9664 24.1467 19.1699 24.1467 19.382C24.1467 19.5942 24.0624 19.7977 23.9124 19.9477C23.7623 20.0977 23.5589 20.182 23.3467 20.182Z" fill="white" />
											<path d="M23.3467 40.7094H11.7922C11.58 40.7094 11.3765 40.6251 11.2265 40.4751C11.0765 40.325 10.9922 40.1215 10.9922 39.9094C10.9922 39.6972 11.0765 39.4937 11.2265 39.3437C11.3765 39.1937 11.58 39.1094 11.7922 39.1094H23.3467C23.5589 39.1094 23.7623 39.1937 23.9124 39.3437C24.0624 39.4937 24.1467 39.6972 24.1467 39.9094C24.1467 40.1215 24.0624 40.325 23.9124 40.4751C23.7623 40.6251 23.5589 40.7094 23.3467 40.7094Z" fill="white" />
											<path d="M6.42864 21.5967C6.21658 21.5967 6.01318 21.5125 5.86314 21.3627L4.44864 19.9497C4.30226 19.7989 4.2211 19.5966 4.22268 19.3864C4.22426 19.1763 4.30847 18.9752 4.4571 18.8266C4.60573 18.6781 4.80684 18.5939 5.01699 18.5925C5.22713 18.591 5.42942 18.6722 5.58014 18.8187L6.43014 19.6687L8.69314 17.4057C8.84393 17.2593 9.04625 17.1781 9.25639 17.1797C9.46654 17.1813 9.66762 17.2655 9.81618 17.4141C9.96475 17.5628 10.0489 17.7639 10.0504 17.974C10.0518 18.1842 9.97059 18.3865 9.82414 18.5372L6.99614 21.3657C6.92137 21.4396 6.83276 21.498 6.73538 21.5377C6.63801 21.5773 6.53377 21.5973 6.42864 21.5967Z" fill="white" />
											<path d="M6.42528 26.7198C6.21321 26.7198 6.00981 26.6356 5.85978 26.4858L4.44528 25.0713C4.29523 24.9212 4.21094 24.7177 4.21094 24.5055C4.21094 24.2933 4.29523 24.0898 4.44528 23.9398C4.59533 23.7897 4.79883 23.7054 5.01103 23.7054C5.22323 23.7054 5.42673 23.7897 5.57678 23.9398L6.42678 24.7898L8.68978 22.5268C8.84056 22.3804 9.04289 22.2992 9.25303 22.3008C9.46317 22.3024 9.66426 22.3866 9.81282 22.5352C9.96139 22.6839 10.0455 22.885 10.047 23.0951C10.0485 23.3053 9.96722 23.5075 9.82078 23.6583L6.99278 26.4868C6.91817 26.561 6.82963 26.6198 6.73225 26.6598C6.63487 26.6998 6.53055 26.7202 6.42528 26.7198Z" fill="white" />
											<path d="M6.42528 31.863C6.32021 31.8631 6.21614 31.8425 6.11908 31.8023C6.02203 31.762 5.9339 31.703 5.85978 31.6285L4.44528 30.2145C4.29523 30.0644 4.21094 29.8609 4.21094 29.6487C4.21094 29.4365 4.29523 29.233 4.44528 29.083C4.59533 28.9329 4.79883 28.8486 5.01103 28.8486C5.22323 28.8486 5.42673 28.9329 5.57678 29.083L6.42678 29.933L8.68978 27.6705C8.76296 27.5915 8.85134 27.528 8.94962 27.484C9.04791 27.44 9.15407 27.4162 9.26175 27.4142C9.36943 27.4122 9.47641 27.4319 9.57627 27.4723C9.67614 27.5126 9.76683 27.5727 9.84292 27.6489C9.91901 27.7251 9.97892 27.8159 10.0191 27.9158C10.0592 28.0158 10.0788 28.1228 10.0766 28.2305C10.0744 28.3381 10.0504 28.4443 10.0062 28.5425C9.96201 28.6407 9.89843 28.7289 9.81928 28.802L6.99128 31.63C6.91695 31.7042 6.82867 31.763 6.73154 31.803C6.6344 31.843 6.53032 31.8634 6.42528 31.863Z" fill="white" />
											<path d="M6.42528 36.9985C6.21314 36.9984 6.00973 36.914 5.85978 36.764L4.44528 35.35C4.37098 35.2757 4.31205 35.1875 4.27184 35.0904C4.23163 34.9933 4.21094 34.8893 4.21094 34.7842C4.21094 34.6791 4.23163 34.5751 4.27184 34.478C4.31205 34.381 4.37098 34.2928 4.44528 34.2185C4.51957 34.1442 4.60778 34.0852 4.70485 34.045C4.80192 34.0048 4.90596 33.9841 5.01103 33.9841C5.1161 33.9841 5.22014 34.0048 5.31721 34.045C5.41428 34.0852 5.50248 34.1442 5.57678 34.2185L6.42678 35.0685L8.68978 32.806C8.84103 32.6623 9.04243 32.5833 9.25104 32.586C9.45965 32.5887 9.65896 32.6727 9.80648 32.8203C9.954 32.9678 10.0381 33.1671 10.0407 33.3757C10.0434 33.5843 9.96448 33.7857 9.82078 33.937L6.99278 36.7655C6.91817 36.8397 6.82963 36.8985 6.73225 36.9385C6.63487 36.9785 6.53055 36.9989 6.42528 36.9985Z" fill="white" />
											<path d="M6.42864 42.123C6.21651 42.1229 6.01309 42.0386 5.86314 41.8885L4.44864 40.474C4.30226 40.3232 4.2211 40.1209 4.22268 39.9108C4.22426 39.7006 4.30847 39.4995 4.4571 39.351C4.60573 39.2024 4.80684 39.1183 5.01699 39.1168C5.22713 39.1153 5.42942 39.1966 5.58014 39.343L6.43014 40.193L8.69314 37.93C8.76704 37.854 8.85532 37.7934 8.95284 37.7517C9.05037 37.7101 9.1552 37.6883 9.26124 37.6875C9.36728 37.6868 9.47241 37.7071 9.57052 37.7473C9.66863 37.7876 9.75775 37.8469 9.83272 37.9219C9.90769 37.9969 9.96699 38.0861 10.0072 38.1842C10.0474 38.2823 10.0677 38.3875 10.0669 38.4935C10.0661 38.5996 10.0442 38.7044 10.0025 38.8019C9.96087 38.8994 9.90023 38.9877 9.82414 39.0615L6.99614 41.89C6.92153 41.9643 6.833 42.0231 6.73561 42.0631C6.63823 42.1031 6.53391 42.1234 6.42864 42.123Z" fill="white" />
											<path d="M29.1125 39.1977C23.8465 39.1977 19.5625 34.9132 19.5625 29.6477C19.5625 24.3822 23.8465 20.0977 29.1125 20.0977C34.3785 20.0977 38.6625 24.3817 38.6625 29.6477C38.6625 34.9137 34.3785 39.1977 29.1125 39.1977ZM29.1125 21.6977C24.729 21.6977 21.1625 25.2637 21.1625 29.6477C21.1625 34.0317 24.729 37.5977 29.1125 37.5977C33.496 37.5977 37.0625 34.0312 37.0625 29.6477C37.0625 25.2642 33.496 21.6977 29.1125 21.6977Z" fill="white" />
											<path d="M27.3437 33.9818C27.1316 33.9824 26.9281 33.8988 26.7777 33.7493L23.2422 30.2138C23.1679 30.1395 23.1089 30.0513 23.0687 29.9543C23.0285 29.8572 23.0078 29.7532 23.0078 29.6481C23.0078 29.543 23.0285 29.439 23.0687 29.3419C23.1089 29.2448 23.1679 29.1566 23.2422 29.0823C23.3164 29.008 23.4046 28.9491 23.5017 28.9089C23.5988 28.8687 23.7028 28.848 23.8079 28.848C23.913 28.848 24.017 28.8687 24.1141 28.9089C24.2112 28.9491 24.2994 29.008 24.3737 29.0823L27.3437 32.0523L33.8487 25.5468C33.9987 25.3968 34.2022 25.3125 34.4144 25.3125C34.6266 25.3125 34.8301 25.3968 34.9802 25.5468C35.1302 25.6969 35.2145 25.9004 35.2145 26.1126C35.2145 26.3248 35.1302 26.5283 34.9802 26.6783L27.9092 33.7493C27.7589 33.8987 27.5555 33.9823 27.3437 33.9818Z" fill="white" />
										</svg>
									</div>
									<div className="card-icon-right">
										<h6 className="sub-heading-ag-xl">System Maintenance</h6>
									</div>
								</div>
								<div className="card-info">
									<p className="paragraph-rubik-r grey-800">Financial planners help people to gain us ism knowledge aboutw toio invest and save thed their money in the most</p>
									<Link href="#" className="link-primary-home">Learn More
										<svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="currentColor" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card-service-2">
								<div className="card-icon">
									<div className="card-icon-left">
										<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none">
											<path d="M33.2115 44.4365H16.7905C16.7031 44.4365 16.6166 44.4193 16.5358 44.3858C16.4551 44.3524 16.3817 44.3033 16.3199 44.2415C16.2581 44.1797 16.2091 44.1064 16.1757 44.0256C16.1422 43.9449 16.125 43.8584 16.125 43.771C16.125 43.6836 16.1422 43.597 16.1757 43.5163C16.2091 43.4356 16.2581 43.3622 16.3199 43.3004C16.3817 43.2386 16.4551 43.1896 16.5358 43.1561C16.6166 43.1227 16.7031 43.1055 16.7905 43.1055H33.2115C33.388 43.1055 33.5573 43.1756 33.6821 43.3004C33.8069 43.4252 33.877 43.5945 33.877 43.771C33.877 43.9475 33.8069 44.1167 33.6821 44.2415C33.5573 44.3664 33.388 44.4365 33.2115 44.4365Z" fill="white" />
											<path d="M42.1499 36.494H7.84994C6.91829 36.4929 6.02511 36.1224 5.36633 35.4636C4.70756 34.8048 4.337 33.9116 4.33594 32.98V9.077C4.33686 8.14527 4.70737 7.25195 5.36616 6.59307C6.02494 5.93419 6.91821 5.56356 7.84994 5.5625H42.1499C43.0817 5.56356 43.9749 5.93419 44.6337 6.59307C45.2925 7.25195 45.663 8.14527 45.6639 9.077V32.98C45.6629 33.9116 45.2923 34.8048 44.6335 35.4636C43.9748 36.1224 43.0816 36.4929 42.1499 36.494ZM7.84994 6.8935C7.27113 6.89429 6.71626 7.12461 6.30702 7.53394C5.89779 7.94327 5.6676 8.49819 5.66694 9.077V32.98C5.6676 33.5588 5.89781 34.1136 6.30705 34.5229C6.7163 34.9321 7.27117 35.1623 7.84994 35.163H42.1499C42.7287 35.1623 43.2836 34.9321 43.6928 34.5229C44.1021 34.1136 44.3323 33.5588 44.3329 32.98V9.077C44.3323 8.49819 44.1021 7.94327 43.6929 7.53394C43.2836 7.12461 42.7287 6.89429 42.1499 6.8935H7.84994Z" fill="white" />
											<path d="M42.5014 33.994H7.50144C7.32494 33.994 7.15566 33.9239 7.03086 33.7991C6.90605 33.6743 6.83594 33.505 6.83594 33.3285V8.7285C6.83587 8.64106 6.85304 8.55447 6.88645 8.47367C6.91987 8.39287 6.96888 8.31945 7.03068 8.2576C7.09248 8.19575 7.16587 8.14668 7.24665 8.11321C7.32742 8.07973 7.414 8.0625 7.50144 8.0625H42.5014C42.6779 8.0625 42.8472 8.13261 42.972 8.25742C43.0968 8.38223 43.1669 8.5515 43.1669 8.728V33.328C43.167 33.4154 43.1498 33.502 43.1164 33.5828C43.083 33.6636 43.034 33.7371 42.9722 33.7989C42.9104 33.8608 42.837 33.9098 42.7562 33.9433C42.6755 33.9768 42.5889 33.994 42.5014 33.994ZM8.16694 32.663H41.8359V9.3935H8.16694V32.663Z" fill="white" />
											<path d="M30.1937 44.4394C30.0515 44.4393 29.913 44.3937 29.7985 44.3092C29.6841 44.2247 29.5997 44.1058 29.5577 43.9699L27.1077 36.0259C27.0557 35.8572 27.0728 35.6748 27.1552 35.5187C27.2377 35.3626 27.3788 35.2457 27.5475 35.1937C27.7161 35.1416 27.8986 35.1587 28.0547 35.2412C28.2107 35.3236 28.3277 35.4647 28.3797 35.6334L30.8297 43.5774C30.8555 43.6609 30.8646 43.7486 30.8565 43.8357C30.8484 43.9227 30.8232 44.0072 30.7824 44.0845C30.7416 44.1618 30.6859 44.2302 30.6186 44.286C30.5514 44.3417 30.4737 44.3837 30.3902 44.4094C30.3266 44.4293 30.2604 44.4394 30.1937 44.4394Z" fill="white" />
											<path d="M19.8066 44.4394C19.74 44.4394 19.6737 44.4293 19.6101 44.4094C19.5266 44.3837 19.449 44.3417 19.3817 44.286C19.3144 44.2302 19.2587 44.1618 19.2178 44.0845C19.177 44.0073 19.1517 43.9227 19.1435 43.8357C19.1354 43.7487 19.1444 43.6609 19.1701 43.5774L21.6201 35.6334C21.6722 35.4647 21.7891 35.3236 21.9452 35.2412C22.1013 35.1587 22.2837 35.1416 22.4524 35.1937C22.6211 35.2457 22.7622 35.3626 22.8446 35.5187C22.9271 35.6748 22.9442 35.8572 22.8921 36.0259L20.4421 43.9699C20.4003 44.1058 20.316 44.2247 20.2016 44.3092C20.0872 44.3937 19.9488 44.4393 19.8066 44.4394Z" fill="white" />
											<path d="M33.2115 44.4365H16.7905C16.7031 44.4365 16.6166 44.4193 16.5358 44.3858C16.4551 44.3524 16.3817 44.3033 16.3199 44.2415C16.2581 44.1797 16.2091 44.1064 16.1757 44.0256C16.1422 43.9449 16.125 43.8584 16.125 43.771C16.125 43.6836 16.1422 43.597 16.1757 43.5163C16.2091 43.4356 16.2581 43.3622 16.3199 43.3004C16.3817 43.2386 16.4551 43.1896 16.5358 43.1561C16.6166 43.1227 16.7031 43.1055 16.7905 43.1055H33.2115C33.388 43.1055 33.5573 43.1756 33.6821 43.3004C33.8069 43.4252 33.877 43.5945 33.877 43.771C33.877 43.9475 33.8069 44.1167 33.6821 44.2415C33.5573 44.3664 33.388 44.4365 33.2115 44.4365Z" fill="white" />
											<path d="M42.1499 36.494H7.84994C6.91829 36.4929 6.02511 36.1224 5.36633 35.4636C4.70756 34.8048 4.337 33.9116 4.33594 32.98V9.077C4.33686 8.14527 4.70737 7.25195 5.36616 6.59307C6.02494 5.93419 6.91821 5.56356 7.84994 5.5625H42.1499C43.0817 5.56356 43.9749 5.93419 44.6337 6.59307C45.2925 7.25195 45.663 8.14527 45.6639 9.077V32.98C45.6629 33.9116 45.2923 34.8048 44.6335 35.4636C43.9748 36.1224 43.0816 36.4929 42.1499 36.494ZM7.84994 6.8935C7.27113 6.89429 6.71626 7.12461 6.30702 7.53394C5.89779 7.94327 5.6676 8.49819 5.66694 9.077V32.98C5.6676 33.5588 5.89781 34.1136 6.30705 34.5229C6.7163 34.9321 7.27117 35.1623 7.84994 35.163H42.1499C42.7287 35.1623 43.2836 34.9321 43.6928 34.5229C44.1021 34.1136 44.3323 33.5588 44.3329 32.98V9.077C44.3323 8.49819 44.1021 7.94327 43.6929 7.53394C43.2836 7.12461 42.7287 6.89429 42.1499 6.8935H7.84994Z" fill="white" />
											<path d="M42.5014 33.994H7.50144C7.32494 33.994 7.15566 33.9239 7.03086 33.7991C6.90605 33.6743 6.83594 33.505 6.83594 33.3285V8.7285C6.83587 8.64106 6.85304 8.55447 6.88645 8.47367C6.91987 8.39287 6.96888 8.31945 7.03068 8.2576C7.09248 8.19575 7.16587 8.14668 7.24665 8.11321C7.32742 8.07973 7.414 8.0625 7.50144 8.0625H42.5014C42.6779 8.0625 42.8472 8.13261 42.972 8.25742C43.0968 8.38223 43.1669 8.5515 43.1669 8.728V33.328C43.167 33.4154 43.1498 33.502 43.1164 33.5828C43.083 33.6636 43.034 33.7371 42.9722 33.7989C42.9104 33.8608 42.837 33.9098 42.7562 33.9433C42.6755 33.9768 42.5889 33.994 42.5014 33.994ZM8.16694 32.663H41.8359V9.3935H8.16694V32.663Z" fill="white" />
											<path d="M30.1937 44.4394C30.0515 44.4393 29.913 44.3937 29.7985 44.3092C29.6841 44.2247 29.5997 44.1058 29.5577 43.9699L27.1077 36.0259C27.0557 35.8572 27.0728 35.6748 27.1552 35.5187C27.2377 35.3626 27.3788 35.2457 27.5475 35.1937C27.7161 35.1416 27.8986 35.1587 28.0547 35.2412C28.2107 35.3236 28.3277 35.4647 28.3797 35.6334L30.8297 43.5774C30.8555 43.6609 30.8646 43.7486 30.8565 43.8357C30.8484 43.9227 30.8232 44.0072 30.7824 44.0845C30.7416 44.1618 30.6859 44.2302 30.6186 44.286C30.5514 44.3417 30.4737 44.3837 30.3902 44.4094C30.3266 44.4293 30.2604 44.4394 30.1937 44.4394Z" fill="white" />
											<path d="M19.8066 44.4394C19.74 44.4394 19.6737 44.4293 19.6101 44.4094C19.5266 44.3837 19.449 44.3417 19.3817 44.286C19.3144 44.2302 19.2587 44.1618 19.2178 44.0845C19.177 44.0073 19.1517 43.9227 19.1435 43.8357C19.1354 43.7487 19.1444 43.6609 19.1701 43.5774L21.6201 35.6334C21.6722 35.4647 21.7891 35.3236 21.9452 35.2412C22.1013 35.1587 22.2837 35.1416 22.4524 35.1937C22.6211 35.2457 22.7622 35.3626 22.8446 35.5187C22.9271 35.6748 22.9442 35.8572 22.8921 36.0259L20.4421 43.9699C20.4003 44.1058 20.316 44.2247 20.2016 44.3092C20.0872 44.3937 19.9488 44.4393 19.8066 44.4394Z" fill="white" />
											<path d="M31.6984 23.9435C31.4863 23.9435 31.2828 23.8592 31.1328 23.7092C30.9827 23.5591 30.8984 23.3556 30.8984 23.1435C30.8984 22.9313 30.9827 22.7278 31.1328 22.5778C31.2828 22.4278 31.4863 22.3435 31.6984 22.3435C32.9579 22.3435 33.9829 21.457 33.9829 20.3675C33.9829 19.278 32.9579 18.393 31.6984 18.393C31.4863 18.393 31.2828 18.3087 31.1328 18.1587C30.9827 18.0086 30.8984 17.8051 30.8984 17.593C30.8984 17.3808 30.9827 17.1773 31.1328 17.0273C31.2828 16.8773 31.4863 16.793 31.6984 16.793C33.8404 16.793 35.5829 18.3965 35.5829 20.3675C35.5829 22.3385 33.8404 23.9435 31.6984 23.9435Z" fill="white" />
											<path d="M29.9333 29.2572C29.2541 29.2564 28.6029 28.9862 28.1226 28.5059C27.6423 28.0256 27.3721 27.3744 27.3713 26.6952V14.0392C27.3666 13.6998 27.4294 13.3628 27.556 13.0478C27.6826 12.7329 27.8705 12.4462 28.1089 12.2045C28.3472 11.9628 28.6312 11.7709 28.9444 11.6399C29.2576 11.5089 29.5936 11.4414 29.9331 11.4414C30.2726 11.4414 30.6086 11.5089 30.9218 11.6399C31.235 11.7709 31.519 11.9628 31.7573 12.2045C31.9957 12.4462 32.1836 12.7329 32.3102 13.0478C32.4368 13.3628 32.4996 13.6998 32.4948 14.0392V26.6952C32.4942 27.3744 32.2241 28.0256 31.7439 28.5059C31.2637 28.9862 30.6125 29.2564 29.9333 29.2572ZM29.9333 13.0772C29.6783 13.0775 29.4338 13.1789 29.2534 13.3593C29.073 13.5396 28.9716 13.7841 28.9713 14.0392V26.6952C28.9684 26.8233 28.9911 26.9508 29.0382 27.07C29.0852 27.1893 29.1556 27.2979 29.2451 27.3896C29.3347 27.4812 29.4418 27.5541 29.5599 27.6038C29.678 27.6535 29.8049 27.6791 29.9331 27.6791C30.0613 27.6791 30.1882 27.6535 30.3063 27.6038C30.4244 27.5541 30.5314 27.4812 30.621 27.3896C30.7106 27.2979 30.781 27.1893 30.828 27.07C30.875 26.9508 30.8978 26.8233 30.8948 26.6952V14.0392C30.8946 13.7842 30.7932 13.5398 30.613 13.3594C30.4327 13.1791 30.1883 13.0776 29.9333 13.0772Z" fill="white" />
											<path d="M20.6867 17.0407C20.4745 17.0407 20.2711 16.9565 20.121 16.8064C19.971 16.6564 19.8867 16.4529 19.8867 16.2407C19.8867 16.0286 19.971 15.8251 20.121 15.6751C20.2711 15.525 20.4745 15.4407 20.6867 15.4407C25.4712 15.4407 27.6202 13.0302 27.6412 13.0057C27.7805 12.8456 27.9776 12.7472 28.1894 12.7324C28.4011 12.7176 28.61 12.7875 28.7702 12.9267C28.9304 13.066 29.0287 13.2632 29.0435 13.4749C29.0584 13.6866 28.9885 13.8956 28.8492 14.0557C28.7432 14.1767 26.1927 17.0407 20.6867 17.0407Z" fill="white" />
											<path d="M28.2476 28.0024C28.134 28.0022 28.0217 27.9778 27.9183 27.9308C27.8148 27.8838 27.7225 27.8153 27.6476 27.7299C27.6316 27.7119 27.0806 27.1059 25.9651 26.5094C24.9266 25.9539 23.1681 25.2914 20.6906 25.2914C20.4785 25.2914 20.275 25.2071 20.1249 25.0571C19.9749 24.9071 19.8906 24.7036 19.8906 24.4914C19.8906 24.2792 19.9749 24.0758 20.1249 23.9257C20.275 23.7757 20.4785 23.6914 20.6906 23.6914C26.1966 23.6914 28.7471 26.5559 28.8531 26.6774C28.9538 26.7932 29.0191 26.9355 29.0412 27.0874C29.0632 27.2393 29.0411 27.3943 28.9775 27.534C28.9139 27.6737 28.8115 27.7921 28.6824 27.8752C28.5533 27.9582 28.4031 28.0024 28.2496 28.0024H28.2476Z" fill="white" />
											<path d="M20.6884 25.2919H18.3004C17.2721 25.2908 16.2862 24.8819 15.559 24.1548C14.8319 23.4276 14.4229 22.4417 14.4219 21.4134V19.3204C14.4229 18.292 14.8319 17.3061 15.559 16.5789C16.2861 15.8517 17.272 15.4426 18.3004 15.4414H20.6909C20.903 15.4414 21.1065 15.5257 21.2566 15.6757C21.4066 15.8257 21.4909 16.0292 21.4909 16.2414V24.4914C21.4909 24.5967 21.4702 24.701 21.4299 24.7983C21.3896 24.8956 21.3304 24.9839 21.2559 25.0583C21.1813 25.1327 21.0928 25.1916 20.9954 25.2317C20.898 25.2718 20.7937 25.2922 20.6884 25.2919ZM18.3004 17.0414C17.6962 17.0422 17.1171 17.2826 16.6899 17.7098C16.2628 18.1371 16.0225 18.7163 16.0219 19.3204V21.4134C16.0225 22.0175 16.2628 22.5967 16.69 23.0238C17.1171 23.451 17.6963 23.6912 18.3004 23.6919H19.8909V17.0419L18.3004 17.0414Z" fill="white" />
											<path d="M23.4396 30.5798H20.0941C19.9118 30.5797 19.7351 30.5174 19.593 30.4032C19.451 30.289 19.3522 30.1298 19.3131 29.9518L18.1366 24.6668C18.0901 24.4596 18.1279 24.2426 18.2416 24.0633C18.3552 23.884 18.5354 23.7572 18.7426 23.7108C18.9497 23.6644 19.1668 23.7021 19.3461 23.8158C19.5253 23.9294 19.6521 24.1096 19.6986 24.3168L20.7356 28.9758H22.6396V24.7703C22.6396 24.5581 22.7238 24.3546 22.8739 24.2046C23.0239 24.0546 23.2274 23.9703 23.4396 23.9703C23.6517 23.9703 23.8552 24.0546 24.0052 24.2046C24.1553 24.3546 24.2396 24.5581 24.2396 24.7703V29.7798C24.2396 29.9919 24.1553 30.1954 24.0052 30.3455C23.8552 30.4955 23.6517 30.5798 23.4396 30.5798Z" fill="white" />
											<path d="M15.218 21.1664C15.0597 21.1664 14.9051 21.1195 14.7735 21.0316C14.642 20.9437 14.5394 20.8187 14.4789 20.6726C14.4183 20.5264 14.4025 20.3655 14.4333 20.2103C14.4642 20.0551 14.5404 19.9126 14.6523 19.8007C14.7642 19.6888 14.9067 19.6126 15.0619 19.5818C15.2171 19.5509 15.3779 19.5668 15.5241 19.6273C15.6703 19.6879 15.7952 19.7904 15.8831 19.922C15.971 20.0535 16.018 20.2082 16.018 20.3664C16.018 20.4715 15.9973 20.5756 15.957 20.6727C15.9168 20.7698 15.8578 20.858 15.7835 20.9323C15.7091 21.0066 15.6209 21.0655 15.5238 21.1057C15.4267 21.1458 15.3226 21.1665 15.2175 21.1664H15.218Z" fill="white" />
										</svg>
									</div>
									<div className="card-icon-right">
										<h6 className="sub-heading-ag-xl">Cyber Protection</h6>
									</div>
								</div>
								<div className="card-info">
									<p className="paragraph-rubik-r grey-800">Financial planners help people to gain us ism knowledge aboutw toio invest and save thed their money in the most</p>
									<Link href="#" className="link-primary-home">Learn More
										<svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="currentColor" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card-service-2">
								<div className="card-icon">
									<div className="card-icon-left">
										<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none">
											<path d="M34.0156 22.4657C33.8709 22.4658 33.729 22.4266 33.6048 22.3524C33.4807 22.2781 33.379 22.1716 33.3106 22.0442L31.2811 18.2602H27.7766C27.5644 18.2602 27.3609 18.1759 27.2109 18.0259C27.0608 17.8759 26.9766 17.6724 26.9766 17.4602V4.99922C26.9766 4.78705 27.0608 4.58356 27.2109 4.43353C27.3609 4.2835 27.5644 4.19922 27.7766 4.19922H44.9986C45.2107 4.19922 45.4142 4.2835 45.5642 4.43353C45.7143 4.58356 45.7986 4.78705 45.7986 4.99922V17.4602C45.7986 17.6724 45.7143 17.8759 45.5642 18.0259C45.4142 18.1759 45.2107 18.2602 44.9986 18.2602H36.7486L34.7186 22.0442C34.6503 22.1713 34.5489 22.2776 34.4251 22.3518C34.3014 22.426 34.1599 22.4654 34.0156 22.4657ZM28.5766 16.6602H31.7596C31.9043 16.6602 32.0462 16.6995 32.1704 16.7738C32.2945 16.8481 32.3962 16.9547 32.4646 17.0822L34.0146 19.9737L35.5646 17.0822C35.6329 16.9547 35.7346 16.8481 35.8587 16.7738C35.9829 16.6995 36.1249 16.6602 36.2696 16.6602H44.1986V5.79922H28.5766V16.6602Z" fill="white" />
											<path d="M41.0164 8.91641H31.7609C31.5488 8.91641 31.3453 8.83212 31.1953 8.68209C31.0452 8.53206 30.9609 8.32858 30.9609 8.11641C30.9609 7.90423 31.0452 7.70075 31.1953 7.55072C31.3453 7.40069 31.5488 7.31641 31.7609 7.31641H41.0164C41.2286 7.31641 41.4321 7.40069 41.5821 7.55072C41.7322 7.70075 41.8164 7.90423 41.8164 8.11641C41.8164 8.32858 41.7322 8.53206 41.5821 8.68209C41.4321 8.83212 41.2286 8.91641 41.0164 8.91641Z" fill="white" />
											<path d="M41.0164 12.0297H31.7609C31.5488 12.0297 31.3453 11.9454 31.1953 11.7954C31.0452 11.6453 30.9609 11.4419 30.9609 11.2297C30.9609 11.0175 31.0452 10.814 31.1953 10.664C31.3453 10.514 31.5488 10.4297 31.7609 10.4297H41.0164C41.2286 10.4297 41.4321 10.514 41.5821 10.664C41.7322 10.814 41.8164 11.0175 41.8164 11.2297C41.8164 11.4419 41.7322 11.6453 41.5821 11.7954C41.4321 11.9454 41.2286 12.0297 41.0164 12.0297Z" fill="white" />
											<path d="M41.0164 15.1469H31.7609C31.5488 15.1469 31.3453 15.0626 31.1953 14.9126C31.0452 14.7625 30.9609 14.559 30.9609 14.3469C30.9609 14.1347 31.0452 13.9312 31.1953 13.7812C31.3453 13.6312 31.5488 13.5469 31.7609 13.5469H41.0164C41.2286 13.5469 41.4321 13.6312 41.5821 13.7812C41.7322 13.9312 41.8164 14.1347 41.8164 14.3469C41.8164 14.559 41.7322 14.7625 41.5821 14.9126C41.4321 15.0626 41.2286 15.1469 41.0164 15.1469Z" fill="white" />
											<path d="M30.1923 45.8H6.23631C6.21631 45.8 6.19631 45.8 6.17631 45.8C5.38981 45.741 4.21481 45.15 4.19931 43.7745C4.19881 43.7428 4.20032 43.7111 4.20381 43.6795L5.20381 34.468C5.22081 34.052 5.48581 33.358 6.40631 33.0205L6.41631 33.017L12.6763 30.817L14.3198 29.8095C14.4798 29.7113 14.6693 29.6726 14.8551 29.7C15.0408 29.7274 15.211 29.8193 15.3358 29.9595L18.2158 33.199L21.0958 29.9595C21.2206 29.8193 21.3908 29.7274 21.5766 29.7C21.7623 29.6726 21.9518 29.7113 22.1118 29.8095L23.7553 30.817L30.0153 33.017L30.0253 33.0205C30.9458 33.358 31.2103 34.052 31.2253 34.468L32.2253 43.6795C32.2287 43.7111 32.2304 43.7428 32.2303 43.7745C32.2148 45.1525 31.0393 45.741 30.2533 45.8C30.2323 45.8 30.2123 45.8 30.1923 45.8ZM6.28381 44.2H30.1443C30.2518 44.1824 30.3553 44.1462 30.4503 44.093C30.5538 44.0305 30.6178 43.96 30.6278 43.793L29.6318 34.603C29.5851 34.5675 29.5329 34.5398 29.4773 34.521L23.9273 32.571L22.4133 37.4855C22.3745 37.6114 22.3053 37.7257 22.2118 37.8183C22.1183 37.911 22.0034 37.9791 21.8772 38.0167C21.751 38.0543 21.6175 38.0601 21.4886 38.0338C21.3596 38.0074 21.2391 37.9496 21.1378 37.8655L18.2143 35.4385L15.2903 37.8645C15.189 37.9486 15.0685 38.0064 14.9396 38.0328C14.8106 38.0591 14.6771 38.0533 14.5509 38.0157C14.4248 37.9781 14.3098 37.91 14.2163 37.8173C14.1228 37.7246 14.0536 37.6104 14.0148 37.4845L12.4993 32.57L6.94931 34.52C6.89369 34.5388 6.8415 34.5665 6.79481 34.602L5.79931 43.7935C5.80931 43.96 5.87281 44.0305 5.97681 44.0935C6.07215 44.1467 6.17605 44.1827 6.28381 44.2ZM19.3623 34.312L21.2373 35.868L22.4608 31.897L21.8453 31.519L19.3623 34.312ZM13.9678 31.8965L15.1908 35.868L17.0663 34.312L14.5833 31.519L13.9678 31.8965Z" fill="white" />
											<path d="M20.7598 45.8007C20.5816 45.8006 20.4085 45.741 20.268 45.6313C20.1275 45.5216 20.0277 45.3681 19.9843 45.1952L18.5388 39.4242H17.8888L16.4443 45.1952C16.3846 45.3917 16.2516 45.5577 16.0729 45.6589C15.8942 45.76 15.6834 45.7885 15.4842 45.7385C15.285 45.6885 15.1126 45.5639 15.0028 45.3903C14.893 45.2168 14.8542 45.0076 14.8943 44.8062L16.4893 38.4297C16.5327 38.2567 16.6326 38.1032 16.7732 37.9935C16.9138 37.8838 17.087 37.8242 17.2653 37.8242H19.1653C19.3437 37.8242 19.5169 37.8838 19.6575 37.9935C19.7981 38.1032 19.898 38.2567 19.9413 38.4297L21.5383 44.8062C21.568 44.9244 21.5702 45.0478 21.5449 45.1669C21.5196 45.2861 21.4674 45.3979 21.3923 45.4938C21.3172 45.5898 21.2212 45.6673 21.1116 45.7205C21.002 45.7737 20.8817 45.8011 20.7598 45.8007Z" fill="white" />
											<path d="M13.6828 25.0512C13.4707 25.0512 13.2672 24.967 13.1172 24.8169C12.9671 24.6669 12.8828 24.4634 12.8828 24.2512V21.0387C12.8793 20.268 13.1493 19.521 13.6448 18.9307C13.7063 18.8577 13.7723 18.7867 13.8403 18.7197C14.1793 18.3855 14.6118 18.162 15.0805 18.079C15.5493 17.996 16.0322 18.0572 16.4653 18.2547C17.0758 18.5277 17.6773 18.6802 18.2528 18.7077C18.465 18.718 18.6644 18.8122 18.8072 18.9695C18.9499 19.1267 19.0244 19.3343 19.0141 19.5465C19.0038 19.7587 18.9097 19.9581 18.7524 20.1008C18.5951 20.2436 18.3875 20.318 18.1753 20.3077C17.4008 20.2702 16.6058 20.0712 15.8128 19.7172C15.6733 19.6522 15.5172 19.6311 15.3654 19.6568C15.2136 19.6826 15.0732 19.7538 14.9628 19.8612C14.9283 19.8947 14.8953 19.9302 14.8628 19.9667C14.6127 20.2682 14.4774 20.6485 14.4808 21.0402V24.2512C14.4808 24.4631 14.3968 24.6662 14.2472 24.8162C14.0976 24.9662 13.8947 25.0507 13.6828 25.0512Z" fill="white" />
											<path d="M18.2128 30.6207C16.7578 30.6207 15.3998 29.9362 14.3893 28.6937C13.4178 27.4992 12.8828 25.9217 12.8828 24.2492C12.8828 24.037 12.9671 23.8336 13.1171 23.6835C13.2672 23.5335 13.4706 23.4492 13.6828 23.4492C13.895 23.4492 14.0985 23.5335 14.2485 23.6835C14.3985 23.8336 14.4828 24.037 14.4828 24.2492C14.4828 26.8792 16.1563 29.0187 18.2128 29.0187C20.2693 29.0187 21.9448 26.8792 21.9448 24.2492C21.9448 24.037 22.0291 23.8336 22.1791 23.6835C22.3292 23.5335 22.5326 23.4492 22.7448 23.4492C22.957 23.4492 23.1605 23.5335 23.3105 23.6835C23.4605 23.8336 23.5448 24.037 23.5448 24.2492C23.5448 25.9197 23.0098 27.4992 22.0378 28.6922C21.0268 29.9362 19.6683 30.6207 18.2128 30.6207Z" fill="white" />
											<path d="M22.745 25.0512C22.5329 25.0512 22.3294 24.967 22.1793 24.8169C22.0293 24.6669 21.945 24.4634 21.945 24.2512V21.0387C21.9488 20.6471 21.8135 20.2669 21.563 19.9657C21.532 19.9287 21.499 19.8932 21.463 19.8597C21.3527 19.7523 21.2123 19.6811 21.0605 19.6553C20.9086 19.6296 20.7526 19.6507 20.613 19.7157C19.82 20.0697 19.0245 20.2687 18.25 20.3062C18.224 20.3062 18.196 20.3062 18.17 20.3062C17.3955 20.2687 16.6005 20.0697 15.807 19.7157C15.6675 19.6507 15.5114 19.6296 15.3596 19.6553C15.2078 19.6811 15.0674 19.7523 14.957 19.8597C14.923 19.8932 14.89 19.9287 14.857 19.9652C14.6067 20.2666 14.4713 20.647 14.475 21.0387V24.2512C14.475 24.4634 14.3907 24.6669 14.2407 24.8169C14.0907 24.967 13.8872 25.0512 13.675 25.0512C13.4629 25.0512 13.2594 24.967 13.1093 24.8169C12.9593 24.6669 12.875 24.4634 12.875 24.2512V21.0387C12.8715 20.2681 13.1413 19.5212 13.6365 18.9307C13.6985 18.8577 13.7645 18.7867 13.8325 18.7197C14.1714 18.3856 14.6038 18.1622 15.0725 18.0792C15.5411 17.9961 16.0239 18.0574 16.457 18.2547C17.0083 18.5094 17.6013 18.6619 18.207 18.7047C18.8128 18.662 19.4058 18.5095 19.957 18.2547C20.3902 18.0572 20.8731 17.996 21.3419 18.079C21.8106 18.162 22.2431 18.3855 22.582 18.7197C22.65 18.7867 22.716 18.8582 22.778 18.9312C23.273 19.5216 23.5426 20.2683 23.539 21.0387V24.2512C23.539 24.4624 23.4556 24.665 23.3068 24.8148C23.1581 24.9647 22.9562 25.0497 22.745 25.0512Z" fill="white" />
											<path d="M13.6776 22.6088C13.4934 22.6085 13.315 22.5447 13.1725 22.4281C13.0299 22.3115 12.9319 22.1493 12.8951 21.9688C12.2951 19.0403 12.5806 16.7188 13.7426 15.0618C14.9376 13.3618 16.6506 13.0008 16.9211 12.9538C19.4071 12.4308 20.6401 13.0963 21.2366 13.7478C21.4698 14.0102 21.7577 14.2183 22.0801 14.3573C23.3166 14.8738 24.1251 15.7023 24.4826 16.8203C25.2576 19.2448 23.5021 22.1103 23.4266 22.2308C23.3128 22.4071 23.1344 22.5315 22.9298 22.5775C22.7251 22.6235 22.5106 22.5872 22.3324 22.4766C22.1542 22.3659 22.0266 22.1897 21.9771 21.9859C21.9276 21.782 21.9601 21.5669 22.0676 21.3868C22.4701 20.7343 23.4176 18.7288 22.9571 17.3038C22.7456 16.6458 22.2571 16.1653 21.4636 15.8338C20.9268 15.6055 20.4465 15.2623 20.0566 14.8283C19.8481 14.6008 19.1566 14.1153 17.2366 14.5223C17.2201 14.5263 17.2034 14.5293 17.1866 14.5313C17.0961 14.5468 15.8821 14.7753 15.0316 16.0083C14.1486 17.2883 13.9566 19.1858 14.4606 21.6478C14.4817 21.7508 14.4823 21.8569 14.4624 21.9601C14.4425 22.0633 14.4025 22.1616 14.3446 22.2493C14.2867 22.337 14.212 22.4124 14.125 22.4713C14.0379 22.5302 13.9401 22.5713 13.8371 22.5923C13.7846 22.6031 13.7312 22.6086 13.6776 22.6088Z" fill="white" />
											<path d="M14.7336 31.2904C14.5214 31.2904 14.3179 31.2062 14.1679 31.0561C14.0179 30.9061 13.9336 30.7026 13.9336 30.4904V27.8234C13.9336 27.6113 14.0179 27.4078 14.1679 27.2578C14.3179 27.1077 14.5214 27.0234 14.7336 27.0234C14.9458 27.0234 15.1493 27.1077 15.2993 27.2578C15.4493 27.4078 15.5336 27.6113 15.5336 27.8234V30.4904C15.5336 30.7026 15.4493 30.9061 15.2993 31.0561C15.1493 31.2062 14.9458 31.2904 14.7336 31.2904Z" fill="white" />
											<path d="M21.6945 31.2877C21.4824 31.2877 21.2789 31.2034 21.1288 31.0534C20.9788 30.9034 20.8945 30.6999 20.8945 30.4877V27.8117C20.8945 27.5995 20.9788 27.3961 21.1288 27.246C21.2789 27.096 21.4824 27.0117 21.6945 27.0117C21.9067 27.0117 22.1102 27.096 22.2602 27.246C22.4102 27.3961 22.4945 27.5995 22.4945 27.8117V30.4877C22.4945 30.6999 22.4102 30.9034 22.2602 31.0534C22.1102 31.2034 21.9067 31.2877 21.6945 31.2877Z" fill="white" />
											<path d="M19.1651 39.4232H17.2651C17.0938 39.4229 16.9272 39.3677 16.7897 39.2656C16.6521 39.1635 16.551 39.02 16.5011 38.8562L15.6646 36.1127C15.6059 35.9106 15.6291 35.6936 15.7293 35.5085C15.8295 35.3235 15.9985 35.1854 16.1998 35.1241C16.4011 35.0628 16.6184 35.0833 16.8047 35.1811C16.991 35.2789 17.1313 35.4462 17.1951 35.6467L17.8586 37.8232H18.5716L19.2351 35.6467C19.2634 35.5436 19.3121 35.4472 19.3783 35.3633C19.4445 35.2793 19.5269 35.2095 19.6205 35.1579C19.7142 35.1063 19.8172 35.074 19.9235 35.0629C20.0299 35.0518 20.1373 35.0622 20.2396 35.0933C20.3419 35.1245 20.4369 35.1758 20.519 35.2443C20.6011 35.3128 20.6686 35.397 20.7176 35.492C20.7666 35.5871 20.796 35.6909 20.8042 35.7975C20.8124 35.9041 20.7991 36.0113 20.7651 36.1127L19.9291 38.8562C19.8792 39.02 19.7781 39.1635 19.6405 39.2656C19.503 39.3677 19.3364 39.4229 19.1651 39.4232Z" fill="white" />
											<path d="M26.8 45.7981C26.5878 45.7981 26.3843 45.7138 26.2343 45.5638C26.0843 45.4138 26 45.2103 26 44.9981V39.1281C26 38.916 26.0843 38.7125 26.2343 38.5624C26.3843 38.4124 26.5878 38.3281 26.8 38.3281C27.0122 38.3281 27.2157 38.4124 27.3657 38.5624C27.5157 38.7125 27.6 38.916 27.6 39.1281V44.9981C27.6 45.2103 27.5157 45.4138 27.3657 45.5638C27.2157 45.7138 27.0122 45.7981 26.8 45.7981Z" fill="white" />
											<path d="M9.63203 45.7981C9.41986 45.7981 9.21638 45.7138 9.06635 45.5638C8.91632 45.4138 8.83203 45.2103 8.83203 44.9981V39.1281C8.83203 38.916 8.91632 38.7125 9.06635 38.5624C9.21638 38.4124 9.41986 38.3281 9.63203 38.3281C9.8442 38.3281 10.0477 38.4124 10.1977 38.5624C10.3477 38.7125 10.432 38.916 10.432 39.1281V44.9981C10.432 45.2103 10.3477 45.4138 10.1977 45.5638C10.0477 45.7138 9.8442 45.7981 9.63203 45.7981Z" fill="white" />
										</svg>
									</div>
									<div className="card-icon-right">
										<h6 className="sub-heading-ag-xl">Database Management</h6>
									</div>
								</div>
								<div className="card-info">
									<p className="paragraph-rubik-r grey-800">Financial planners help people to gain us ism knowledge aboutw toio invest and save thed their money in the most</p>
									<Link href="#" className="link-primary-home">Learn More
										<svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="currentColor" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
