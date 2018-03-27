import React from 'react';
import DayPicker from 'react-day-picker';
import { Col } from 'reactstrap';

import 'react-day-picker/lib/style.css';
import '../../scss/home/Calendar.scss';

const Calendar = () => (
  <Col
    lg={{ size: 3, offset: 0 }}
    md={{ size: 6, offset: 3 }}
    sm={{ size: 12, offset: 0 }}
    className="calendar-wrapper"
  >
    <DayPicker showOutsideDays />
  </Col>
);

export default Calendar;
