export const dynamicParams = false;

export async function generateStaticParams() {
  const ids = ["men", "women", "jewelry", "electronics"];
  return ids.map((id) => ({ id }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>Product Page - ID: {id}</div>;
}
