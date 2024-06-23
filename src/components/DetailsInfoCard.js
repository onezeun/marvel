import PropTypes from 'prop-types';

const DetailsInfoCard = ({ title, items }) => {
  return (
    <section className="mt-5 cursor-default rounded-lg border border-gray-200 bg-white bg-opacity-20 p-5 shadow-md md:mt-0 md:max-h-[34%] md:overflow-x-auto">
      <p className="mb-2 text-xl font-semibold">
        <strong>{title}:</strong> {items.length}
      </p>
      <ul className="list-inside list-disc space-y-1">
        {items.map((item) => (
          <li key={item.resourceURI}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
};

DetailsInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      resourceURI: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DetailsInfoCard;
