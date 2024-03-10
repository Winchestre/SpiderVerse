import { cardImage } from '@/assets/images'

const RewardCard = () => {
    return (
        <div className="p-2 bg-white border-blue-900 border-2 rounded-md card-info">
            <img src={cardImage} alt="image" />
            <div className="flex items-center justify-between mt-4 description">
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                />
                <button className="bg-white cursor-pointer px-2 rounded-full border border-2 border-blue-900 text-blue-900">
                    Entertainment
                </button>
            </div>
        </div>
    )
}

export default RewardCard