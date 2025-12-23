import type { TextContentData } from './types';

interface TextContentBlockProps {
  data: TextContentData;
}

export function TextContentBlock({ data }: TextContentBlockProps) {
  const { content } = data;

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.split('\n');

    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-semibold text-white mt-4 mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>;
      }

      // Bullet points
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-400 ml-4 mb-1">
            {line.slice(2)}
          </li>
        );
      }

      // Bold text
      const boldRegex = /\*\*(.*?)\*\*/g;
      const processedLine = line.replace(boldRegex, '<strong class="font-semibold text-white">$1</strong>');

      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Regular paragraph
      return (
        <p
          key={index}
          className="text-gray-400 mb-2"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });
  };

  return (
    <div className="prose prose-invert max-w-none">
      {renderContent(content)}
    </div>
  );
}
