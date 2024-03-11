fullscreen = false;
if (fullscreen) {
  var calendarInstance = new calendarJs("myCalendar", {
    exportEventsEnabled: true,
    manualEditingEnabled: true,
    views: {
      fullMonth: {
        showTimesInEvents: false,
        minimumDayHeight: 0,
      },
    },
    organizerName: "Your Name",
    organizerEmailAddress: "your@email.address",
    visibleDays: [0, 1, 2, 3, 4, 5, 6],
    openInFullScreenMode: true,
    fullScreenModeEnabled: false,
    useTemplateWhenAddingNewEvent: false,
  });

  document.title += " - v" + calendarInstance.getVersion();
  // document.getElementById("header").innerText +=
  //   " - v" + calendarInstance.getVersion();
} else {
  var calendarInstance = new calendarJs("myCalendar", __TRANSLATION_OPTIONS);

  document.title += " v" + calendarInstance.getVersion();
  // document.getElementById("header").innerText +=
  // " - v" + calendarInstance.getVersion();
}
