import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing * 4}px;
  margin-top: ${({ theme }) => theme.spacing * 4}px;
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
  border: 1px solid black;
  & div {
    margin-bottom: ${({ theme }) => theme.spacing * 3}px;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled(Field)`
  display: block;
`;
