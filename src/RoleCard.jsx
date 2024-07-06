import PropTypes from 'prop-types'

function RoleCard({ date, title, description, techList, link }) {
  return (
    <div className="role-div">
      <div className="role-date"><p>{date}</p></div>
      <div>          
        <h3 className="role-title"><a href={link}>{title}</a><span className="arrow-link">↗</span></h3>
        <p className="role-description">
          {description}
        </p>
        <ul className="tech-list">
          {techList.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

RoleCard.propTypes = {
    date: PropTypes.string.IsRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techList: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired
};

export default RoleCard;