const dateFormatter = {
    formatDate: function(date, locale = 'en-US', options = { year: "numeric", month: "long", day: "numeric" }) {
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}
export default dateFormatter;