const Button = (props) => {
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  <div className="outer">
    <div className="content">
      <h1 className="heading">Social Buttons</h1>
      <div className="inner">
        <Button name="Like" className="button-1" />
        <Button name="Comment" className="button-2" />
        <Button name="Share" className="button-3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
