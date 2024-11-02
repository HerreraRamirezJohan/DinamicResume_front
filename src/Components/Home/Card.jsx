import PropTypes from 'prop-types'
const Card = ({ title, content }) => {
    return (
        <div className="bg-[#656363] rounded-lg p-4 w-[250px] h-[350px] flex flex-col justify-between items-start">
            <h2 className="text-[#3BC020] text-lg font-semibold">{title}</h2>
            <p className="text-white text-sm text-left break-normal poppins-regular">{content}</p>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

export default Card;