

const formatDate = (date: string, locale: 'id-ID' | 'en-EN') => {
    const dateObj = new Date(date)

    return dateObj.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

export default formatDate