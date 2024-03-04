import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usersArray, accountsData } from '../../constants/data';
import { Title, Breadcrumbs, UserViewInput } from '../../components';

const UserView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = usersArray.find((user) => user.OrderID === id);
    if (user) setUser(user);
  }, [id])

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="section">
      <Title>Users</Title>
      <Breadcrumbs menu="User" subMenu="View User" />
      <section className='grid grid-cols-2 gap-4 mt-10'>
        <UserViewInput label="User ID" value={`#${user.OrderID}`} />
        <UserViewInput label="Name" value={user.UserName} />
        <UserViewInput label="Email Address" value={user.EmailAddress} />
        <UserViewInput label="Country" value={user.Country} />
        <UserViewInput label="User Type" value={user.UserType} />
        <UserViewInput label="Account Type" value={user.AccountType} />
      </section>
      <section className='flex gap-3 items-center mt-14'>
        {
          accountsData.map((account, index) => (
            <div key={index} className='p-2 bg-white rounded-lg border border-neutral-200'>
              <div className='flex items-center gap-3 mb-4'>
                <img src={account.icons} alt={account.currency} />
                <p className='text-stone-950 text-sm font-light leading-tight'>Account Balance</p>
              </div>
              <p className="text-stone-950 text-2xl font-medium leading-loose">N 1,300,000</p>
              <hr className="border-b border-b-zinc-400 border-opacity-50 border-t-transparent"></hr>
              <p className="text-zinc-400 text-xs font-light leading-none mt-2">Update: October 20, 2023</p>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default UserView