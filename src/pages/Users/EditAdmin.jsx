import { EditAdminForm, Title } from '@/components'
import { Breadcrumbs } from '@/components'
const EditAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Edit Admin Information</Title>
        <Breadcrumbs menu="Users" subMenu="Admin Management" nextMenu="Edit" />
      </div>
      <EditAdminForm />
    </section>
  )
}

export default EditAdmin