const Card = ({ transaction }) => {
  return (
    <div className="card">
      <div className="card-header">{transaction.title}</div>
      <div className="card-body">{transaction.description}</div>
    </div>
  );
};

export default Card;
