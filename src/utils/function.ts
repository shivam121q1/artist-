export  function formatText(text: string): string {
    return text.startsWith('"') && text.endsWith('"') ? text.slice(1, -1) : text;
}