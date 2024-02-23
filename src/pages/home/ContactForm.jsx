import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";


import Swal from "sweetalert2";
import axios from "axios";
import { contactOptions } from "../../utils/dataArrays";
import { ContactButton } from "./ContactButton";

export const ContactForm = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});


	const prevDelay = 1000;
	const [isVisible, setIsVisible] = useState(false);
	const fadeLeft = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? "translateX(0)" : "translateX(-20%)",
		config: {
			duration: 800,
			delay: prevDelay,
			easing: easings.easeInSine,
		},
	});

	useEffect(() => {
		const loaderDelay = 200;

		// Simulate loading delay with setTimeout
		setTimeout(() => {
			if (inView) {
				setIsVisible(true);
			}
		}, loaderDelay);
	}, [inView]);


	const [data, setData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})

	const ClearData = () => {
		setData({
			name: "",
			email: "",
			subject: "",
			message: "",
		})
	}

	const selectSubject = (sub) => {
		setData(
			{
				...data,
				subject: sub
			}
		)
		setErrors({ ...errors, subject: "" });
	}
	const [errors, setErrors] = useState({});

	const validate = (formData) => {
		const errors = {};
		if (!formData.name) {
			errors.name = "Name is Required";
		}
		if (!formData.email) {
			errors.email = "Email is Required";
		}
		if (!formData.subject) {
			errors.subject = "Subject is Required";
		}
		if (!formData.message) {
			errors.message = "Message is Required";
		}
		return errors;
	}
	const handleContactData = async () => {
		const validateErrors = validate(data);
		setErrors(validateErrors);

		if (Object.keys(validateErrors).length === 0) {
			Swal.fire({
				title: "Do you want to send the message?",
				showDenyButton: true,
				showCancelButton: false,
				confirmButtonText: "Send",
				denyButtonText: `Cancel`,
			}).then((result) => {

				if (result.isConfirmed) {
					axios.post('https://www.backend.stautobase.com/api/send_mail', data)
						.then((result) => {
							Swal.fire("Sent!", "", "success");
							ClearData()
							setErrors({})
						}).catch(({ response }) => {
							console.log(response.data);
						});
				}
				else if (result.isDenied) {
					Swal.fire("Message is not sent", "", "info");
					ClearData()
					setErrors({})
				}
			})
		}

	}
	return (
		<animated.div style={fadeLeft} ref={ref} className="flex md:w-[59%] h-auto flex-col gap-10 bg-zinc-100 rounded-[10px] p-10">
			<div className="text-[#2E0249]  md:text-[20px] md:leading-[27px] text-[16px] leading-[20px]">
				I’m looking for
			</div>
			<div className="flex flex-wrap gap-3">
				{contactOptions.map((option, optionIndex) => {
					return (
						<ContactButton title={option.title} subject={option.subject} selectSubject={selectSubject} selectedSubject={data.subject} />
					)
				})}

			</div>
			{errors.subject && (
				<span className=" text-[14px] text-red-500  ">
					{errors.subject}
				</span>
			)}
			<div className="flex flex-col gap-10">
				<div className=" flex flex-col">
					<input
						type="text"
						placeholder="Your name"
						onChange={(e) => {
							setData({
								...data,
								name: e.target.value
							})
							if (event.target.value !== "") {
								setErrors({ ...errors, name: "" });
							}
						}}
						value={data.name}
						className="border p-2  text-[16px] contact-input"
					/>
					{errors.name && (
						<span className=" text-[14px] text-red-500  ">
							{errors.name}
						</span>
					)}
				</div>
				<div className=" flex flex-col">
					<input
						type="email"
						placeholder="Your Email"
						onChange={(e) => {
							setData({
								...data,
								email: e.target.value
							})
							if (event.target.value !== "") {
								setErrors({ ...errors, email: "" });
							}
						}}
						value={data.email}
						className="border p-2  text-[16px] contact-input"
					/>
					{errors.email && (
						<span className=" text-[14px] text-red-500  ">
							{errors.email}
						</span>
					)}
				</div>
				<div className=" flex flex-col">
					<input
						type="text"
						placeholder="Your Message"
						onChange={(e) => {
							setData({
								...data,
								message: e.target.value
							})
							if (event.target.value !== "") {
								setErrors({ ...errors, message: "" });
							}
						}}
						value={data.message}
						className="border p-2  text-[16px] contact-input"
					/>
					{errors.message && (
						<span className=" text-[14px] text-red-500  ">
							{errors.message}
						</span>
					)}
				</div>



			</div>
			<button onClick={() => handleContactData()} className="rounded-[10px] border-2 border-black contact-button md:w-[150px] w-[220px]  text-black hover:bg-black hover:text-white   md:p-[8px] p-[16px] md:pl-[13px] md:pr-[13px] text-base font-medium  text-center  ">

				Send Message
			</button>
		</animated.div>

	)
}
