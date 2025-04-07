const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>BU DYNAMIK PAGE {id}</div>;
};

export default page;
