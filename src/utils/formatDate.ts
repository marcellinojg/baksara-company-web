

const formatDate = (date: string, locale: 'id-ID' | 'en-EN', isForm = false) => {
    const dateObj = new Date(date)

    if (isForm === false)
        return dateObj.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })


    return `${dateObj.getFullYear().toString()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`
}

export default formatDate