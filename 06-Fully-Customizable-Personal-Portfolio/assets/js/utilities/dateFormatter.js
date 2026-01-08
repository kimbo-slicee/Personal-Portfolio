const dateFormatter =
    (
        date,
        locale = 'en-US',
        options = { year: "numeric", month: "long", day: "numeric" }
    )=> new Intl.DateTimeFormat(locale, options).format(date);

export default dateFormatter;