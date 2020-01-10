import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Input, Grid, Container, Label, Button, Dimmer, Loader, Modal } from 'semantic-ui-react';

import { HBLink } from './../../components/HBButton';
import { HBContainer } from './../../components/Base';
import { HBAccountVerification, Note } from './../../components/HBAccountVerification';
import { HBForm, HBFormGroup } from './../../components/HBForm';
import { HBButton } from './../../components/HBButton';
import { HBModal } from './../../components/HBModal';

import * as yup from 'yup';
import { Formik } from 'formik';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import iconSecure from './../../assets/settings/secure.png';

var userEmail = '';

class AccountVerification extends Component {
	constructor(props) {
		super(props);
		this.state = {
			processingApplication: false,
			showModalSuccess: false,
			pleaseWait: false
		};
		this.first_nameRef = React.createRef();
		this.last_nameRef = React.createRef();
		this.date_of_birthHandleRef = React.createRef();
		this.cityRef = React.createRef();
		this.province_addressRef = React.createRef();
		this.street_addressRef = React.createRef();
		this.postal_codeRef = React.createRef();
		this.country_addressRef = React.createRef();
		this.telephone_numberRef = React.createRef();
		this.id_documentRef = React.createRef();
		//this.fileRef = React.createRef();
		this.focusTextInput = this.focusTextInput.bind(this);
	}

	componentDidMount() {
		this.props.closeSideBar({ Open: false });
	}

