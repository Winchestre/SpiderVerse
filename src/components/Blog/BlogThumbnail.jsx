import { blogsArray } from "@/constants/data";

const BlogThumbnail = () => {
    return (
            <div className="grid gap-6 text-base text-stone-950 sm:grid-cols-2 md:grid-cols-3">
                {blogsArray.map((user, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-6 p-3 bg-white border border-blue-900 rounded-lg">
                        <img src={user.image} alt="blog image" />
                        <div>
                            <p className="font-medium leading-normal ">{user.title}</p>
                            <p className="font-light mt-28">{user.author}</p>
                            <p className="font-light opacity-50">{user.date}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default BlogThumbnail