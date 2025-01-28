export function isAlphabetic(input: unknown):boolean {
    const regex = /^[a-zA-Z]+$/;
    const typedInput = input as string
    return regex.test(typedInput);
  }