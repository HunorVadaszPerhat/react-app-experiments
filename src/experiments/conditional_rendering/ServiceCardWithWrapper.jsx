import PropTypes from 'prop-types';
import ConditionalWrapper from './ConditionalWrapper'

/*
https://daily-dev-tips.com/posts/conditional-wrapping-in-react/
*/

const ServiceCardWithWrapper = ({ title, description, url }) => {
    return (
        <section>
          <ConditionalWrapper
            condition={url}
            wrapper={(children) => <a href={url}>{children}</a>}
          >
            <>
              <h2>{title}</h2>
              <p>{description}</p>
            </>
          </ConditionalWrapper>
        </section>
      );
}

export default ServiceCardWithWrapper

ServiceCardWithWrapper.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.any
};