	handleClickSuccess = () => {
		this.setState({ pleaseWait: true });
		setTimeout(function() {
			window.location = '/account/settings';
		}, 4000);
	};
	focusTextInput = () => {
		let node = ReactDOM.findDOMNode(this);
		if (node instanceof HTMLElement) {
			const child = node.getElementsByClassName('error');
			console.log(child, child.length);
		}
		this.textInputFirstName.current.focus();
	};
	render() {
		const { processingApplication, showModalSuccess, pleaseWait } = this.state;
		const { match } = this.props;
		const activeRoute = window.location.pathname.split('/')[3];
		// const FILE_SIZE = 160 * 1024;
		const FILE_SIZE = 4000001;
		const SUPPORTED_FORMATS = [ 'image/jpg', 'image/jpeg', 'image/png' ];

		// var userEmail = this.props.UserConfigData.Data.Email;
		// console.log(this.props.UserConfigData.Data);

		return (
			<HBAccountVerification>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				/>

				{processingApplication ? (
					<Modal
						closeOnEscape={false}
						closeOnDimmerClick={false}
						open={processingApplication}
						size="small"
						basic
					>
						<Modal.Content>
							<Loader />
							<div
								style={{
									maxWidth: '400px',
									margin: '0 auto',
									marginTop: '120px',
									fontSize: '18px',
									lineHeight: '1.6',
									fontFamily: 'Basis Grotesque Light Pro',
									textAlign: 'center'
								}}
							>
								We are processing your application, please wait and do not close this window.
							</div>
						</Modal.Content>
					</Modal>
				) : (
					''
				)}

				<HBContainer wide={`md`}>
					<h2>Account Verification</h2>

					<Formik
						initialValues={{
							first_name: ``,
							last_name: ``,
							date_of_birth: ``,
							date_of_birthHandle: ``,
							date_of_birthIsValid: false,
							telephone_number: ``,
							street_address: ``,
							city: ``,
							province_address: ``,
							postal_code: ``,
							country_address: ``,
							file: ``,
							doc_base64: ``,
							id_document: 'PP',
							docCountry: ``,
							email: ``
						}}
						onSubmit={(values, actions) => {
							this.setState({ processingApplication: !this.state.processingApplication });
							setTimeout(() => {
								let kycApiUrl = 'https://stagingapi.adaxtech.com';
								// let kycApiUrl = 'http://localhost:8082';

								values['user_id'] = localStorage.getItem('user_id');
								values['account_id'] = this.props.UserConfigData.Data.AccountID;
								values['email'] = this.props.UserConfigData.Data.Email;

								axios({
									method: 'POST',
									url: `${kycApiUrl}/api/kyc/account-verification`,
									contentType: 'application/json',
									data: { avr: values }
								})
									.then((res) => {
										let obj = res.data;

										if (obj.data.error) {
											toast.error(obj.data.error, {
												position: 'top-right',
												autoClose: 5000,
												hideProgressBar: true,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true
											});
											return;
										}

										// Follow this link to see available states -> https://github.com/hybridblockPH/Hybex/blob/development/core/kyc_api/pkg/kyc/kyc.go#L13
										if (obj.data.state === 'R') {
											// toast.info("Verification is under review", {
											//     position: "top-right",
											//     autoClose: 5000,
											//     hideProgressBar: true,
											//     closeOnClick: true,
											//     pauseOnHover: true,
											//     draggable: true
											// });
											this.setState({ showModalSuccess: true });
											this.setState({ processingApplication: !this.state.processingApplication });
										} else if (obj.data.state == 'A') {
											toast.success('Verification has been accepted', {
												position: 'top-right',
												autoClose: 5000,
												hideProgressBar: true,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true
											});
											this.setState({ processingApplication: !this.state.processingApplication });
										} else {
											toast.warning(obj.data.state, {
												position: 'top-right',
												autoClose: 5000,
												hideProgressBar: true,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true
											});
											this.setState({ processingApplication: !this.state.processingApplication });
										}
									})
									.catch((err) => {
										console.log(err);
										this.setState({ processingApplication: !this.state.processingApplication });
									});
							}, 500);
						}}
						validationSchema={() => {
							return yup.object().shape({
								first_name: yup
									.string()
									.min(1)
									.max(50)
									.matches(/^([A-Za-z-. ]*)$/, 'Invalid First Name')
									.required('First Name is required.'),
								last_name: yup
									.string()
									.min(1)
									.max(50)
									.matches(/^([A-Za-z-. ]*)$/, 'Invalid Last Name')
									.required('Last Name is required.'),
								date_of_birthHandle: yup
									.date()
									.required('Date of Birth is required')
									.max(new Date(), 'Date of Birth is required')
									.typeError('Date of Birth is required'),
								date_of_birthIsValid: yup.boolean().oneOf([ true ], 'Must 18 years old'),
								telephone_number: yup
									.string()
									.min(3)
									.max(20)
									.matches(/^[0-9\+\#\-\s]+$/, 'Invalid telephone number')
									.required('Telephone number is required.'),
								street_address: yup
									.string()
									.min(2)
									.matches(/^([A-Za-z0-9-.#,' ]*)$/, 'Invalid Street Address')
									.required('Street Address is required.'),
								city: yup
									.string()
									.min(2)
									.matches(/^([A-Za-z0-9-.#' ]*)$/, 'Invalid Billing City Address')
									.required('Billing City Address is required.'),
								province_address: yup
									.string()
									.min(2)
									.matches(/^([A-Za-z0-9-.#' ]*)$/, 'Invalid Billing State Address')
									.required('Billing State Address is required.'),
								postal_code: yup
									.string()
									.min(4)
									.max(50)
									.matches(/^([a-zA-Z0-9- ]*)$/, 'Invalid Postal Code')
									.required('Postal Code is required.'),
								country_address: yup.string().required('Billing Zip Address is required.'),
								file: yup
									.mixed()
									.required('A file is required')
									.test(
										'fileFormat',
										'File type should be gif, jpeg, png or pdf.',
										(value) => value && SUPPORTED_FORMATS.includes(value.type)
									)
									.test(
										'fileSize',
										'File must not exceed 4MB and must be in jpg, png or pdf.',
										(value) => value && value.size <= FILE_SIZE
									)
							});
						}}
					>
						{(props) => {
							const {
								values,
								touched,
								errors,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
								setFieldValue
							} = props;
							//console.log(errors,`aaaaaaaaaaaaaaaaaaa`)
							return (
								<form
									onSubmit={(e) => {
										e.preventDefault();

										handleSubmit();
										if (errors) {
											Object.keys(errors).forEach((err) => {
												if (err !== undefined) {
													if (
														err !== `date_of_birthHandle` &&
														err !== `date_of_birthIsValid`
													) {
														if (this[`${err}Ref`]) {
															this[`${err}Ref`].current.focus();
														}
													} else {
														this[`date_of_birthHandleRef`].current.setFocus();
													}
												}
											});
										}
										// search muna ako
									}}
								>
									<HBForm>
										<Grid columns={2}>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>First Name</label>
														<Input
															id="first_name"
															placeholder="Enter"
															value={values.first_name}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.first_nameRef}
															className={
																errors.first_name && touched.first_name ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.first_name &&
														touched.first_name && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.first_name}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
												<Grid.Column>
													<HBFormGroup>
														<label>Last Name</label>
														<Input
															id="last_name"
															placeholder="Enter"
															value={values.last_name}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.last_nameRef}
															className={
																errors.last_name && touched.last_name ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.last_name &&
														touched.last_name && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.last_name}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
										</Grid>
										<Grid columns={1}>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Date of Birth</label>
														<DatePicker
															id="date_of_birthHandle"
															className="date-picker-input"
															placeholderText="Enter your birthday in the form yyyy/mm/dd"
															selected={
																values.date_of_birthHandle === `` ? null : (
																	values.date_of_birthHandle
																)
															}
															dateFormat="yyyy/MM/dd"
															showYearDropdown
															maxDate={new Date()}
															dateFormatCalendar="MMMM"
															scrollableYearDropdown
															yearDropdownItemNumber={40}
															ref={this.date_of_birthHandleRef}
															onChange={(d) => {
																setFieldValue(`date_of_birthHandle`, d);

																const formattedValue = d
																	? moment(d).format('YYYY/MM/DD')
																	: null;
																setFieldValue(`date_of_birth`, formattedValue);
																console.log(
																	formattedValue,
																	'formattedValueformattedValueformattedValue'
																);

																if (
																	(formattedValue,
																	moment().diff(formattedValue, 'years') > 17)
																) {
																	setFieldValue(`date_of_birthIsValid`, true);
																} else {
																	setFieldValue(`date_of_birthIsValid`, false);
																}
															}}
														/>
														{errors.date_of_birthHandle &&
														touched.date_of_birthHandle && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.date_of_birthHandle}
															</p>
														)}
														{errors.date_of_birthIsValid &&
														touched.date_of_birthIsValid && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.date_of_birthIsValid}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
										</Grid>
										<h2>Address Information</h2>
										<Grid columns={1}>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Telephone Number</label>
														<Input
															id="telephone_number"
															placeholder="Enter"
															value={values.telephone_number}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.telephone_numberRef}
															className={
																errors.telephone_number && touched.telephone_number ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.telephone_number &&
														touched.telephone_number && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.telephone_number}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
										</Grid>
										<Grid columns={1}>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Street Address</label>
														<Input
															id="street_address"
															placeholder="Enter"
															value={values.street_address}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.street_addressRef}
															className={
																errors.street_address && touched.street_address ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.street_address &&
														touched.street_address && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.street_address}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>City</label>
														<Input
															id="city"
															placeholder="Enter"
															value={values.city}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.cityRef}
															className={
																errors.city && touched.city ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.city &&
														touched.city && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.city}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Province / Address</label>
														<Input
															id="province_address"
															placeholder="Enter"
															value={values.province_address}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.province_addressRef}
															className={
																errors.province_address && touched.province_address ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.province_address &&
														touched.province_address && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.province_address}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Postal Code</label>
														<Input
															id="postal_code"
															placeholder="Enter"
															value={values.postal_code}
															onChange={handleChange}
															onBlur={handleBlur}
															ref={this.postal_codeRef}
															className={
																errors.postal_code && touched.postal_code ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.postal_code &&
														touched.postal_code && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.postal_code}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Country Address</label>
														<select
															id="country_address"
															ref={this.country_addressRef}
															onChange={(e) => {
																setFieldValue('country_address', e.currentTarget.value);
																setFieldValue('docCountry', e.currentTarget.value);
																setFieldValue('email', userEmail);
															}}
															onBlur={handleBlur}
														>
															<option value="">Select from the dropdown</option>
															<option value="AF">Afghanistan</option>
															<option value="AX">Åland Islands</option>
															<option value="AL">Albania</option>
															<option value="DZ">Algeria</option>
															<option value="AS">American Samoa</option>
															<option value="AD">Andorra</option>
															<option value="AO">Angola</option>
															<option value="AI">Anguilla</option>
															<option value="AQ">Antarctica</option>
															<option value="AG">Antigua and Barbuda</option>
															<option value="AR">Argentina</option>
															<option value="AM">Armenia</option>
															<option value="AW">Aruba</option>
															<option value="AU">Australia</option>
															<option value="AT">Austria</option>
															<option value="AZ">Azerbaijan</option>
															<option value="BS">Bahamas</option>
															<option value="BH">Bahrain</option>
															<option value="BD">Bangladesh</option>
															<option value="BB">Barbados</option>
															<option value="BY">Belarus</option>
															<option value="BE">Belgium</option>
															<option value="BZ">Belize</option>
															<option value="BJ">Benin</option>
															<option value="BM">Bermuda</option>
															<option value="BT">Bhutan</option>
															<option value="BO">Bolivia</option>
															<option value="BA">Bosnia and Herzegovina</option>
															<option value="BW">Botswana</option>
															<option value="BV">Bouvet Island</option>
															<option value="BR">Brazil</option>
															<option value="IO">British Indian Ocean Territory</option>
															<option value="BN">Brunei Darussalam</option>
															<option value="BG">Bulgaria</option>
															<option value="BF">Burkina Faso</option>
															<option value="BI">Burundi</option>
															<option value="KH">Cambodia</option>
															<option value="CM">Cameroon</option>
															<option value="CA">Canada</option>
															<option value="CV">Cape Verde</option>
															<option value="KY">Cayman Islands</option>
															<option value="CF">Central African Republic</option>
															<option value="TD">Chad</option>
															<option value="CL">Chile</option>
															<option value="CN">China</option>
															<option value="CX">Christmas Island</option>
															<option value="CC">Cocos (Keeling) Islands</option>
															<option value="CO">Colombia</option>
															<option value="KM">Comoros</option>
															<option value="CG">Congo</option>
															<option value="CD">
																Congo, The Democratic Republic of the
															</option>
															<option value="CK">Cook Islands</option>
															<option value="CR">Costa Rica</option>
															<option value="CI">Cote D'Ivoire</option>
															<option value="HR">Croatia</option>
															<option value="CU">Cuba</option>
															<option value="CY">Cyprus</option>
															<option value="CZ">Czech Republic</option>
															<option value="DK">Denmark</option>
															<option value="DJ">Djibouti</option>
															<option value="DM">Dominica</option>
															<option value="DO">Dominican Republic</option>
															<option value="EC">Ecuador</option>
															<option value="EG">Egypt</option>
															<option value="SV">El Salvador</option>
															<option value="GQ">Equatorial Guinea</option>
															<option value="ER">Eritrea</option>
															<option value="EE">Estonia</option>
															<option value="ET">Ethiopia</option>
															<option value="FK">Falkland Islands (Malvinas)</option>
															<option value="FO">Faroe Islands</option>
															<option value="FJ">Fiji</option>
															<option value="FI">Finland</option>
															<option value="FR">France</option>
															<option value="GF">French Guiana</option>
															<option value="PF">French Polynesia</option>
															<option value="TF">French Southern Territories</option>
															<option value="GA">Gabon</option>
															<option value="GM">Gambia</option>
															<option value="GE">Georgia</option>
															<option value="DE">Germany</option>
															<option value="GH">Ghana</option>
															<option value="GI">Gibraltar</option>
															<option value="GR">Greece</option>
															<option value="GL">Greenland</option>
															<option value="GD">Grenada</option>
															<option value="GP">Guadeloupe</option>
															<option value="GU">Guam</option>
															<option value="GT">Guatemala</option>
															<option value="GG">Guernsey</option>
															<option value="GN">Guinea</option>
															<option value="GW">Guinea-Bissau</option>
															<option value="GY">Guyana</option>
															<option value="HT">Haiti</option>
															<option value="HM">
																Heard Island and Mcdonald Islands
															</option>
															<option value="VA">Holy See (Vatican City State)</option>
															<option value="HN">Honduras</option>
															<option value="HK">Hong Kong</option>
															<option value="HU">Hungary</option>
															<option value="IS">Iceland</option>
															<option value="IN">India</option>
															<option value="ID">Indonesia</option>
															<option value="IR">Iran, Islamic Republic Of</option>
															<option value="IQ">Iraq</option>
															<option value="IE">Ireland</option>
															<option value="IM">Isle of Man</option>
															<option value="IL">Israel</option>
															<option value="IT">Italy</option>
															<option value="JM">Jamaica</option>
															<option value="JP">Japan</option>
															<option value="JE">Jersey</option>
															<option value="JO">Jordan</option>
															<option value="KZ">Kazakhstan</option>
															<option value="KE">Kenya</option>
															<option value="KI">Kiribati</option>
															<option value="KP">
																Korea, Democratic People'S Republic of
															</option>
															<option value="KR">Korea, Republic of</option>
															<option value="KW">Kuwait</option>
															<option value="KG">Kyrgyzstan</option>
															<option value="LA">Lao People'S Democratic Republic</option>
															<option value="LV">Latvia</option>
															<option value="LB">Lebanon</option>
															<option value="LS">Lesotho</option>
															<option value="LR">Liberia</option>
															<option value="LY">Libyan Arab Jamahiriya</option>
															<option value="LI">Liechtenstein</option>
															<option value="LT">Lithuania</option>
															<option value="LU">Luxembourg</option>
															<option value="MO">Macao</option>
															<option value="MK">
																Macedonia, The Former Yugoslav Republic of
															</option>
															<option value="MG">Madagascar</option>
															<option value="MW">Malawi</option>
															<option value="MY">Malaysia</option>
															<option value="MV">Maldives</option>
															<option value="ML">Mali</option>
															<option value="MT">Malta</option>
															<option value="MH">Marshall Islands</option>
															<option value="MQ">Martinique</option>
															<option value="MR">Mauritania</option>
															<option value="MU">Mauritius</option>
															<option value="YT">Mayotte</option>
															<option value="MX">Mexico</option>
															<option value="FM">Micronesia, Federated States of</option>
															<option value="MD">Moldova, Republic of</option>
															<option value="MC">Monaco</option>
															<option value="MN">Mongolia</option>
															<option value="MS">Montserrat</option>
															<option value="MA">Morocco</option>
															<option value="MZ">Mozambique</option>
															<option value="MM">Myanmar</option>
															<option value="NA">Namibia</option>
															<option value="NR">Nauru</option>
															<option value="NP">Nepal</option>
															<option value="NL">Netherlands</option>
															<option value="AN">Netherlands Antilles</option>
															<option value="NC">New Caledonia</option>
															<option value="NZ">New Zealand</option>
															<option value="NI">Nicaragua</option>
															<option value="NE">Niger</option>
															<option value="NG">Nigeria</option>
															<option value="NU">Niue</option>
															<option value="NF">Norfolk Island</option>
															<option value="MP">Northern Mariana Islands</option>
															<option value="NO">Norway</option>
															<option value="OM">Oman</option>
															<option value="PK">Pakistan</option>
															<option value="PW">Palau</option>
															<option value="PS">Palestinian Territory, Occupied</option>
															<option value="PA">Panama</option>
															<option value="PG">Papua New Guinea</option>
															<option value="PY">Paraguay</option>
															<option value="PE">Peru</option>
															<option value="PH">Philippines</option>
															<option value="PN">Pitcairn</option>
															<option value="PL">Poland</option>
															<option value="PT">Portugal</option>
															<option value="PR">Puerto Rico</option>
															<option value="QA">Qatar</option>
															<option value="RE">Reunion</option>
															<option value="RO">Romania</option>
															<option value="RU">Russian Federation</option>
															<option value="RW">Rwanda</option>
															<option value="SH">Saint Helena</option>
															<option value="KN">Saint Kitts and Nevis</option>
															<option value="LC">Saint Lucia</option>
															<option value="PM">Saint Pierre and Miquelon</option>
															<option value="VC">Saint Vincent and the Grenadines</option>
															<option value="WS">Samoa</option>
															<option value="SM">San Marino</option>
															<option value="ST">Sao Tome and Principe</option>
															<option value="SA">Saudi Arabia</option>
															<option value="SN">Senegal</option>
															<option value="CS">Serbia and Montenegro</option>
															<option value="SC">Seychelles</option>
															<option value="SL">Sierra Leone</option>
															<option value="SG">Singapore</option>
															<option value="SK">Slovakia</option>
															<option value="SI">Slovenia</option>
															<option value="SB">Solomon Islands</option>
															<option value="SO">Somalia</option>
															<option value="ZA">South Africa</option>
															<option value="GS">
																South Georgia and the South Sandwich Islands
															</option>
															<option value="ES">Spain</option>
															<option value="LK">Sri Lanka</option>
															<option value="SD">Sudan</option>
															<option value="SR">Surname</option>
															<option value="SJ">Svalbard and Jan Mayen</option>
															<option value="SZ">Swaziland</option>
															<option value="SE">Sweden</option>
															<option value="CH">Switzerland</option>
															<option value="SY">Syrian Arab Republic</option>
															<option value="TW">Taiwan, Province of China</option>
															<option value="TJ">Tajikistan</option>
															<option value="TZ">Tanzania, United Republic of</option>
															<option value="TH">Thailand</option>
															<option value="TL">Timor-Leste</option>
															<option value="TG">Togo</option>
															<option value="TK">Tokelau</option>
															<option value="TO">Tonga</option>
															<option value="TT">Trinidad and Tobago</option>
															<option value="TN">Tunisia</option>
															<option value="TR">Turkey</option>
															<option value="TM">Turkmenistan</option>
															<option value="TC">Turks and Caicos Islands</option>
															<option value="TV">Tuvalu</option>
															<option value="UG">Uganda</option>
															<option value="UA">Ukraine</option>
															<option value="AE">United Arab Emirates</option>
															<option value="GB">United Kingdom</option>
															<option value="UY">Uruguay</option>
															<option value="UZ">Uzbekistan</option>
															<option value="VU">Vanuatu</option>
															<option value="VE">Venezuela</option>
															<option value="VN">Vietnam</option>
															<option value="VG">Virgin Islands, British</option>
															<option value="VI">Virgin Islands, U.S.</option>
															<option value="WF">Wallis and Futuna</option>
															<option value="EH">Western Sahara</option>
															<option value="YE">Yemen</option>
															<option value="ZM">Zambia</option>
															<option value="ZW ">Zimbabwe</option>
														</select>
														{errors.country_address &&
														touched.country_address && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.country_address}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
										</Grid>

										<h2>ID Document</h2>
										<Grid columns={1}>
											<Grid.Row>
												<Grid.Column>
													<HBFormGroup>
														<label>Government Issued ID</label>
														<select
															id="id_document"
															ref={this.id_documentRef}
															onChange={handleChange}
															onBlur={handleBlur}
														>
															<option value="PP" key="PP">
																Passport
															</option>
															<option value="DL" key="DL">
																Drivers License
															</option>
															<option value="ID" key="ID">
																Identification Card
															</option>
														</select>
														{errors.id_document &&
														touched.id_document && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.id_document}
															</p>
														)}
													</HBFormGroup>
												</Grid.Column>
											</Grid.Row>
										</Grid>

										<HBFormGroup>
											<div
												style={{
													borderBottom: '2px solid #383838',
													paddingBottom: '10px',
													display: 'flex',
													alignItems: 'center',
													marginTop: '30px'
												}}
											>
												<span style={{ color: '#fff', flex: '1' }}>
													{values.file ? values.file.name || '' : ''}
												</span>
												<HBButton
													bsstyle="center"
													default="default"
													ref={this.fileRef}
													width="4"
													as="label"
													htmlFor="file"
													size="big"
													style={{
														width: '200px',
														borderRadius: '5px',
														height: '50px',
														lineHeight: '50px',
														color: '#121212'
													}}
												>
													Upload file
												</HBButton>
												<input
													id="file"
													hidden
													type="file"
													name="file"
													onChange={(event) => {
														setFieldValue('file', event.currentTarget.files[0]);

														function getBase64(file) {
															return new Promise((resolve, reject) => {
																if (file) {
																	try {
																		console.log(file, 'filefile');
																		const reader = new FileReader();
																		reader.readAsDataURL(file);
																		reader.onload = () => resolve(reader.result);
																		reader.onerror = (error) => reject(error);
																	} catch (error) {
																		reject(error);
																	}
																}

																// reject(new Error('No selected photo'));
															});
														}

														var file = event.currentTarget.files[0];
														getBase64(file).then(function(data) {
															setFieldValue('doc_base64', data);
														});
													}}
													onBlur={handleBlur}
												/>
											</div>
											{errors.file &&
											touched.file && (
												<p
													style={{
														display: 'block',
														marginTop: '5px',
														marginBottom: '0',
														fontSize: '12px',
														color: '#a94442'
													}}
												>
													{errors.file}
												</p>
											)}
										</HBFormGroup>
										{/* <pre>
                                                    {values.file
                                                    ? JSON.stringify(
                                                        {
                                                            fileName: values.file.name,
                                                            type: values.file.type,
                                                            size: `${values.file.size} bytes`
                                                        },
                                                        null,
                                                        2
                                                        )
                                                    : null}
                                                </pre>
                                                <pre>{values.text ? values.text : null} </pre> */}
										<Note>
											Make sure your government issued photo bearing ID shows the four corners of
											the document, is readable, not yet expired, and includes your date of birth.
										</Note>
										<HBButton
											type="submit"
											disabled={isSubmitting}
											bsstyle="center"
											default="default"
										>{`Submit`}</HBButton>
									</HBForm>
								</form>
							);
						}}
					</Formik>
				</HBContainer>

				<Modal
					className={`modal-welcome no-shadow`}
					closeOnEscape={false}
					closeOnDimmerClick={false}
					open={showModalSuccess}
					size="small"
				>
					<Modal.Content style={{ background: 'transparent', padding: '0', borderRadius: '8px' }}>
						<HBModal style={{ maxWidth: '460px', margin: '0 auto' }}>
							{/* <img className="modal-close" src={iconClose} onClick={this.handleClickReset} alt="close"/> */}
							<div style={{ textAlign: 'center' }}>
								<p style={{ color: '#fff', fontSize: '20px', marginBottom: '30px', lineHeight: '1.5' }}>
									{'Thank you for submitting, your application is now under review.'}
								</p>
								<HBButton
									bsstyle="center"
									default="border"
									size="small"
									style={{ maxWidth: '180px', margin: '0 auto' }}
									onClick={this.handleClickSuccess}
								>
									{'Okay'}
								</HBButton>
							</div>
							{pleaseWait ? (
								<Dimmer active>
									<Loader />
								</Dimmer>
							) : (
								''
							)}
						</HBModal>
					</Modal.Content>
				</Modal>
			</HBAccountVerification>
		);
	}
}

export default AccountVerification;
