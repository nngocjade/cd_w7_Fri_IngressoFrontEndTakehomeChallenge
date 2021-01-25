function isSelected(day, value) {
  return value.isSame(day, "day");
}

//we can only have one default export from a file
//but we can export as many other named exports as we want
export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

//function to return css class to decorate the current iterated day
export default function dayStyles(day, value) {
  if (beforeToday(day)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  //else
  return " ";
}
