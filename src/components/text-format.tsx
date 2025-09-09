import React from 'react';

interface TextFormatterProps {
  text: string;
}

const parseHTMLTags = (input: string): React.ReactNode[] => {
  const result: React.ReactNode[] = [];
  let remaining = input;
  let match;
  const tagRegex = /<([bi])>(.*?)<\/\1>/i;
  let key = 0;
  while ((match = tagRegex.exec(remaining)) !== null) {
    const [fullMatch, tag, content] = match;
    const index = match.index;
    if (index > 0) {
      result.push(remaining.slice(0, index));
    }
    if (tag.toLowerCase() === 'b') {
      result.push(
        <span className="font-semibold" key={`b-${key++}`}>
          {content}
        </span>
      );
    } else if (tag.toLowerCase() === 'i') {
      result.push(
        <span className="italic" key={`i-${key++}`}>
          {content}
        </span>
      );
    }
    remaining = remaining.slice(index + fullMatch.length);
  }
  if (remaining) {
    result.push(remaining);
  }
  return result;
};

const TextFormatter: React.FC<TextFormatterProps> = ({ text }) => {
  if (!text) {
    return null;
  }
  const paragraphs = text.split('|');
  let nodes: React.ReactNode[] = [];
  paragraphs.forEach((para, idx) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    let lastIndex = 0;
    let match;
    let paraNodes: React.ReactNode[] = [];
    let key = 0;
    while ((match = linkRegex.exec(para)) !== null) {
      const [fullMatch, linkText, url] = match;
      const index = match.index;
      if (index > lastIndex) {
        paraNodes.push(...parseHTMLTags(para.slice(lastIndex, index)));
      }
      paraNodes.push(
        <a
          key={`link-${idx}-${key++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }
    if (lastIndex < para.length) {
      paraNodes.push(...parseHTMLTags(para.slice(lastIndex)));
    }
    nodes.push(...paraNodes);
    if (idx < paragraphs.length - 1) {
      nodes.push(<br key={`br1-${idx}`} />);
    }
  });
  return <>{nodes}</>;
};

export default TextFormatter;
