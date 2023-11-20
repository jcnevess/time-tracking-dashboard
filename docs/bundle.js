function setTimeFrame(timeFrame) {
  let controls = document.querySelectorAll(".controls__option");

  switch (timeFrame) {
    case "day":
      controls.forEach((element) =>
        element.classList.remove("controls__option__active")
      );
      document
        .querySelector("#control_day")
        .classList.add("controls__option__active");

      document
        .querySelectorAll(".activity__daily")
        .forEach((element) => element.classList.remove("activity__hidden"));
      document
        .querySelectorAll(".activity__weekly")
        .forEach((element) => element.classList.add("activity__hidden"));
      document
        .querySelectorAll(".activity__monthly")
        .forEach((element) => element.classList.add("activity__hidden"));
      break;

    case "week":
      controls.forEach((element) =>
        element.classList.remove("controls__option__active")
      );
      document
        .querySelector("#control_week")
        .classList.add("controls__option__active");

      document
        .querySelectorAll(".activity__daily")
        .forEach((element) => element.classList.add("activity__hidden"));
      document
        .querySelectorAll(".activity__weekly")
        .forEach((element) => element.classList.remove("activity__hidden"));
      document
        .querySelectorAll(".activity__monthly")
        .forEach((element) => element.classList.add("activity__hidden"));
      break;

    case "year":
      controls.forEach((element) =>
        element.classList.remove("controls__option__active")
      );
      document
        .querySelector("#control_month")
        .classList.add("controls__option__active");

      document
        .querySelectorAll(".activity__daily")
        .forEach((element) => element.classList.add("activity__hidden"));
      document
        .querySelectorAll(".activity__weekly")
        .forEach((element) => element.classList.add("activity__hidden"));
      document
        .querySelectorAll(".activity__monthly")
        .forEach((element) => element.classList.remove("activity__hidden"));
      break;
  }
}
