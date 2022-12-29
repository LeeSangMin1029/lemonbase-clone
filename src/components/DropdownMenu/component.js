import styled from "styled-components";
import { useRef } from "react";
import DropdownItem from "./DropdownItem";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Wrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
  width: 140px;
  height: 110px;
  top: calc(100% + 0.25rem);
  left: 510px;
  padding: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  gap: 1em;
`;

const menuList = [
  {
    id: "one",
    href: "https://camp.lemonbase.com/",
    title: "블로그",
  },
  {
    id: "two",
    href: "https://help.lemonbase.com/",
    title: "헬프센터",
  },
  {
    id: "three",
    href: "https://www.notion.so/Lemonbase-65837cf23e4440a3b0aff24f4ce4b20a",
    title: "업데이트 소식",
  },
];

const Component = ({ show, setShow }) => {
  const wrapperRef = useRef(null);
  console.log(show);
  const handleOnShow = (e) => {
    const showMenu = document.querySelector(".show_menu");
    if (e.target === showMenu || e.target === showMenu.children[0]) return;
    setShow(false);
  };
  useOutsideAlerter(wrapperRef, handleOnShow);
  const items = menuList.map((item) => (
    <DropdownItem key={item.id} item={item} />
  ));
  return (
    <Wrapper ref={wrapperRef} show={show}>
      {items}
    </Wrapper>
  );
};

export default Component;
