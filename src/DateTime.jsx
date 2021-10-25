import { useState, useEffect } from 'react'
export default function DateTime() {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    useEffect(() => {
        setInterval(() => {
            const dateObj = new Date()
            const dateValue = StringFormatter(dateObj.getDate()) + "-" +
                            StringFormatter(dateObj.getMonth() + 1) + "-" +
                            StringFormatter(dateObj.getFullYear()) +
                            " (" +StringifyDay(dateObj.getDay())+ ")";
            const timeValue = StringFormatter(dateObj.getHours()) + ":" +
                            StringFormatter(dateObj.getMinutes()) + ":" +
                            StringFormatter(dateObj.getSeconds());
            setDate(dateValue)
            setTime(timeValue)
        },1000)
    },[])
    function StringFormatter(s) {
        s = s.toString()
        if (s.length === 1)
            return "0" + s
        else
            return s;
    }
    function StringifyDay(d)
    {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d]
    }
    return (
        <>
            <div>
                {date}
            </div>
            <div>
                {time}
            </div>
        </>
    )
}