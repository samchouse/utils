const space = (text: string) => {
  let final = '';
  for (const char of Array.from(text)) {
    final += `${char} `;
  }

  return final.trimEnd();
};

export default space;
