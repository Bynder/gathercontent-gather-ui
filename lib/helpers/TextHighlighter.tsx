import React from 'react';

export function TextHighlighter({ text, highlight }) {
  const indexOfHighlightedText = text
    .toLowerCase()
    .search(highlight.toLowerCase());

  if (indexOfHighlightedText < 0) {
    return text;
  }

  return (
    <span>
      {text.slice(0, indexOfHighlightedText)}
      <b>
        {text.slice(
          indexOfHighlightedText,
          indexOfHighlightedText + highlight.length
        )}
      </b>
      {text.slice(indexOfHighlightedText + highlight.length, text.length)}
    </span>
  );
}
