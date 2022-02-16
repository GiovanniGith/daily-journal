export const JournalForm = () => {
    return `
    <fieldset class="">
        <label for="entryDate">Date</label>
        <input
          type="date"
          name="entryDate"
          id="entryDateInput"
          class="entryForm_date"
        />
      </fieldset>
      <fieldset class="inputFieldset">
        <label for="conceptsCovered"> Concepts Covered</label>
        <input
          type="text"
          name="conceptsCovered"
          id="conceptsCoveredInput"
          class="entryForm_conceptsCovered"
        />
      </fieldset>
      <fieldset class="inputFieldset">
      <label for="journalEntry">Journal Entry</label>
      <input type="text" name="journalEntry" id="journalEntryInput" class="entryForm_journalEntry">
      </fieldset>
      <fieldset>
          <label for="moodSelect">Mood for the Day</label>    
          <select>
              <option>Happy</option>
              <option>Sad</option>
              <option>Uneasy</option>
              <option>Need Help</option>
              <option>Confident</option>
          </select>
        </fieldset> </br>
        <button type="submit">Record Journal Entry </button> </br>
        `
}