import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Home } from './../../components/Home';
// import Login from './../modal/Login';

import s_medium_white from './../../assets/s_medium_white.svg';
import s_facebook from './../../assets/s_facebook.svg';
import s_twitter_white from './../../assets/s_twitter_white.svg';

import Logo from './../../assets/logo.svg';
import Graph from './../../assets/graph.svg';

import playstore from './../../assets/landing/playstore.svg';
import appstore from './../../assets/landing/appstore.svg';
// import Adax360 from './../../assets/landing/adax360.svg';
// import Adaxexchange from './../../assets/landing/adaxexchange.svg';
// import Basetrade from './../../assets/landing/basetrade.svg';
import Banner from './../../assets/landing/banner.jpg';
import VideoHeroImage from './../../assets/landing/video-heroimage.jpg';
import VideoPlay from './../../assets/landing/play.svg';

import LOGO_adax from './../../assets/logo-adax-dark.svg';
import LOGO_adax360 from './../../assets/adax360-logo.svg';
import LOGO_basetrade from './../../assets/bt-white.svg';

import chat from './../../assets/chat.svg';
import telegram from './../../assets/telegram.svg';
import nomadlogo from './../../assets/nomad/nomadlogo.svg';

// import { Parallax } from 'react-scroll-parallax';

// const ParallaxImage = () => (
// 	<Parallax className="custom-class" y={[ -100, 0 ]} tagOuter="figure">
// 		<img src={Banner} className={`w-100`} />
// 	</Parallax>
// );

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			VideoHero: true
		};
	}

	playVideo() {
		this.refs.vidRef.play();
		this.setState({ VideoHero: false });
	}
	render() {
		const { VideoHero } = this.state;
		// const { authenticateUser } = this.props;
		// const authData = {};
		// authData.Authenticate = this.props.UserData.Authenticate;
		// authData.Authenticate2FA = this.props.UserData.Authenticate2FA;
		
		
		console.log('authData');
		return (
			<Home>
				<div
					className={`the-banner`}
					style={{
						backgroundImage: `url('${Banner}')`,
						backgroundPosition: `center center`,
						height: `100%`,
						backgroundRepeat: `no-repeat`
					}}
				>
					{/* <div className={`the-banner__image`}>
						<ParallaxImage/>
					</div> */}
					<div className={`the-banner__content`}>
						<div className={`the-banner__btn`}>
							{/* <Login buttonLabel={`log in`} className={`modal-login`} /> */}
							<span style={{ marginRight: '10px' }}>
							<Button outline color="warning" onClick={() => (window.location = '/signin')}>
									Sign in
							</Button>
							</span>
							<Button outline color="warning" onClick={() => (window.location = '/signup')}>
								Sign Up
							</Button>
							{/* <Login buttonLabel={`Sign up`} className={`modal-login`} /> */}
						</div>
						<div className={`the-banner__content__info`}>
							<div className={`container`}>
								<div className={`row mb-5`}>
									<div className={`col-md-4`}>
										<img className={`img-fluid mb-3`} src={Logo} alt="" />
									</div>
									<div className={`col-md-8`}>
										<p className={`lead`}>
											Welcome to ADAX, a fully regulated asset backed token issuance and exchange
											platform.
										</p>
										<p className={`lead`}>
											Through this emerging class of asset backed tokens, investors and
											corporations will see more liquidity, fair pricing and greater transparency
											through blockchain technology!
										</p>
										<Button
											color={`warning px-5`}
											onClick={() => (window.location = '/signup')}
										>
											Get Started
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`demo-video`}>
					<div className={`container`}>
						{VideoHero ? (
							<div className={`demo-video-wrap c-pointer`} onClick={this.playVideo.bind(this)}>
								<img src={VideoHeroImage} className={`w-100`} alt="video" />
								<div className={`demo-video-play`}>
									<div className={`va-block`}>
										<div className="va-middle">
											<img src={VideoPlay} alt="icon" className="align-middle" />
										</div>
									</div>
								</div>
							</div>
						) : (
							''
						)}

						<video
							ref="vidRef"
							controls={true}
							name="media"
							style={{ width: `100%`, display: VideoHero ? 'none' : 'block' }}
						>
							<source
								src="https://s3-ap-southeast-1.amazonaws.com/adaxtech-assets/ADAXTECH.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>

				<div className="container">
					<div className={`row justify-content-md-center`}>
						<div className={`col-md-9`}>
							<div className={`adax-box`}>
								<div className={`line-hr`} />
								<p className={`text-center`}>
									ADAX Provides an asset backed token issuance and investment platform, a regulated
									exchange for secondary trading of all digital assets as well as a fiat-digital
									assets gateway.
								</p>
							</div>
						</div>
					</div>
					<div className={`row justify-content-md-center`}>
						<div className={`col-md-8`}>
							<div className={`row mb-5`}>
								<div className={`col-md-4 text-center`}>
									<img className={`img-fluid mb-3`} src={LOGO_adax360} alt="" />
								</div>
								<div className={`col-md-8`}>
									<h3>
										ADAX 360 <br />(Asset backed token Issuance Platform and advisory)
									</h3>
									<p>
										The ADAX 360 Issuance platform and Advisory generates a unique listing pipeline
										in Asia for ADAX by connecting issuers, investors and advisors. It provides
										issuers with access to a full suite of solutions throughout the Digital Asset
										Transaction.
									</p>
								</div>
							</div>

							<div className={`row mb-5`}>
								<div className={`col-md-4 text-center`}>
									<img className={`img-fluid mb-3`} src={Logo} alt="" />
								</div>
								<div className={`col-md-8`}>
									<h3>
										ADAX Exchange <br />(Secondary trading of Asset backed tokens and Utility
										tokens)
									</h3>
									<p>
										A regulated end-end digital asset secondary trading platform for asset backed as
										well as utility tokens providing best in class technology, compliance and
										custody.
									</p>
								</div>
							</div>

							<div className={`row mb-5`}>
								<div className={`col-md-4 text-center`}>
									<img className={`img-fluid mb-3`} src={LOGO_basetrade} alt="" />
								</div>
								<div className={`col-md-8`}>
									<h3>
										BASETRADE <br />Fiat to Digital asset gateway (desktop and mobile apps)
									</h3>
									<p>
										Integrated Fiat to Digital Asset Gateway to enable easy investment and
										liquidation of digital assets to/from Fiat currency and liquidity provision
										through integration with ADAX Exchange.
									</p>
								</div>
							</div>
							<div className={`row mb-3`}>
								<div className={`col-md-4`} />
								<div className={`col-md-8`}>
									<p>Download the app on:</p>
									<Link to="#">
										<img className={`img-fluid mb-3 mr-3`} src={playstore} alt="" />
									</Link>
									<Link to="#">
										<img className={`img-fluid mb-3`} src={appstore} alt="" />
									</Link>
								</div>
							<div
							className={`row mb-5`}>
								<div className={`col-md-4 text-center`}>
								<a href={"https://nomad.adaxtech.com/index.html"}> <img src={nomadlogo}/> </a>
								</div>
								<div className={`col-md-8`}>
									<h3>
									NOMAD <br />Nominated Advisors Program
									</h3>
									<p>
									This program is designed for partners and consultants with a 
									focus on ensuring the safety of trading through performance guidance, advisory 
									and training for asset-backed token issuers.
									</p>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url('${Graph}')`,
						backgroundPosition: `center bottom`,
						height: `100%`,
						backgroundRepeat: `no-repeat`
					}}
				>
					<div className="container">
						{/* <h2 className={`text-center mb-5`}>Telegram Channels</h2> */}
						<div className={`row justify-content-md-center text-center tg-channel`}>
							<div className={`col-md-4 mb-5`}>
								{/* <img className={`img-fluid mb-3`} src={chat} alt="" />
								<h3 className={`mb-3`}>ADAXTech, Open Chat Forum</h3>
								<a
									href={`https://t.me/adaxofficial`}
									target={`_blank`}
									className={`btn btn-outline-warning`}
								>
									Join Channel
								</a> */}
							</div>
							<div className={`col-md-4 mb-5`}>
								{/* <img className={`img-fluid mb-3`} src={announcement} alt="" /> */}
								{/* <h3 className={`mb-3`}>ADAX Official Announcements</h3>
								<a
									href={`https://t.me/adaxtechannouncements`}
									target={`_blank`}
									className={`btn btn-outline-warning`}
								>
									Join Channel
								</a> */}
							</div>
						</div>

						<footer>
							<div className={`logo-terms`}>
								<img src={Logo} alt={`logo`} className={`mb-3`} />
								<p className={`mb-3`}>
									ADAX is licensed and regulated by Cagayan <br />
									Economic Zone Authority (CEZA) in the Philippines.
								</p>
								<p className={`mb-3`}>Copyright 2019 All Rights Reserved</p>
							</div>

							<div className="clearfix">
								<div className="terms float-md-left">
								    <Link target="_blank" to="/terms-and-conditions">
					         	    {'Terms & Conditions'}
					                </Link>
					                <Link target="_blank" to="/privacy-policy">
						            {'Privacy'}
					                </Link>
									<Link target="_blank" to="/cookie-policy"> 
									{'Cookie Policy'} 
									</Link>
									<Link target="_blank" to="/Fees"> 
									{'Fees'}
									</Link>
									<Link target="_blank" to="/Faqs"> 
									{'Faq'}
									</Link>
									<a href="https://adaxtech.freshdesk.com/support/home" target="_blank">
									{'Customer Support'}</a>
									{/* <Link target="_blank" to="/api">  */}
									{/* {'API Portal'} */}
									{/* </Link> */}
									{/* <script data-cc-embedded data-key="e6fab5bf-a603-4220-95c0-f8a5b83cc4be" data-base-url="https://ac.customercase.com" src="https://ac.customercase.com/assets/embed.js">ADAX Feedback</script> */}
									{/* <a href="https://feedback.adaxtech.com/forums/adax-customer-feedback" target="_blank">Submit Feedback</a> */}
								</div>
								
								<div className="social float-md-right">
								<a href="https://medium.com/@adaxblockchain" target="_blank">
									<img src={s_medium_white} /></a>
								<a href="https://twitter.com/ADAXblockchain" target="_blank">
								    <img src={s_twitter_white} /></a>
								<a href="https://t.me/adaxtechannouncements" target="_blank">
									<img src={telegram} /></a>
									{/* <Link to="#"> */}
										{/* <img src={s_facebook} alt="" /> */}
									{/* </Link> */}
									{/* <Link to="https://twitter.com/ADAXblockchain"> */}
										{/* <img src={s_twitter} alt="" /> */}
									{/* </Link> */}
								</div>
							</div>
						</footer>
					</div>
				</div>
			</Home>
		);
	}
}

export default HomePage;