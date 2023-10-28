export default function TempBox({ children }) {
  children = JSON.parse(children);
  console.log(children.key1);
  return (
    <h1 className="text-2xl font-semibold">{children.key1}</h1>
  )
}