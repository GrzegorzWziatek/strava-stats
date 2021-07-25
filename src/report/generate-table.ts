export const generateTable = (
  type: string,
  headings: string[],
  data: Array<string[]>
): string => {
  const tableHeadings = headings
    .map((heading) => `<th scope="col">${heading}</th>`)
    .join('\n');
  const tableDataRows = data
    .map((row, idx) => {
      const rowData = row.map((cell) => `<td>${cell}</td>`).join('\n');
      return `
      <tr>
        <td>${idx + 1}</td>
        ${rowData}
      </tr>`;
    })
    .join('\n');

  return `
   <h5 class="text-center">${type}</h5>
   <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        ${tableHeadings}
      </tr>
      </thead>
      <tbody>
        ${tableDataRows}
      </tbody>
    </table>
  `;
};
