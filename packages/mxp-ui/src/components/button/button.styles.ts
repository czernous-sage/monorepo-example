import styled from 'styled-components';

export const StyledButton = styled.button({
  color: 'pink',
  background: 'blue',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 700,
  padding: '1rem',
  border: 'none',

  '&:hover': {
    background: 'navy',
  },
});
