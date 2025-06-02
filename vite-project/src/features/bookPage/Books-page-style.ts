import styled from '@emotion/styled/macro';

export const BookList = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-height: 50vh; /* 必要に応じて調整 */
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const BookCard = styled.div`
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: border 0.2s ease;
  width: 400px;
  height: 100px;
  margin: 0 auto;
`;
