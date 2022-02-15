import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""
    
    for (const entry of entries) {
        allEntriesAsHTML += `<div class="journalEntry"> <span class="dateCSS"> On ${entry.date}--</span>  
         <span class="entryCSS"> ${entry.entry}--</span><i class="moodCSS">  I felt ${entry.mood}</i></div></br>`
    }
    return allEntriesAsHTML
}