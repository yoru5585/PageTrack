import styled from '@emotion/styled';
import dayjs from 'dayjs';
import type { ClockNum } from '../interfaces/ClockNum';
import type { TimeFormat } from '../interfaces/TimeFormat';

type Props = ClockNum & TimeFormat;

const Hand: React.VFC<Props> = ({ time, format, separate }) => {
  const now: number = Number(dayjs(time).format(format));
  const Angle = now * separate;
  let handStyles;
  if (format === 'h') {
    handStyles = {
      height: '130px',
      top: '70px',
    };
  }
  if (format === 'm') {
    handStyles = {
      height: '180px',
      top: '20px',
    };
  }
  if (format === 's') {
    handStyles = {
      height: '180px',
      top: '20px',
      width: '2px',
    };
  }

  const SSecHand = styled.div`
    width: 4px;
    background-color: #ffffff;
    border-radius: 100em;
    position: absolute;
    left: 50%;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(${Angle}deg);
    ${handStyles}
  `;
  return <SSecHand />;
};
export default Hand;
