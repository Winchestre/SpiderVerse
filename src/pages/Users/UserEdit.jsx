import { useParams } from 'react-router-dom';
import { usersArray, accountsData } from '@/constants/data';
import { useEffect, useState } from 'react';
import { trash, clipboard_tick } from '@/assets/icons';
import { Title, Breadcrumbs, ToggleInput, UserEditInput } from '@/components';
import { Button } from '@/components/ui';

const UserEdit = () => {
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
      <Breadcrumbs menu="User" subMenu="Edit User" />
      <section className='grid grid-cols-2 gap-4 mt-10'>
        <UserEditInput label="User ID" value={`#${user.OrderID}`} />
        <UserEditInput label="Name" value={user.UserName} />
        <UserEditInput label="Email Address" value={user.EmailAddress} />
        <UserEditInput label="Country" value={user.Country} />
        <UserEditInput label="User Type" value={user.UserType} />
        <UserEditInput label="Account Type" value={user.AccountType} />
      </section>
      <section className='grid grid-cols-4 gap-3 mt-14 mb-48'>
        {
          accountsData.map((account, index) => (
            <div key={index} className='p-2 bg-white rounded-lg border border-neutral-200'>
              <div className='flex items-center gap-3 mb-4 justify-between'>
                <img src={account.icons} alt={account.currency} />
                <ToggleInput id={index} />
              </div>
              <p className="text-stone-950 text-2xl font-medium leading-loose">N 1,300,000</p>
              <div className="justify-between flex items-center w-full gap-1">
                <Button size='xs' className="flex-1 leading-18">
                  Add Funds
                </Button>
                <Button variant='destructive' size='xs' className="flex-1 leading-18">
                  Remove Funds
                </Button>
              </div>
            </div>
          ))
        }
      </section>
      <div className="gap-4 flex items-center">
        <Button>
          <img src={clipboard_tick} alt="clip" className="mr-2 h-[18px] w-[18px]" />
          Save
        </Button>
        <Button variant="destructive">
          <img src={trash} alt="trash" className="mr-2 h-[18px] w-[18px]" />
          Delete Account
        </Button>

      </div>
    </div>
  )
}

export default UserEdit