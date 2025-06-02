import styled from '@emotion/styled';
import { buildHand } from '../businesses/buildHand';
import { useEffect, useState } from 'react';
import Hand from './Hand';
import type { ClockNum } from '../interfaces/ClockNum';
import type { TimeFormat } from '../interfaces/TimeFormat';

const AnalogClock: React.VFC<ClockNum> = ({ time }) => {
  const [hand, setHand] = useState<TimeFormat[]>([]);
  useEffect(() => {
    setHand(buildHand());
  }, []);

  return (
    <SClockBoard>
      {hand.map((value, index) => (
        <Hand key={index} time={time} format={value.format} separate={value.separate} />
      ))}
    </SClockBoard>
  );
};

const SClockBoard = styled.div`
  margin-top: 24px;
  width: 400px;
  height: 400px;
  border: 1px solid #ffffff;
  border-radius: 100%;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default AnalogClock;
