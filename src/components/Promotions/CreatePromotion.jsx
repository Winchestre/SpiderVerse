import { Breadcrumbs, CreatePromotionForm } from ".."
import Title from "../Title"

const CreatePromotion = () => {
    return (
        <section className="section">
            <Title>Create Promotion</Title>
            <Breadcrumbs menu="Promotion" subMenu="Create Promotion" />
            <CreatePromotionForm />
        </section>
    )
}
export default CreatePromotion