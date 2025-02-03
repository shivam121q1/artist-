export  function formatText(text: string): string {
    return text.startsWith('"') && text.endsWith('"') ? text.slice(1, -1) : text;
}

export const getSubstringAfterLastDoubleAsterisk = (text:string) : string => {
    const lastIndex = text.lastIndexOf("**");
    return lastIndex !== -1 ? text.substring(lastIndex + 2) : text;
}