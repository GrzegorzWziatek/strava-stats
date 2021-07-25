export const generateList =  (name: string, data: string[]): string => {
  const items = data.map(item => `<li class="list-group-item">${item}</li>`).join('\n')
  return `
    <ul class="list-group scrollable-list">
      <li class="list-group-item active">${name}</li>
      ${items}
    </ul>`;
}
