```markdown
* Build (layout, days, etc)                   line:448
* Build Layout                                line:467
* Build Side-Menu                             line:453
* Build Widget Mode                           line:1528
* Build Date-Picker Mode                      line:1747

* Build Document Events                       line:1947
* Full Day View                               line:2381
* Full Week View                              line:3221
* Full Month View                             line:4254
* Full Month View - Years Drop-Down Menu      line:4729

* Full Month View - Days                      line:5030
* Full Month View - Day Events                line:5307
* Full Year View                              line:5736
* All Events View                             line:6242
* Timeline View                               line:6700

* Build Context Menus                         line:7300
* Context Menu - Month Day                    line:7377
* Context Menu - Event                        line:7486
* Context Menu - Full Day                     line:7824
* Context Menu - Day Header                   line:7940

* Build Disabled Background                   line:8040
* Build Event Editing Dialog                  line:8064
* Build Event Editing Colors Dialog           line:9231
* Build Event Editing Repeat Options Dialog   line:9353
* Build Message Dialog                        line:9522

* Export Events Dialog                        line:9630
* Search Dialog                               line:9884
* Configuration Dialog                        line:10711
* Jump To Date Dialog                         line:10948
* Tooltip                                     line:11091

* Notification Pop-Up                         line:11335
* Day Name Headers                            line:11388
* Views - Management                          line:11508
* Views - Management - Positioning            line:11595
* Views - Management - Time Arrow             line:11787

* Views - Management - Overlapping Events     line:11823
* Views - Management - Moving/Resizing Events line:11952
* Full-Screen Mode                            line:12096
* Holidays                                    line:12178
* Getting/Remove Events                       line:12313

* Event Types                                 line:12430
* Date/Time Validation & Handling             line:12485
* Build Date/Time Displays                    line:12881
* Drag & Drop                                 line:12997
* Moving Dialogs                              line:13314

* Tabs                                        line:13382
* Event Class Handling                        line:13464
* Browser Notifications                       lne:13558
* Selected, Cut, Copy, and Paste              line:13689
* Auto-Refresh Timer                          line:13908

* Timers                                      line:13994
* Groups                                      line:14038
* Element Handling                            line:14068
* Build Controls/Text                         line:14481
* String Handling                             line:14591

* Validation                                  line:14661
* Default Parameter/Option Handling           line:14736
* Local Storage (persistence)                 line:14766
* Import Events                               line:14839
* Export Events                               line:15153

* Exporting To CSV                            line:15580
* Exporting To XML                            line:15643
* Exporting To JSON                           line:15710
* Exporting To TEXT                           line:15776
```




# تحلیل کدهای calendar.js

نمایش تایتل تقویم (خط 12573)

```javascript
function getCustomFormattedDateText(dateFormat, date) {
  var result = dateFormat,
    weekDayNumber = getWeekdayNumber(date)

  result = result.replace("{dddd}", _options.dayNames[weekDayNumber])
  result = result.replace("{ddd}", _options.dayNamesAbbreviated[weekDayNumber])
  result = result.replace("{dd}", padNumber(date.getDate()))
  result = result.replace("{d}", date.getDate())

  result = result.replace("{o}", getDayOrdinal(date.getDate()))

  result = result.replace("{mmmm}", _options.monthNames[date.getMonth()])
  result = result.replace(
    "{mmm}",
    _options.monthNamesAbbreviated[date.getMonth()]
  )
  result = result.replace("{mm}", padNumber(date.getMonth() + 1))
  result = result.replace("{m}", date.getMonth() + 1)

  result = result.replace("{yyyy}", date.getFullYear())
  result = result.replace("{yyy}", date.getFullYear().toString().substring(1))
  result = result.replace("{yy}", date.getFullYear().toString().substring(2))
  result = result.replace(
    "{y}",
    parseInt(date.getFullYear().toString().substring(2)).toString()
  )

  return result
}
```

تغییر سال میلادی به شمسی (خط 4693)

```javascript
function updateFullMonthViewYearDropDownColors() {
  var yearSelected =
      _element_View_FullMonth_TitleBar_YearSelector.getElementsByClassName(
        "year"
      ),
    yearSelectedLength = yearSelected.length

  if (yearSelectedLength >= 1) {
    for (
      var yearsSelectedIndex = 0;
      yearsSelectedIndex < yearSelectedLength;
      yearsSelectedIndex++
    ) {
      if (yearSelected[yearsSelectedIndex].className !== "year") {
        yearSelected[yearsSelectedIndex].className = "year"
      }
    }
  }

  // تغییر سال میلادی به شمسی
  var year = getElementByID(_element_ID_YearSelected + _jy)
  if (year !== null) {
    year.className += " year-selected"
  }

  if (!_element_Mode_DatePicker_Enabled) {
    var yearsHandledForEvents = []

    getAllEventsFunc(function (eventDetails) {
      var fromYear = eventDetails.from.getFullYear()

      if (yearsHandledForEvents.indexOf(fromYear) === -1) {
        var yearEvents = getElementByID(_element_ID_YearSelected + fromYear)
        if (
          yearEvents !== null &&
          yearEvents.className.indexOf(" year-selected") === -1
        ) {
          yearEvents.className += " year-has-events"
        }

        yearsHandledForEvents.push(fromYear)
      }
    })
  }

  return year
}
```
