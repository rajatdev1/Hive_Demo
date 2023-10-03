// components/DatePicker.tsx
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';

export interface DateCalenderProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DateCalender: React.FC<DateCalenderProps> = ({ selectedDate, onDateChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Select a date"
        value={selectedDate}
        onChange={onDateChange}
        renderInput={(params:any) => <TextField {...params} fullWidth />}
      />

    </LocalizationProvider>
  );
};

export default DateCalender;