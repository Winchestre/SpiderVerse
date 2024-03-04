import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const CreateBlogForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Post Title"
          placeholder="Add a title"
          name="title"
          control={control}
          errors={errors}
        />
        <Input
          textField={true}
          label="Blog Description"
          placeholder="Add text here"
          name="description"
          control={control}
          errors={errors}
        />
        <Input
          label="Add Image"
          name="image"
          type="file"
          control={control}
          errors={errors}
          className="text-base font-semibold leading-normal text-blue-900 px-[50px] py-[23px] h-auto w-auto"
        />
        <div className="flex items-center gap-4 mt-24">
          <Button variant="outline" className="w-[198px]">
            Save
            <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded" />
          </Button>
          <Button variant="grey" className="w-[198px]">
            Cancel
          </Button>
        </div>
      </form>

    </div>
  );
};

export default CreateBlogForm;
