import React from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with "
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
    }
  };

  return (
    <Container>
      <Header>
        <IconsContainer>
          <IconButton>
            <UserAvatar />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled.button`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
