import Thread from './Thread';
import { stack } from '../data/skills';

export default function Stack() {
  return (
    <section id="stack" data-theme="night" className="chapter" aria-labelledby="stack-title">
      <Thread />
      <div className="wrap">
        <h2 id="stack-title" className="display">What I work with</h2>
        <table className="stack-table">
          <caption className="sr-only">Tools and skills by area</caption>
          <tbody>
            {stack.map((row) => (
              <tr key={row.group}>
                <th scope="row">{row.group}</th>
                <td className="stack-tools">{row.tools.join(', ')}</td>
                <td className="stack-note">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
