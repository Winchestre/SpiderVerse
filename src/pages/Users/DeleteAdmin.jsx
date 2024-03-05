import { DeleteRequest, Title } from '@/components'
import { Breadcrumbs } from '@/components'

const DeleteAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Delete Request</Title>
        <Breadcrumbs menu="Users" subMenu="Admin Management" nextMenu="Delete profile" />
      </div>
      <DeleteRequest />
    </section>
  )
}

export default DeleteAdmin