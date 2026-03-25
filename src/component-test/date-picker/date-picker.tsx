import { DatePicker } from "ai-ui-kit"

const DatePickerTest = () => {
    return (
        <>
            <div>DatePickerTest</div>

            <DatePicker
                label="Select date"
                format={(date) => {
                    if (!date) return ""

                    const d = date.toDate("UTC")

                    const day = String(d.getDate()).padStart(2, "0")
                    const month = String(d.getMonth() + 1).padStart(2, "0")
                    const year = d.getFullYear()

                    return `${day}/${month}/${year}`
                }}
                placeholder="Pick a date"
                disabled={false}
                readOnly={false}
                closeOnSelect
                positioning={{ placement: "bottom-start" }}
                className="w-64"
            />

        </>
    )
}

export default DatePickerTest