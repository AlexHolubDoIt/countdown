import React, {useCallback, useEffect, useRef, useState} from 'react';
import 'moment-duration-format'
import moment from 'moment'
import CountdownCol from "./CountdownCol";

const countdownFormat = 'YY [years]|MM [months]|DD [days]|HH [hours]|mm [minutes]|ss [seconds]';

const CountdownNew = ({ date, timeOutText }) => {
    const [difference, setDifference] = useState([]);
    const timeout = useRef(0);

    const calculateDate = useCallback(() => {
        if (!moment(date).isValid()) {
            clearTimeout(timeout.current)
            setDifference([{value: 'Error!', label: 'Wrong date format'}]);
            return;
        }

        const start = moment();
        const end = moment(date);
        const diff = end.diff(start);

        if (diff <= 0 && timeOutText) {
            clearTimeout(timeout.current)
            setDifference([{value: 'Congratulations!', label: timeOutText}]);
        } else {
            const diffFormat = moment.duration(diff).format(countdownFormat);
            const diffParsed = diffFormat.split('|').map(d => {
                const [value, label] = d.split(' ');
                return {value, label}
            })

            setDifference(diffParsed);
        }
    }, [setDifference, date, timeOutText]);

    useEffect(() => {
        timeout.current = setTimeout(calculateDate, 1000);

        return () => clearTimeout(timeout.current);
    }, [difference, date, timeOutText, calculateDate])

    return (
      <div className="countdown">
          {difference.map(data => <CountdownCol {...data} key={data.label} />)}
      </div>
    );
}

export default CountdownNew;
