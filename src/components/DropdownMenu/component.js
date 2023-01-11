import styled from "styled-components";
import cssTheme from "../../styles/css";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import DropdownItem from "./DropdownItem";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Wrapper = styled.div`
  ${cssTheme.flexBox("column", "flex-start")};
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
  width: 140px;
  height: 110px;
  top: calc(100% + 0.25rem);
  left: ${(props) => props.pos.x}px;
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

const Component = ({ show, setShow, ...rest }) => {
  const getElemPosition = useCallback((className) => {
    const elements = document?.querySelector(`.${className}`);
    const pos = elements?.getBoundingClientRect();
    return pos;
  }, []);
  const wrapperRef = useRef(null);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  const handleOnShow = (e) => {
    const showMenu = document.querySelector(".show_menu");
    if (showMenu.contains(e.target)) return;
    setShow(false);
  };
  useLayoutEffect(() => {
    const { x, y } = getElemPosition("show_menu");
    setMenuPos((prev) => {
      return { ...prev, x, y };
    });
  }, [getElemPosition]);
  useOutsideAlerter(wrapperRef, handleOnShow);
  const items = menuList.map((item) => (
    <DropdownItem key={item.id} {...item}>
      {item.title}
    </DropdownItem>
  ));
  return (
    <Wrapper ref={wrapperRef} pos={menuPos} show={show} {...rest}>
      {items}
    </Wrapper>
  );
};

export default Component;
