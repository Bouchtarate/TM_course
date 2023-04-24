import Button from "./Button";
const Header = () => {
  const title = "Task Tracker";
  const show = (e) => {
    console.log(e);
  };
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <Button color="lightblue" content="add" clickEvent={show} />
    </header>
  );
};

export default Header;
