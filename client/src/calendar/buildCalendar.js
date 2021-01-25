export default function buildCalendar(value) {
  //value is pointing to the current date of this moment
  //using .clone() so the original start day doesnt get changed
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  const day = startDay.clone().subtract(1, "day");

  //Still a bit confused with using a temp array here
  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    //in each iteration, we are going to push in a week's worth of data
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
  return calendar;
}
