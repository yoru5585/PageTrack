import dayjs from 'dayjs';
import styled from '@emotion/styled';
import type { ClockNum } from '../interfaces/ClockNum';

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <SClockText>{dayjs(time).format('HH:mm:ss')}</SClockText>;
};

const SClockText = styled.div`
  font-size: 50px;
  color: #ffffff;
  margin-top: 40px;
`;

export default DigitalClock;
