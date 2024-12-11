const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User Details Page {id}</div>;
};
export default UserDetails;
