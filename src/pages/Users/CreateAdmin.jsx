import { Title } from '@/components'
import { Breadcrumbs } from '@/components'
import { CreateAdminForm } from '..'

const CreateAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Create Admin Information</Title>
        <Breadcrumbs menu="Users" subMenu="Admin Management" nextMenu={`Create profile`} />
      </div>
      <CreateAdminForm />
    </section>
  )
}

export default CreateAdmin