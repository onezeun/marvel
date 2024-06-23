const DetailsInfoCard = ({ title, items }) => {
  return (
    <div className="mt-5 cursor-default rounded-lg border border-gray-200 bg-white bg-opacity-20 p-5 shadow-md md:mt-0 md:max-h-[34%] md:overflow-x-auto">
      <p className="mb-2 text-xl font-semibold">
        <strong>{title}:</strong> {items.length}
      </p>
      <ul className="list-inside list-disc space-y-1">
        {items.map((item) => (
          <li key={item.resourceURI}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsInfoCard;
