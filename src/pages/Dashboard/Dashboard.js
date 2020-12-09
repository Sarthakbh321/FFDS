import React from "react";
import { motion } from "framer-motion";
import "./Dashboard.css";
import MatchesDisplay from "../../components/MatchesDisplay/MatchesDisplay";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
	return (
		<motion.div
			className="dashboard-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<Grid container spacing={3}>
				<Grid item sm={12} md={6}>
					<MatchesDisplay />
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Dashboard;
