import { Title } from '@/components'
import { UsersBreadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { CreateAdminForm } from '@/components'

const CreateAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Create Admin Information</Title>
        <UsersBreadcrumbs menu={`Users`} subMenu={`Admin Management`} sub={`Create profile`} />
      </div>
      <CreateAdminForm />
    </section>
  )
}

export default CreateAdmin