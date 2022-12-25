import { Router } from "./router/Router";

// import { PrimaryButton } from "./compnents/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./compnents/atoms/button/SecondaryButton";
// import { SearchInput } from "./compnents/molcules/SearchInput";
// import { UserCard } from "./compnents/organism/user/UserCard";
import "./styles.css";

// import image from "./images/userImage.png";
// import { BrowserRouter, Router } from "react-router-dom";
// import { DefaultLayout } from "./compnents/templates/DefaultLayout";

// const user = {
//   name: "じゃけぇ",
//   image: image,
//   email: "123456@example.com",
//   phone: "090-1234-5678",
//   company: {
//     name: "テスト株式会社"
//   },
//   website: "https://google.com"
// };

export default function App() {
  // <BrowserRouter>
  //   <DefaultLayout>
  //     <PrimaryButton>テスト</PrimaryButton>
  //     <SecondaryButton>テスト</SecondaryButton>
  //     <br />
  //     <SearchInput />
  //     <UserCard user={user} />
  //   </DefaultLayout>
  // </BrowserRouter>
  return <Router />;
}
