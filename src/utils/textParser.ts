export function parseReviewContent(text: string) {
  // Sjekk om det faktisk finnes '\n\n' i teksten
  let sections = text.split('\n\n');
  if (sections.length === 1) {
    // Fallback til enkelt linjeskift
    sections = text.split('\n');
  }

  // Rensk bort tomme seksjoner
  sections = sections.map(s => s.trim()).filter(Boolean);

  return sections.map((section, index) => {
    // Første seksjon er alltid tittel
    if (index === 0) {
      return {
        type: 'title',
        content: section
      };
    }

    // Forbedret heuristikk for overskrifter
    const isShort = section.length < 80;
    const hasNoPeriod = !section.includes('.');
    const hasNoColon = !section.includes(':');
    const hasNoQuestionMark = !section.includes('?');
    const wordCount = section.split(' ').length;
    const isReasonableLength = wordCount >= 2 && wordCount <= 8;

    if (isShort && hasNoPeriod && hasNoColon && hasNoQuestionMark && isReasonableLength) {
      return {
        type: 'heading',
        content: section
      };
    }

    return {
      type: 'paragraph',
      content: section
    };
  });
} 