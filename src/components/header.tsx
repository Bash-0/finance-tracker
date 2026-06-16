type HeaderProps = {
  title: string;
};


function header({title}: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>Track your spending intelligently</p>
    </header>
  );
}

export default header