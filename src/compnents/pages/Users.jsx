import styled from "styled-components";
import { SearchInput } from "../molcules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

import image from "../../images/userImage.png";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: image,
    email: "123456@example.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
