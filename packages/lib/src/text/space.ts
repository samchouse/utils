const space = (text: string) => {
  let final = '';
  for (const char of Array.from(text)) {
    final += `${char} `;
  }

  return final;
};

export default space;
