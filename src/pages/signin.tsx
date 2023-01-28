import Join from '@/components/pages/join';
import styled from 'styled-components';

function JoinPage() {
  return (
    <Wrapper>
      <Title>정보를 입력하세요.</Title>
      <Join />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 65px 10px;
`;

const Title = styled.h1`
  color: #fff;
  line-height: 45px;
  font-size: 30px;
`;

export default JoinPage;
