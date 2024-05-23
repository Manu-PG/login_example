import styled from "styled-components";

export const RegisterContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterForm = styled.form`
  min-width: 300px;
  max-width: 800px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const ErrorMessage = styled.h5`
  margin: 0px;
  padding: 0px;
  color: red;
`;
