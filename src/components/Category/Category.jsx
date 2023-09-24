import PropTypes from 'prop-types';
const Category = ({category}) => {
    const {logo,category_name,availability} =category;
    return (
        <div className='bg-gray-100 ps-6 py-3 rounded-lg space-y-3'>
            <img className='bg-gray-200 p-2 rounded-lg w-12' src={logo} alt="" />
            <h3 className='text-[#474747] text-xl font-semibold'>{category_name}</h3>
            <p className='text-[#A3A3A3] font-medium'>{availability}</p>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object.isRequired,
  };
export default Category;