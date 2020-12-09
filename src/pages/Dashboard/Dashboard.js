import React from "react";
import { motion } from "framer-motion";
import "./Dashboard.css";
import MatchesDisplay from "../../components/MatchesDisplay/MatchesDisplay";
import { Grid } from "@material-ui/core";
import ChatList from "../../components/ChatList/ChatList";

const Dashboard = () => {
	return (
		<motion.div
			className="dashboard-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<Grid
				container
				spacing={3}
				style={{
					height: "100%",
					maxHeight: "calc(100vh - 64px)",
					marginTop: "1px",
				}}
			>
				<Grid
					item
					sm={12}
					md={5}
					style={{
						borderRight: "1px solid #ccc",
						height: "calc(100vh - 64px)",
						overflowY: "scroll",
						padding: "2% 3%",
					}}
				>
					<MatchesDisplay />
					<ChatList />
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Dashboard;
