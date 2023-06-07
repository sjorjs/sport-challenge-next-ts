export const dateConverter = (props) => {
  const {dateTimeString} = props
  const [date, time] = dateTimeString.split("T");
  return [date, time];
}