type HeaderProps = {
  title: string;
};


function header({title}: HeaderProps) {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4x1 font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-2 text-gray-600">
        Track your spending with confidence
      </p>
    </header>
  );
}

export default header