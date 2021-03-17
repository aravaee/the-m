import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#323232" : "#E6E6E7")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 150px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#E6E6E7" : "#323232")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
