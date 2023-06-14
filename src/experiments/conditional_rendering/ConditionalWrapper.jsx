import PropTypes from 'prop-types';

const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return condition ? wrapper(children) : children;
}

export default ConditionalWrapper


ConditionalWrapper.propTypes = {
    condition: PropTypes.any,
    wrapper: PropTypes.any,
    children: PropTypes.any
};