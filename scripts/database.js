/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id:2,
            date: "02/12/2022",
            concept: "HTML elements",
            entry: "How to use fieldset, lable, input, button elements on html code",
            mood: "Happy"
        },
        {
            id:3,
            date:"02/01/2022",
            concept: "Event Click Listeners",
            entry: "learned how to code event click listeners in javascript and follow the code to what you want to find",
            mood: "uneasy"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    return database.entries.map(entry => ({...entry}))
    
}