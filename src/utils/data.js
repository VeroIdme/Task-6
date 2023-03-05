export const formatDate = oldDate => {
    const newDate = new Date (oldDate)
    const options = {
        year: "numeric",
        month: 'numeric',
        day: "numeric"
    }
    return newDate.toLocaleDateString("en-En", options)
}