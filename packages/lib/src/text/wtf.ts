const wtf = (text: string) => {
  let final = '';
  let uppercaseNext = true;
  for (const char of Array.from(text)) {
    if (/\w/.exec(char))
      uppercaseNext
        ? (final += char.toUpperCase())
        : (final += char.toLowerCase());
    else final += char;

    uppercaseNext = !uppercaseNext;
  }

  return final;
};

export default wtf;
