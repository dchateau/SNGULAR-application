import React from 'react';

interface CardProps {
  children: React.ReactNode;
  alignItems?: 'start' | 'end' | 'center' | 'baseline';
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'baseline'
    | 'between'
    | 'around'
    | 'evenly';
}

const Card: React.FC<CardProps> = ({
  children,
  alignItems,
  justifyContent,
}) => {
  return (
    <div
      className={`bg-white w-full p-4 flex flex-col ${alignItems ? `items-${alignItems}` : ''} ${justifyContent ? `justify-${justifyContent}` : ''} gap-4 rounded-md`}
    >
      {children}
    </div>
  );
};

export default Card;
