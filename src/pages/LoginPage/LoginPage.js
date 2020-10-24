import React from "react";
import { motion } from "framer-motion";
import "./LoginPage.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useForm } from "react-hook-form";

function LoginPage() {
	const { register, handleSubmit, errors } = useForm();

	const submitForm = async (data) => {
		console.log(data);
	};

	return (
		<motion.div
			className="login-page"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "tween" }}
			exit={{ opacity: 0, transition: { duration: 0.3 } }}
		>
			<Grid container spacing={0} style={{ height: "100%" }}>
				<Grid item xs={12} md={5} className="login-section">
					<form
						onSubmit={handleSubmit(submitForm)}
						className="login-form"
					>
						<Typography variant="h3" className="login-head">
							LOGIN NOW
						</Typography>
						{/* <TextField
							variant="outlined"
							name="name"
							inputRef={register({ required: true })}
							placeholder="Name"
							style={{ width: "60%", marginBottom: "10px" }}
							InputProps={{
								style: {
									color: "black",
									fontWeight: "bold",
									backgroundColor: "white",
								},
							}}
							error={errors.name}
							helperText={errors.name ? "Name is required" : null}
						/> */}
						<TextField
							variant="outlined"
							name="email"
							inputRef={register({ required: true })}
							placeholder="Email"
							style={{ width: "60%", marginBottom: "10px" }}
							InputProps={{
								style: {
									color: "black",
									fontWeight: "bold",
									backgroundColor: "white",
								},
							}}
							error={errors.email}
							helperText={
								errors.email ? "Email is required" : null
							}
						/>
						<TextField
							variant="outlined"
							name="password"
							type="password"
							inputRef={register({ required: true })}
							placeholder="Password"
							style={{ width: "60%", marginBottom: "7%" }}
							InputProps={{
								style: {
									color: "black",
									fontWeight: "bold",
									backgroundColor: "white",
								},
							}}
							error={errors.password}
							helperText={
								errors.password ? "Password is required" : null
							}
						/>
						<Button
							variant="contained"
							color="primary"
							className="action-btn"
							type="submit"
							style={{ marginBottom: "20px" }}
						>
							SUBMIT
						</Button>
					</form>
				</Grid>
				<Grid item sm={12} md={7} className="login-text-section">
					<div className="jumbo-login-text">
						<Typography
							variant="h1"
							color="secondary"
							className="jumbo-text login-jumbo"
						>
							JOIN VIT'S ONLY DATING PLATFORM
						</Typography>
						<Typography
							variant="h6"
							className="login-secondary-text"
						>
							GET MATCHED WITH OTHER USERS BASED ON YOUR TIME
							TABLE!{" "}
							<ArrowBackIos
								style={{
									marginLeft: "20px",
								}}
							/>
						</Typography>
						<Typography
							variant="h6"
							className="login-secondary-text"
						>
							CHAT AND INTERACT WITH MATCHED USERS!
							<ArrowBackIos
								style={{
									marginLeft: "20px",
								}}
							/>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</motion.div>
	);
}

export default LoginPage;