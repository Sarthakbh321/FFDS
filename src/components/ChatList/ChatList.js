import { Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { dummyChats } from "../../data/dummyChats";
import ChatListItem from "../ChatListItem/ChatListItem";
import "./ChatList.css";

const ChatList = () => {
	const [chatList, setChatList] = useState(dummyChats);

	return (
		<div className="chat-list-section">
			<Typography variant="h5" color="primary" className="section-header">
				Your chats
			</Typography>
			<div className="chat-list-list">
				{chatList.map((chat) => (
					<ChatListItem key={chat.id} chat={chat} />
				))}
			</div>
		</div>
	);
};

export default ChatList;
