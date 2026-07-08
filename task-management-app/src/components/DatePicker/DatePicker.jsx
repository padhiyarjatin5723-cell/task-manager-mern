import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomDatePicker({ value, onChange }) {
  return (
    <DatePicker
      selected={value ? new Date(value) : null}
      onChange={(date) => onChange(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select Due Date"
      className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
      minDate={new Date()}
    />
  );
}

export default CustomDatePicker;