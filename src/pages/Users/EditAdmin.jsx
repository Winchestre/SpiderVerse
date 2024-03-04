import { EditAdminForm, Title } from '@/components'
import { UsersBreadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'

const EditAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Edit Admin Information</Title>
        <UsersBreadcrumbs menu={`Users`} subMenu={`Admin Management`} sub={`Edit`} />
      </div>
      <EditAdminForm />
    </section>
  )
}

export default EditAdmin