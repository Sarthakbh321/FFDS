import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import "./ChatListItem.css";

const ChatListItem = (props) => {
	const { name, profile, lastMsg } = props.chat;

	return (
		<div className="chat-list-item">
			<div className="chat-profile-picture">
				<Avatar alt={name} src={profile} className="chat-item-img" />
			</div>
			<div className="chat-info">
				<Typography
					variant="h6"
					color="secondary"
					className="chat-item-name"
				>
					{name}
				</Typography>
				<p className="chat-item-last">{lastMsg}</p>
			</div>
		</div>
	);
};

export default ChatListItem;
