import { Entries } from "./Entries.js";
import { JournalForm} from "./JournalForm.JS";

export const DailyJournal = () => {
  return `
    <header>Giovanni's Journal</header>
    <main>
      <h1 class="headerText">Daily Log</h1>
      ${JournalForm()}
        </br> </br>
        <article id="entries">${Entries()}</article>
        </br>
        </br>
    </main>
    <footer>Aim to learn everyday! Keep on grinding!</footer>
        `;
};
