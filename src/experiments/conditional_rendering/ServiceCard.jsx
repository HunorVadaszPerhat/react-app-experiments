import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, image, url }) => {
    return (
        <section>
          {url ? (
            <a href={url}>
              <h2>{title}</h2>
              <p>{description}</p>
              <img src={image} alt={title} />
            </a>
          ) : (
            <>
              <h2>{title}</h2>
              <p>{description}</p>
              <img src={image} alt={title} />
            </>
          )}
        </section>
      );
}

export default ServiceCard

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};