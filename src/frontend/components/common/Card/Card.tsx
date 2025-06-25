interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  description,
  image,
  className = '',
  children
}: CardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {image && (
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};