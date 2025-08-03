interface ContainerProps {
  children: React.ReactNode;
  gap?: string;
  isColumnArranged?: boolean;
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

const Container: React.FC<ContainerProps> = ({
  children,
  gap,
  isColumnArranged,
  alignItems,
  justifyContent,
}) => {
  return (
    <div
      className={`w-full flex ${isColumnArranged ? 'flex-col' : ''} ${alignItems ? `items-${alignItems}` : ''} ${justifyContent ? `justify-${justifyContent}` : ''} ${gap ? gap : 'gap-4'}`}
    >
      {children}
    </div>
  );
};

export default Container;
