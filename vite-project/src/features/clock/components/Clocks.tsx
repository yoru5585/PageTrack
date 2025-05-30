import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import { useTime } from '../hooks/useTime';

const Clocks: React.VFC = () => {
  const time = useTime(1000);
  return (
    <>
      <AnalogClock time={time} />
      <DigitalClock time={time} />
    </>
  );
};

export default Clocks;
