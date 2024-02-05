function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
const Randomyear = () => {
  const randomDateValue = randomDate(
    new Date(2015, 0, 1),
    new Date()
  ).toLocaleDateString();
  return <div>{randomDateValue}</div>;
};

export default Randomyear;
