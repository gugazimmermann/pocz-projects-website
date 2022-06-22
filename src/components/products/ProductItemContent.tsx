export default function ProductItemContent(
  name: string,
  description: string,
  link: string,
) {
  return (
    <>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-base my-4">{description}</p>
      <a
        className="no-underline hover:underline font-medium hover:text-primary-500"
        href={`https://${link}`}
      >
        {link}
      </a>
    </>
  );
}
