import "./SchoolCalendar.css"

export default function SchoolCalendar() {

const days = [
"", "", "", "", "", "", "",
1,2,3,4,5,6,7,
8,9,10,11,12,13,14,
15,16,17,18,19,20,21,
22,23,24,25,26,27,28,
29,30,31
]

return (

<div className="calendar-card">

<div className="calendar-header">

<div className="calendar-title">
<h3>School Calendar</h3>
<span className="full-calendar">Full Calendar</span>
</div>

<div className="calendar-month">
<button>{"<"}</button>
<span>October 2023</span>
<button>{">"}</button>
</div>

</div>


<div className="calendar-grid">

<div>Sun</div>
<div>Mon</div>
<div>Tue</div>
<div>Wed</div>
<div>Thu</div>
<div>Fri</div>
<div>Sat</div>

{days.map((d,i)=>(
<div
key={i}
className={`calendar-day ${d===20?"active":""}`}
>

{d}

{[12,16,20,25].includes(d) && (
<span className="event-dot"></span>
)}

</div>
))}

</div>


<div className="calendar-events">

<div className="event-item">
<div className="event-date">
<b>20</b>
<span>OCT</span>
</div>

<div className="event-info">
<h4>Parent-Teacher Meeting</h4>
<p>10:00 AM - Main Auditorium</p>
</div>
</div>


<div className="event-item">
<div className="event-date">
<b>25</b>
<span>OCT</span>
</div>

<div className="event-info">
<h4>Science Fair</h4>
<p>All day - Science Block</p>
</div>
</div>


<div className="event-item">
<div className="event-date">
<b>12</b>
<span>NOV</span>
</div>

<div className="event-info">
<h4>Mid-term Exams Begin</h4>
<p>All classes</p>
</div>
</div>

</div>

</div>

)
}