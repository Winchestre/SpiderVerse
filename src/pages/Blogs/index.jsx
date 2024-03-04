import { BlogHeader, BlogTable, BlogThumbnail } from "@/components/Blog";
import { useState } from "react"

const Blog = () => {
  const [activeThumbnail, setActiveThumbnail] = useState(true);
  const addThumbnail = () => setActiveThumbnail(true);
  const removeThumbnail = () => setActiveThumbnail(false);
  return (
    <section className="section">
      <BlogHeader activeThumbnail={activeThumbnail} removeThumbnail={removeThumbnail} addThumbnail={addThumbnail} />
      <div className="mt-3">
        {
          activeThumbnail ? <BlogThumbnail /> : <BlogTable />
        }
      </div>
    </section>
  )
}

export default Blog